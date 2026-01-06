'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/utils'
import { Typography } from '../Typography'

interface Section {
	name: string
	href: string
	id: string
}

interface MobileMenuProps {
	isOpen: boolean
	onClose: () => void
	sections: Section[]
	activeSection: string
}

export const MobileMenu = ({
	isOpen,
	onClose,
	sections,
	activeSection
}: MobileMenuProps) => {
	// Prevent body scroll when menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}

		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [isOpen])

	return (
		<>
			{/* Backdrop */}
			{isOpen && (
				<div
					className={cn(
						'fixed inset-0 z-40 bg-black/60 backdrop-blur-sm',
						'animate-in fade-in duration-300'
					)}
					onClick={onClose}
				/>
			)}

			{/* Mobile Menu */}
			<div
				className={cn(
					'fixed right-0 top-0 z-50 h-full w-[300px]',
					'bg-[#eeeeee] dark:bg-[#121418]',
					'shadow-2xl transition-transform duration-500 ease-out',
					'border-l-2 border-gray-200 dark:border-gray-800',
					isOpen ? 'translate-x-0' : 'translate-x-full'
				)}
			>
				<div className="flex h-full flex-col">
					{/* Header */}
					<div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 p-6">
						<Typography variant="h3" size="xl" font="clash-semibold">
							Menu
						</Typography>
						<button
							onClick={onClose}
							className={cn(
								'rounded-full p-2 transition-all duration-200',
								'hover:bg-accent/10 active:bg-accent/20 hover:rotate-90',
								'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'
							)}
							aria-label="Close menu"
						>
							<svg
								className="h-6 w-6 transition-transform"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>

					{/* Navigation */}
					<nav className="flex-1 overflow-y-auto px-6 py-8">
						<ul className="space-y-1">
							{sections.map((section, index) => (
								<li
									key={section.name}
									style={{ animationDelay: `${index * 50}ms` }}
									className={cn(
										'animate-in slide-in-from-right duration-300',
										isOpen ? 'opacity-100' : 'opacity-0'
									)}
								>
									<Link
										href={section.href}
										onClick={onClose}
										className={cn(
											'group relative block rounded-xl px-4 py-3.5 transition-all duration-200',
											'hover:bg-accent/10 active:bg-accent/20 hover:pl-6',
											activeSection === section.id &&
												'bg-accent/15 border-l-4 border-accent pl-6'
										)}
									>
										<Typography
											variant="p"
											size="lg"
											font={
												activeSection === section.id
													? 'clash-semibold'
													: 'clash-regular'
											}
											color={activeSection === section.id ? 'accent' : 'inherit'}
											className="transition-colors group-hover:text-accent"
										>
											{section.name}
										</Typography>
									</Link>
								</li>
							))}
						</ul>
					</nav>

					{/* Footer */}
					<div className="border-t border-gray-200 dark:border-gray-800 p-6">
						<Typography
							variant="p"
							size="sm"
							font="clash-regular"
							className="text-gray-500 dark:text-gray-400 text-center"
						>
							© 2024 Derek Cantillo
						</Typography>
					</div>
				</div>
			</div>
		</>
	)
}

