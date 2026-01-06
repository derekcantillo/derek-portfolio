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
			className={`absolute -right-2 -bottom-2 z-10 rounded-xl bg-white p-2.5 shadow-xl sm:-right-3 sm:-bottom-3 sm:rounded-2xl sm:p-3 md:p-4 ${className}`}
		>
			<div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
				<motion.div
					whileHover={{ rotate: 360 }}
					transition={{ duration: 0.6 }}
					className="bg-accent/10 rounded-lg p-2 sm:p-2.5 md:p-3"
				>
					<RocketLaunchIcon className="text-accent h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
				</motion.div>
				<div>
					<Typography
						variant="p"
						size="xs"
						font="clash-regular"
						className="text-gray-600"
					>
						<span className="text-[10px] sm:text-xs">{label}</span>
					</Typography>
					<Typography
						variant="p"
						size="lg"
						font="clash-semibold"
						className="text-dark"
					>
						<span className="text-sm sm:text-base md:text-lg">
							{years}
						</span>
					</Typography>
				</div>
			</div>
		</motion.div>
	)
}
