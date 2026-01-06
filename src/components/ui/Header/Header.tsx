'use client'
import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { cn } from '../../../utils/cn'
import { Typography } from '../Typography'
import { ThemeToggle } from '../ThemeToggle'
import { LanguageSelector } from '../LanguageSelector'
import { MobileMenu } from '../MobileMenu'

export const Header = () => {
	const [activeSection, setActiveSection] = useState('hero')
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

	const sections = useMemo(
		() => [
			{ name: 'Inicio', href: '#hero', id: 'hero' },
			{ name: 'Sobre mí', href: '#about', id: 'about' },
			{ name: 'Trayectoria', href: '#experience', id: 'experience' },
			{ name: 'Proyectos', href: '#projects', id: 'projects' },
			{ name: 'Tecnologías', href: '#technologies', id: 'technologies' }
		],
		[]
	)

	// Handle scroll effect
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	// Intersection Observer for active section
	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: '-50% 0px -50% 0px',
			threshold: 0
		}

		const observerCallback = (entries: IntersectionObserverEntry[]) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id)
				}
			})
		}

		const observer = new IntersectionObserver(observerCallback, observerOptions)

		// Observe all sections
		sections.forEach(section => {
			const element = document.getElementById(section.id)
			if (element) observer.observe(element)
		})

		return () => {
			// Cleanup observer
			sections.forEach(section => {
				const element = document.getElementById(section.id)
				if (element) observer.unobserve(element)
			})
		}
	}, [sections])

	return (
		<>
			<header
				className={cn(
					'fixed top-0 left-0 z-50 w-full transition-all duration-500 ease-in-out',
					isScrolled
						? 'border-b border-gray-200/50 bg-[#eeeeee]/90 shadow-lg backdrop-blur-xl dark:border-gray-800/50 dark:bg-[#121418]/90'
						: 'bg-transparent'
				)}
			>
				<div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6 lg:px-8">
					{/* Logo - Left side */}
					<Link
						href="/"
						className={cn(
							'flex transform items-center gap-2 transition-all duration-300',
							'hover:scale-105 active:scale-95',
							'focus-visible:ring-accent rounded-full focus-visible:ring-2 focus-visible:outline-none'
						)}
					>
						<div
							className={cn(
								'flex h-10 w-10 items-center justify-center rounded-full',
								'from-accent via-accent to-accent/80 bg-gradient-to-br',
								'shadow-accent/40 hover:shadow-accent/50 shadow-lg transition-shadow hover:shadow-xl'
							)}
						>
							<Typography
								variant="span"
								size="xl"
								font="clash-bold"
								className="text-light"
							>
								D
							</Typography>
						</div>
					</Link>

					{/* Desktop Navigation - Center */}
					<nav className="hidden lg:block">
						<ul className="flex items-center space-x-8">
							{sections.map(section => (
								<li key={section.name}>
									<Link
										href={section.href}
										className={cn(
											'relative block transition-all duration-200',
											'hover:text-accent'
										)}
									>
										<Typography
											variant="span"
											size="base"
											font={
												activeSection === section.id
													? 'clash-semibold'
													: 'clash-regular'
											}
											color={
												activeSection === section.id ? 'accent' : 'inherit'
											}
										>
											{section.name}
										</Typography>
										{activeSection === section.id && (
											<span
												className={cn(
													'absolute -bottom-1 left-0 h-0.5 w-full',
													'bg-accent rounded-full',
													'animate-in slide-in-from-left duration-200'
												)}
											/>
										)}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					{/* Right side - Theme Toggle & Language Selector */}
					<div className="flex items-center gap-2 md:gap-3">
						<ThemeToggle />
						<LanguageSelector />

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMobileMenuOpen(true)}
							className={cn(
								'rounded-lg p-2 transition-colors lg:hidden',
								'hover:bg-accent/10 active:bg-accent/20'
							)}
							aria-label="Open menu"
						>
							<svg
								className="h-6 w-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>
			</header>

			{/* Mobile Menu */}
			<MobileMenu
				isOpen={isMobileMenuOpen}
				onClose={() => setIsMobileMenuOpen(false)}
				sections={sections}
				activeSection={activeSection}
			/>
		</>
	)
}
