'use client'
import React, { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import {
	ChatBubbleLeftRightIcon,
	ArrowDownTrayIcon,
	BriefcaseIcon,
	XMarkIcon
} from '@heroicons/react/24/solid'
import { Typography } from '@/components/ui'
import { cn, CONTACT_INFO, RESUME_INFO } from 'utils'

const fabVariants = {
	hidden: {
		scale: 0,
		opacity: 0
	},
	visible: {
		scale: 1,
		opacity: 1,
		transition: {
			type: 'spring' as const,
			stiffness: 260,
			damping: 20
		}
	},
	exit: {
		scale: 0,
		opacity: 0,
		transition: {
			duration: 0.2
		}
	}
}

const menuItemVariants = {
	hidden: {
		opacity: 0,
		y: 20,
		scale: 0.8
	},
	visible: (custom: number) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			delay: custom * 0.1,
			type: 'spring' as const,
			stiffness: 300,
			damping: 24
		}
	}),
	exit: {
		opacity: 0,
		y: 10,
		scale: 0.8,
		transition: {
			duration: 0.15
		}
	}
}

export const FloatingActionButton = () => {
	const t = useTranslations('hero')
	const locale = useLocale()
	const [isVisible, setIsVisible] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const resumeUrl = locale === 'en' ? RESUME_INFO.CV_EN : RESUME_INFO.CV_ES

	useEffect(() => {
		const handleScroll = () => {
			const heroSection = document.getElementById('hero')
			if (heroSection) {
				const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
				const scrollPosition = window.scrollY + window.innerHeight

				setIsVisible(scrollPosition > heroBottom + 100)
			}
		}

		window.addEventListener('scroll', handleScroll)
		handleScroll()

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const handleToggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const handleEmailClick = () => {
		window.location.href = `mailto:${CONTACT_INFO.EMAIL}`
		setIsMenuOpen(false)
	}

	return (
		<AnimatePresence>
			{isVisible && (
				<div className="fixed right-6 bottom-6 z-50">
					<AnimatePresence>
						{isMenuOpen && (
							<motion.div
								className="mb-4 flex flex-col gap-3"
								initial="hidden"
								animate="visible"
								exit="exit"
							>
								<motion.button
									custom={0}
									variants={menuItemVariants}
									onClick={handleEmailClick}
									whileHover={{ scale: 1.05, x: -5 }}
									whileTap={{ scale: 0.95 }}
									className={cn(
										'group bg-background flex items-center gap-3 rounded-2xl px-4 py-3 shadow-lg',
										'border-accent/20 cursor-pointer justify-center border-2 backdrop-blur-sm'
									)}
									aria-label={t('buttons.letsTalk')}
								>
									<Typography
										variant="span"
										size="sm"
										font="clash-medium"
										color="inherit"
										className="text-foreground"
									>
										{t('buttons.letsTalk')}
									</Typography>

									<ChatBubbleLeftRightIcon className="text-accent h-5 w-5" />
								</motion.button>

								<motion.a
									href={resumeUrl}
									target="_blank"
									rel="noopener noreferrer"
									download
									custom={1}
									variants={menuItemVariants}
									whileHover={{ scale: 1.05, x: -5 }}
									whileTap={{ scale: 0.95 }}
									className={cn(
										'group bg-background flex items-center gap-3 rounded-2xl px-4 py-3 shadow-lg',
										'border-accent/20 cursor-pointer justify-center border-2 backdrop-blur-sm'
									)}
									aria-label={t('buttons.downloadCV')}
								>
									<Typography
										variant="span"
										size="sm"
										font="clash-medium"
										color="inherit"
										className="text-foreground"
									>
										{t('buttons.downloadCV')}
									</Typography>

									<ArrowDownTrayIcon className="text-accent h-5 w-5" />
								</motion.a>
							</motion.div>
						)}
					</AnimatePresence>

					<motion.button
						variants={fabVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						onClick={handleToggleMenu}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						className={cn(
							'bg-accent flex h-16 w-16 items-center justify-center rounded-full shadow-xl',
							'border-light/20 cursor-pointer border-2'
						)}
						aria-label="Toggle contact menu"
					>
						<motion.div
							animate={{ rotate: isMenuOpen ? 90 : 0 }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}
						>
							{isMenuOpen ? (
								<XMarkIcon className="text-light h-7 w-7" />
							) : (
								<BriefcaseIcon className="text-light h-7 w-7" />
							)}
						</motion.div>
					</motion.button>
				</div>
			)}
		</AnimatePresence>
	)
}
