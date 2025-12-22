'use client'
import React, { useEffect, useState } from 'react'
import { useThemeStore, type Theme } from '../../../stores/themeStore'
import { cn } from '../../../utils/cn'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

export const ThemeToggle = () => {
	const { theme, setTheme, getEffectiveTheme } = useThemeStore()
	const [mounted, setMounted] = useState(false)
	const [effectiveTheme, setEffectiveTheme] = useState<'light' | 'dark'>(
		'light'
	)

	useEffect(() => {
		setMounted(true)
		setEffectiveTheme(getEffectiveTheme())
	}, [getEffectiveTheme])

	useEffect(() => {
		if (!mounted) return

		const updateEffectiveTheme = () => {
			setEffectiveTheme(getEffectiveTheme())
		}

		// Listen for system theme changes
		const mediaQuery = globalThis.matchMedia('(prefers-color-scheme: dark)')
		mediaQuery.addEventListener('change', updateEffectiveTheme)

		// Apply theme to document
		const currentTheme = getEffectiveTheme()
		document.documentElement.dataset.theme = currentTheme
		setEffectiveTheme(currentTheme)

		return () => {
			mediaQuery.removeEventListener('change', updateEffectiveTheme)
		}
	}, [theme, mounted, getEffectiveTheme])

	const handleToggle = () => {
		// Ciclo: light -> dark -> system -> light
		let newTheme: Theme
		if (theme === 'light') {
			newTheme = 'dark'
		} else if (theme === 'dark') {
			newTheme = 'system'
		} else {
			newTheme = 'light'
		}

		setTheme(newTheme)
		const effective = newTheme === 'system' ? getEffectiveTheme() : newTheme
		document.documentElement.dataset.theme = effective
		setEffectiveTheme(effective)
	}

	if (!mounted) {
		return (
			<div className="flex items-center gap-2">
				<div className="h-10 w-20 animate-pulse rounded-full bg-gray-200" />
			</div>
		)
	}

	// Determinar si está en modo oscuro (efectivo)
	const isDark = effectiveTheme === 'dark'
	const isSystem = theme === 'system'

	return (
		<button
			onClick={handleToggle}
			className={cn(
				'relative inline-flex h-10 w-20 items-center rounded-full transition-all duration-300',
				'border-foreground/10 border-2 backdrop-blur-sm',
				isDark ? 'bg-dark/50' : 'bg-light/50'
			)}
			aria-label={`Current theme: ${theme}. Click to change.`}
			title={isSystem ? `System (${effectiveTheme})` : theme}
		>
			{/* Indicador deslizante */}
			<span
				className={cn(
					'absolute inline-flex h-8 w-8 transform items-center justify-center rounded-full transition-all duration-300',
					'shadow-md',
					isDark
						? 'translate-x-10 bg-gradient-to-br from-slate-600 to-slate-700'
						: 'translate-x-1 bg-gradient-to-br from-orange-400 to-orange-600'
				)}
			>
				{isDark ? (
					<MoonIcon className="h-4 w-4 text-slate-200" />
				) : (
					<SunIcon className="h-5 w-5 text-white" />
				)}
			</span>

			{/* Iconos de fondo */}
			<div className="flex w-full items-center justify-between px-2">
				<SunIcon
					className={cn(
						'z-0 h-4 w-4 transition-opacity duration-300',
						isDark ? 'text-orange-400 opacity-30' : 'opacity-0'
					)}
				/>
				<MoonIcon
					className={cn(
						'z-0 h-4 w-4 transition-opacity duration-300',
						isDark ? 'opacity-0' : 'text-slate-600 opacity-30'
					)}
				/>
			</div>

			{/* Indicador pequeño para System mode */}
			{isSystem && (
				<span className="bg-accent border-background absolute -top-1 -right-1 h-2 w-2 animate-pulse rounded-full border" />
			)}
		</button>
	)
}
