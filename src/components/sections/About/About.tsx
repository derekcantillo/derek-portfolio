import React from 'react'
import { cn, IMAGES } from 'utils'
import { Typography } from 'components/ui/Typography'
import Image from 'next/image'
import {
	ClockIcon,
	AcademicCapIcon,
	HeartIcon
} from '@heroicons/react/24/solid'

const keyFacts = [
	{
		icon: ClockIcon,
		title: '4+ Years Experience',
		description:
			'Professional experience in frontend development creating scalable solutions.',
		color: 'primary'
	},
	{
		icon: AcademicCapIcon,
		title: 'Systems Engineer',
		description: 'Universidad del Magdalena graduate with a solid foundation.',
		color: 'secondary'
	},
	{
		icon: HeartIcon,
		title: 'UI/UX Enthusiast',
		description: 'Passionate about creating beautiful, accessible interfaces.',
		color: 'accent'
	}
]

export const About = () => {
	return (
		<section
			id="about"
			className={cn(
				'container mx-auto flex min-h-screen items-center justify-center'
			)}
		>
			<div className="w-ful">
				<div className="mx-auto mb-12 text-center">
					<Typography variant="h2" className="relative inline-block">
						About Me
						<span
							className={cn(
								'from-primary to-secondary absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r'
							)}
						/>
					</Typography>
				</div>

				{/* Grid Layout - Image takes full height of last column */}
				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					{/* Profile Section - Top row, first two columns */}
					<div className="md:col-span-2">
						<div className="h-full rounded-lg p-6">
							<div className="mb-6 flex items-center">
								<Typography variant="h3">Professional Profile</Typography>
							</div>

							<div className="space-y-4">
								<Typography variant="p" className="text-gray-300/90" size="2xl">
									Systems engineer with more than 4 years of experience in
									frontend development, specialized in creating scalable and
									high performance solutions.
								</Typography>
								<Typography variant="p" className="text-gray-300/90" size="2xl">
									I have solid knowledge in web and mobile frontend (React,
									Next.js, React Native). I have worked under agile
									methodologies such as Scrum, collaborating effectively with
									multidisciplinary teams and adapting quickly to changes.
								</Typography>
								<Typography variant="p" className="text-gray-300/90" size="2xl">
									I stand out for a clear and effective communication, fostering
									collaboration and keeping aligned to the teams. I have
									communication skills in English for collaborative environments
									and focus on user experience as the core of frontend
									development.
								</Typography>
							</div>
						</div>
					</div>

					{/* Image Section - Both rows, last column */}
					<div className="md:col-span-1 md:row-span-2">
						<div className="flex h-full items-center justify-center overflow-hidden border p-2">
							<div className="relative h-full w-full overflow-hidden">
								<Image
									src={IMAGES.DEGREE_PHOTO}
									alt="Derek graduation from Universidad del Magdalena"
									width={400}
									height={500}
									className="h-full w-full object-cover"
								/>
							</div>
						</div>
					</div>

					{/* Key Facts - Bottom row, first two columns */}
					<div className="grid grid-cols-3 gap-4 md:col-span-2">
						{keyFacts.map(fact => {
							const IconComponent = fact.icon
							const textColorClass = `text-${fact.color}`
							const bgColorClass = `bg-${fact.color}/40`
							const borderColorClass = `border-${fact.color}`

							return (
								<div
									key={fact.title}
									className={`border ${borderColorClass} p-6 shadow-md`}
								>
									<div
										className={`mb-4 flex h-10 w-10 items-center justify-center ${bgColorClass} ${textColorClass}`}
									>
										<IconComponent className="h-6 w-6" />
									</div>
									<Typography variant="h4" className={`mb-2 ${textColorClass}`}>
										{fact.title}
									</Typography>
									<Typography variant="p">{fact.description}</Typography>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}
