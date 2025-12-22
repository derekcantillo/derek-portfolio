'use client'
import { useEffect } from 'react'
import { useThemeStore } from '../../../stores/themeStore'

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const theme = useThemeStore(state => state.theme)
	const getEffectiveTheme = useThemeStore(state => state.getEffectiveTheme)

	useEffect(() => {
		const applyTheme = () => {
			const effectiveTheme = getEffectiveTheme()
			document.documentElement.dataset.theme = effectiveTheme
		}

		// Apply theme immediately
		applyTheme()

		// Listen for system theme changes when theme is set to 'system'
		const mediaQuery = globalThis.matchMedia('(prefers-color-scheme: dark)')
		const handleSystemThemeChange = () => {
			if (theme === 'system') {
				applyTheme()
			}
		}

		mediaQuery.addEventListener('change', handleSystemThemeChange)

		return () => {
			mediaQuery.removeEventListener('change', handleSystemThemeChange)
		}
	}, [theme, getEffectiveTheme])

	return <>{children}</>
}
