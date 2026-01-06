'use client'
import React from 'react'
import Link from 'next/link'
import { Typography } from '../Typography'
import { CONTACT_INFO } from '../../../utils/constants'
import { cn } from '../../../utils/cn'

export const Footer = () => {
	const currentYear = new Date().getFullYear()

	const socialLinks = [
		{
			name: 'GitHub',
			href: CONTACT_INFO.SOCIAL.GITHUB,
			icon: (
				<svg
					className="h-5 w-5"
					fill="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path
						fillRule="evenodd"
						d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
						clipRule="evenodd"
					/>
				</svg>
			)
		},
		{
			name: 'LinkedIn',
			href: CONTACT_INFO.SOCIAL.LINKEDIN,
			icon: (
				<svg
					className="h-5 w-5"
					fill="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
				</svg>
			)
		},
		{
			name: 'Email',
			href: `mailto:${CONTACT_INFO.EMAIL}`,
			icon: (
				<svg
					className="h-5 w-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					/>
				</svg>
			)
		},
		{
			name: 'Location',
			href: '#',
			icon: (
				<svg
					className="h-5 w-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
					/>
				</svg>
			),
			label: CONTACT_INFO.LOCATION
		}
	]

	return (
		<footer className="border-t border-gray-200 bg-[#eeeeee] py-8 dark:border-gray-800 dark:bg-[#121418]">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				<div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-4">
					<div className="flex flex-col items-center gap-3 md:items-start">
						<Link
							href="/"
							className="group flex items-center transition-all duration-300 hover:scale-105"
						>
							<div
								className={cn(
									'flex items-center justify-center rounded-lg px-4',
									'from-accent via-accent to-accent/80 bg-gradient-to-br'
								)}
							>
								<Typography
									variant="span"
									size="xl"
									font="clash-bold"
									className="text-light"
								>
									derek
								</Typography>
							</div>
						</Link>

						<Typography
							variant="span"
							size="sm"
							font="clash-regular"
							className="text-gray-600 dark:text-gray-400"
						>
							© {currentYear} Derek. Hecho con{' '}
							<span className="text-accent">♥</span>.
						</Typography>
					</div>

					<div className="flex items-center gap-4">
						{socialLinks.map(link => (
							<Link
								key={link.name}
								href={link.href}
								target={link.name !== 'Location' ? '_blank' : undefined}
								rel={
									link.name !== 'Location' ? 'noopener noreferrer' : undefined
								}
								className={cn(
									'group flex items-center gap-2 rounded-lg p-2',
									'text-gray-600 transition-all duration-200',
									'hover:bg-accent/10 hover:text-accent',
									'dark:hover:text-accent dark:text-gray-400'
								)}
								aria-label={link.name}
								title={link.label || link.name}
							>
								{link.icon}
								{link.label && (
									<Typography
										variant="span"
										size="sm"
										font="clash-regular"
										className="hidden sm:inline"
									>
										{link.label}
									</Typography>
								)}
							</Link>
						))}
					</div>
				</div>
			</div>
		</footer>
	)
}
