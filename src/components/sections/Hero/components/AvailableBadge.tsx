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
			className={`bg-accent/10 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 ${className}`}
		>
			<span className="relative flex h-3 w-3">
				<span className="bg-accent absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
				<span className="bg-accent relative inline-flex h-3 w-3 rounded-full"></span>
			</span>
			<Typography
				variant="span"
				size="sm"
				font="clash-medium"
				className="text-accent"
			>
				{text}
			</Typography>
		</motion.div>
	)
}
