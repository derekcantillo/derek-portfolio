'use client'
import Image from 'next/image'
import { BlobBackground } from './BlobBackground'
import { ExperienceBadge } from './ExperienceBadge'
import { motion } from 'framer-motion'

interface HeroImageProps {
	imageSrc: string
	imageAlt?: string
	showExperienceBadge?: boolean
	experienceYears?: string
	experienceLabel?: string
}

export const HeroImage = ({
	imageSrc,
	imageAlt = 'Profile photo',
	showExperienceBadge = true,
	experienceYears,
	experienceLabel
}: HeroImageProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8, x: 50 }}
			animate={{ opacity: 1, scale: 1, x: 0 }}
			transition={{
				duration: 0.8,
				delay: 0.3,
				ease: [0.25, 0.1, 0.25, 1]
			}}
			className="relative aspect-square w-full max-w-md"
		>
			<BlobBackground />

			<motion.div
				whileHover={{ scale: 1.02 }}
				transition={{ duration: 0.3 }}
				className="relative h-full w-full"
			>
				<Image
					src={imageSrc}
					alt={imageAlt}
					fill
					className="rounded-full border-10 border-white object-cover shadow-lg"
					priority
				/>
			</motion.div>

			{showExperienceBadge && (
				<ExperienceBadge years={experienceYears} label={experienceLabel} />
			)}
		</motion.div>
	)
}
