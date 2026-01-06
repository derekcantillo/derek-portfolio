'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import { cn } from 'utils'
import { Typography } from 'components/ui/Typography'
import { ExperienceItem } from './components'

export const Experience = () => {
	const t = useTranslations('experience')

	const experiences = [
		{
			company: t('experiences.0.company'),
			position: t('experiences.0.position'),
			location: t('experiences.0.location'),
			period: t('experiences.0.period'),
			description: t('experiences.0.description'),
			stack: t('experiences.0.stack')
		},
		{
			company: t('experiences.1.company'),
			position: t('experiences.1.position'),
			location: t('experiences.1.location'),
			period: t('experiences.1.period'),
			description: t('experiences.1.description'),
			stack: t('experiences.1.stack')
		},
		{
			company: t('experiences.2.company'),
			position: t('experiences.2.position'),
			location: t('experiences.2.location'),
			period: t('experiences.2.period'),
			description: t('experiences.2.description'),
			stack: t('experiences.2.stack')
		},
		{
			company: t('experiences.3.company'),
			position: t('experiences.3.position'),
			location: t('experiences.3.location'),
			period: t('experiences.3.period'),
			description: t('experiences.3.description'),
			stack: t('experiences.3.stack')
		}
	]

	return (
		<section
			data-scroll-section
			id="experience"
			className="bg-background relative min-h-screen px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:py-20"
		>
			<div className="container mx-auto mb-10 text-center sm:mb-12 lg:mb-20">
				<Typography
					variant="span"
					className="text-accent mb-1 block text-xs font-semibold tracking-wider uppercase sm:mb-2 sm:text-sm"
				>
					{t('title')}
				</Typography>
				<Typography
					variant="h2"
					className="text-foreground text-2xl sm:text-3xl lg:text-4xl"
				>
					{t('heading')}
				</Typography>
			</div>

			<div className="relative container mx-auto max-w-6xl">
				{/* Timeline Line - Vertical for mobile/tablet, center for desktop */}
				<div
					className={cn(
						'absolute top-0 bottom-0 w-0.5 bg-[var(--border-color)]',
						'left-[11px] sm:left-[13px] lg:left-1/2 lg:-translate-x-1/2'
					)}
				></div>

				<div className="relative">
					{experiences.map((exp, index) => (
						<ExperienceItem
							key={exp.company}
							company={exp.company}
							position={exp.position}
							location={exp.location}
							period={exp.period}
							description={exp.description}
							stack={exp.stack}
							isLeft={index % 2 !== 0}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
