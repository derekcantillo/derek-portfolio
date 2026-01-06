'use client'
import { Typography, Button } from '@/components/ui'
import {
	ChatBubbleLeftRightIcon,
	ArrowDownTrayIcon
} from '@heroicons/react/24/solid'
import { AvailableBadge } from './AvailableBadge'
import { AnimatedText } from './AnimatedText'
import { motion } from 'framer-motion'

interface HeroContentProps {
	greeting?: string
	roles: string[]
	availableText?: string
	contactEmail: string
	resumeUrl: string
	showAvailableBadge?: boolean
	githubUrl?: string
	linkedinUrl?: string
}

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.1
		}
	}
}

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: [0.25, 0.1, 0.25, 1] as const
		}
	}
}

export const HeroContent = ({
	greeting = "Hey, I'm Derek.",
	roles,
	availableText,
	contactEmail,
	resumeUrl,
	showAvailableBadge = true,
	githubUrl,
	linkedinUrl
}: HeroContentProps) => {
	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			className="flex w-full flex-col text-center lg:text-left"
		>
			{showAvailableBadge && (
				<div className="flex justify-center lg:justify-start">
					<AvailableBadge text={availableText} className="mb-4 md:mb-6" />
				</div>
			)}

			<motion.div variants={itemVariants}>
				<Typography
					variant="h2"
					className="mb-3 md:mb-4"
					size="3xl"
					font="clash-semibold"
				>
					<span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
						{greeting}
					</span>
				</Typography>
			</motion.div>

			<motion.div variants={itemVariants}>
				<Typography
					variant="h2"
					className="mb-4 md:mb-6"
					size="4xl"
					font="clash-semibold"
					color="accent"
				>
					<div className="flex min-h-[5rem] items-center justify-center sm:min-h-[6rem] md:min-h-[7.5rem] lg:min-h-[10rem] lg:items-start lg:justify-start xl:min-h-[14rem]">
						<span className="text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
							<AnimatedText
								texts={roles}
								typingSpeed={100}
								deletingSpeed={50}
								pauseDuration={2000}
							/>
						</span>
					</div>
				</Typography>
			</motion.div>

			<motion.div
				variants={itemVariants}
				className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4 md:mt-8 lg:justify-start"
			>
				<Button
					element="a"
					href={`mailto:${contactEmail}`}
					variant="primary"
					icon={<ChatBubbleLeftRightIcon />}
					iconPosition="left"
					className="w-full sm:w-auto"
				>
					Let&apos;s Talk
				</Button>

				<Button
					element="a"
					href={resumeUrl}
					variant="secondary"
					icon={<ArrowDownTrayIcon />}
					iconPosition="right"
					download
					className="w-full sm:w-auto"
				>
					Download CV
				</Button>
			</motion.div>

			{(githubUrl || linkedinUrl) && (
				<motion.div
					variants={itemVariants}
					className="mt-6 flex items-center justify-center gap-4 lg:justify-start"
				>
					{githubUrl && (
						<motion.a
							href={githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							className="bg-foreground/10 text-foreground hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:text-white"
							aria-label="GitHub"
						>
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
						</motion.a>
					)}
					{linkedinUrl && (
						<motion.a
							href={linkedinUrl}
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							className="bg-foreground/10 text-foreground hover:bg-accent flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:text-white"
							aria-label="LinkedIn"
						>
							<svg
								className="h-5 w-5"
								fill="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
							</svg>
						</motion.a>
					)}
				</motion.div>
			)}
		</motion.div>
	)
}
