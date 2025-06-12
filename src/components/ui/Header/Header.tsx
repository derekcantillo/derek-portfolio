'use client'
import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { cn } from '../../../utils/cn'
import { Typography } from '../Typography'

export const Header = () => {
	const [activeSection, setActiveSection] = useState('hero')

	const sections = useMemo(
		() => [
			{ name: 'Home', href: '#hero', id: 'hero' },
			{ name: 'About', href: '#about', id: 'about' },
			{ name: 'Experience', href: '#experience', id: 'experience' },
			{ name: 'Projects', href: '#projects', id: 'projects' },
			{ name: 'Contact', href: '#contact', id: 'contact' }
		],
		[]
	)

	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.5
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
		<header className="bg-dark/50 fixed top-0 left-0 z-50 w-full backdrop-blur-md">
			<div className="container mx-auto flex items-center justify-between px-4 py-4">
				{/* Logo */}
				<div className="text-2xl font-bold">
					<Link href="/">
						<span className="text-accent">D</span>
					</Link>
				</div>

				{/* Navigation */}
				<nav>
					<ul className="flex space-x-6">
						{sections.map(section => (
							<li key={section.name}>
								<Link href={section.href}>
									<Typography
										variant="p"
										size="lg"
										className={cn(
											'hover:text-accent transition-all duration-300',
											activeSection === section.id
												? 'origin-left scale-x-110'
												: 'scale-x-100'
										)}
										font={
											activeSection === section.id
												? 'clash-semibold'
												: 'clash-regular'
										}
										color={activeSection === section.id ? 'accent' : 'inherit'}
									>
										{section.name}
									</Typography>
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	)
}
