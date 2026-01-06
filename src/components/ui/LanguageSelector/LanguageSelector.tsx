'use client'
import React, { useState, useRef, useEffect } from 'react'
import { cn } from '@/utils'
import { Typography } from '../Typography'

interface Language {
	code: string
	label: string
	flag: string
}

const languages: Language[] = [
	{ code: 'en', label: 'English', flag: '🇺🇸' },
	{ code: 'es', label: 'Español', flag: '🇪🇸' }
]

interface LanguageSelectorProps {
	className?: string
}

export const LanguageSelector = ({ className }: LanguageSelectorProps) => {
	const [isOpen, setIsOpen] = useState(false)
	const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[1]) // Default Spanish
	const dropdownRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	const handleLanguageChange = (language: Language) => {
		setCurrentLanguage(language)
		setIsOpen(false)
		// TODO: Implement language change logic with i18n
		console.log('Language changed to:', language.code)
	}

	return (
		<div className={cn('relative', className)} ref={dropdownRef}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={cn(
					'flex items-center gap-2 rounded-lg px-3 py-2 transition-all duration-200',
					'hover:bg-accent/10 active:bg-accent/20 cursor-pointer',
					'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
				)}
				aria-label="Select language"
				aria-expanded={isOpen}
			>
				<span className="text-xl">{currentLanguage.flag}</span>
				<Typography
					variant="span"
					size="sm"
					font="clash-medium"
					className="hidden sm:block"
				>
					{currentLanguage.code.toUpperCase()}
				</Typography>
				<svg
					className={cn(
						'h-4 w-4 transition-transform duration-200',
						isOpen && 'rotate-180'
					)}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</button>

			{isOpen && (
				<div
					className={cn(
						'absolute right-0 top-full mt-2 w-40 overflow-hidden rounded-xl',
						'bg-[#eeeeee] dark:bg-[#121418] border-2 border-gray-200 dark:border-gray-700',
						'shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200'
					)}
				>
					{languages.map(language => (
						<button
							key={language.code}
							onClick={() => handleLanguageChange(language)}
							className={cn(
								'flex w-full items-center gap-3 px-4 py-3 transition-colors',
								'hover:bg-accent/10 active:bg-accent/20 cursor-pointer',
								'first:rounded-t-xl last:rounded-b-xl',
								currentLanguage.code === language.code &&
									'bg-accent/20 text-accent font-semibold'
							)}
						>
							<span className="text-xl">{language.flag}</span>
							<Typography
								variant="span"
								size="sm"
								font={currentLanguage.code === language.code ? 'clash-semibold' : 'clash-medium'}
								className={cn(
									currentLanguage.code === language.code && 'text-accent'
								)}
							>
								{language.label}
							</Typography>
							{currentLanguage.code === language.code && (
								<svg
									className="ml-auto h-4 w-4 text-accent"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fillRule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clipRule="evenodd"
									/>
								</svg>
							)}
						</button>
					))}
				</div>
			)}
		</div>
	)
}

