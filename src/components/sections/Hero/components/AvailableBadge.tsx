'use client'
import { Typography } from '@/components/ui'
import { motion } from 'framer-motion'

interface AvailableBadgeProps {
	text?: string
	className?: string
}

export const AvailableBadge = ({
	text = 'Disponible para proyectos',
	className = ''
}: AvailableBadgeProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8, y: -10 }}
			animate={{ opacity: 1, scale: 1, y: 0 }}
			transition={{
				duration: 0.5,
				ease: [0.25, 0.1, 0.25, 1]
			}}
			className={`bg-accent/10 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 ${className}`}
		>
			<span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
				<span className="bg-accent absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
				<span className="bg-accent relative inline-flex h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3"></span>
			</span>
			<Typography
				variant="span"
				size="sm"
				font="clash-medium"
				className="text-accent"
			>
				<span className="text-xs sm:text-sm">{text}</span>
			</Typography>
		</motion.div>
	)
}
