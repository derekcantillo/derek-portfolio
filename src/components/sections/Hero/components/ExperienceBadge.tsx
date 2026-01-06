'use client'
import { Typography } from '@/components/ui'
import { RocketLaunchIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

interface ExperienceBadgeProps {
	years?: string
	label?: string
	className?: string
}

export const ExperienceBadge = ({
	years = '5+ Años',
	label = 'Experiencia',
	className = ''
}: ExperienceBadgeProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5, x: 20, y: 20 }}
			animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
			transition={{
				duration: 0.6,
				delay: 1,
				type: 'spring',
				stiffness: 200,
				damping: 15
			}}
			whileHover={{
				scale: 1.05,
				rotate: [0, -2, 2, -2, 0],
				transition: { duration: 0.3 }
			}}
			className={`absolute -right-4 -bottom-4 z-10 rounded-2xl bg-white p-4 shadow-xl ${className}`}
		>
			<div className="flex items-center gap-3">
				<motion.div
					whileHover={{ rotate: 360 }}
					transition={{ duration: 0.6 }}
					className="bg-accent/10 rounded-lg p-3"
				>
					<RocketLaunchIcon className="text-accent h-6 w-6" />
				</motion.div>
				<div>
					<Typography
						variant="p"
						size="xs"
						font="clash-regular"
						className="text-gray-600"
					>
						{label}
					</Typography>
					<Typography
						variant="p"
						size="lg"
						font="clash-semibold"
						className="text-dark"
					>
						{years}
					</Typography>
				</div>
			</div>
		</motion.div>
	)
}
