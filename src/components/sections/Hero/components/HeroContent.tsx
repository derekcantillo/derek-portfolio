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
	showAvailableBadge = true
}: HeroContentProps) => {
	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			className="flex flex-col"
		>
			{showAvailableBadge && (
				<AvailableBadge text={availableText} className="mb-6" />
			)}

			<motion.div variants={itemVariants}>
				<Typography
					variant="h2"
					className="mb-4"
					size="5xl"
					font="clash-semibold"
				>
					{greeting}
				</Typography>
			</motion.div>

			<motion.div variants={itemVariants}>
				<Typography
					variant="h2"
					className="mb-4"
					size="7xl"
					font="clash-semibold"
					color="accent"
				>
					<AnimatedText
						texts={roles}
						typingSpeed={100}
						deletingSpeed={50}
						pauseDuration={2000}
					/>
				</Typography>
			</motion.div>

			<motion.div variants={itemVariants} className="mt-8 flex gap-4">
				<Button
					element="a"
					href={`mailto:${contactEmail}`}
					variant="primary"
					icon={<ChatBubbleLeftRightIcon />}
					iconPosition="left"
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
				>
					Download CV
				</Button>
			</motion.div>
		</motion.div>
	)
}
