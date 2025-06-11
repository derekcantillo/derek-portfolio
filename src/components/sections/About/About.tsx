import React from 'react'
import { cn, IMAGES } from 'utils'
import { Typography } from 'components/ui/Typography'
import Image from 'next/image'
import {
	ClockIcon,
	AcademicCapIcon,
	HeartIcon
} from '@heroicons/react/24/solid'

export const About = () => {
	return (
		<section
			id="about"
			className={cn(
				'container mx-auto flex min-h-screen items-center justify-center py-16'
			)}
		>
			<div className="w-ful">
				<div className="mx-auto mb-12 text-center">
					<Typography variant="h2" className="relative inline-block">
						About Me
						<span className="from-primary to-secondary absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r"></span>
					</Typography>
				</div>

				{/* Grid Layout - Image takes full height of last column */}
				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					{/* Profile Section - Top row, first two columns */}
					<div className="md:col-span-2">
						<div className="h-full rounded-lg border-2 border-white p-6">
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
						<div className="flex h-full items-center justify-center overflow-hidden rounded-lg border-2 border-white">
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
						{/* Experience */}
						<div className="border-primary/20 rounded-lg border-2 p-6 shadow-md">
							<div className="bg-primary/40 text-primary mb-4 flex h-10 w-10 items-center justify-center">
								<ClockIcon className="h-6 w-6" />
							</div>
							<Typography variant="h4" className="text-primary mb-2">
								4+ Years Experience
							</Typography>
							<Typography variant="p">
								Professional experience in frontend development creating
								scalable solutions.
							</Typography>
						</div>

						{/* Education */}
						<div className="border-secondary/20 rounded-lg border-2 p-6 shadow-md">
							<div className="bg-secondary/40 text-secondary mb-4 flex h-10 w-10 items-center justify-center">
								<AcademicCapIcon className="h-6 w-6" />
							</div>
							<Typography variant="h4" className="text-secondary mb-2">
								Systems Engineer
							</Typography>
							<Typography variant="p">
								Universidad del Magdalena graduate with a solid foundation.
							</Typography>
						</div>

						{/* Passion */}
						<div className="border-accent rounded-lg border-2 p-6 shadow-md">
							<div className="text-accent bg-accent/40 mb-4 flex h-10 w-10 items-center justify-center">
								<HeartIcon className="h-6 w-6" />
							</div>
							<Typography variant="h4" className="text-accent mb-2">
								UI/UX Enthusiast
							</Typography>
							<Typography variant="p">
								Passionate about creating beautiful, accessible interfaces.
							</Typography>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
