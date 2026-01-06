import React from 'react'
import { cn } from 'utils'
import { Typography } from 'components/ui/Typography'
import { ExperienceCardProps } from './types'

export const ExperienceCard = ({
	company,
	position,
	location,
	period,
	description,
	stack
}: ExperienceCardProps) => {
	return (
		<div
			className={cn(
				'w-full rounded-xl border shadow-md',
				'p-4 sm:p-6 lg:max-w-xl lg:p-8',
				'border-[var(--border-color)] bg-[var(--card-bg)]',
				'hover:border-accent/40 transition-all duration-300 hover:shadow-lg'
			)}
		>
			<div className="mb-3 sm:mb-4">
				<Typography 
					variant="h4" 
					className="text-accent mb-1 text-lg font-bold sm:mb-2 sm:text-xl lg:text-2xl"
				>
					{company}
				</Typography>
				<Typography 
					variant="h5" 
					className="text-foreground/90 mb-2 text-base italic sm:mb-3 sm:text-lg lg:text-xl"
				>
					{position}
				</Typography>
				<div className="mb-2 flex flex-wrap items-center gap-2 text-xs sm:mb-3 sm:gap-4 sm:text-sm">
					<Typography
						variant="span"
						className="text-foreground/60 flex items-center gap-1"
					>
						<span>📍</span> {location}
					</Typography>
					<Typography
						variant="span"
						className="text-foreground/60 flex items-center gap-1"
					>
						<span>📅</span> {period}
					</Typography>
				</div>
			</div>

			<Typography
				variant="p"
				className="text-foreground/70 mb-3 text-xs leading-relaxed sm:mb-4 sm:text-sm"
			>
				{description}
			</Typography>

			<div className="flex flex-wrap gap-1.5 sm:gap-2">
				{stack.split(',').map((tech: string) => (
					<Typography
						variant="span"
						size="xs"
						key={tech}
						className={cn(
							'border-accent text-accent bg-accent/10 rounded-full border',
							'px-2 py-0.5 text-[10px] sm:px-3 sm:py-1 sm:text-xs',
							'hover:bg-accent capitalize transition-colors hover:text-white'
						)}
					>
						{tech.trim()}
					</Typography>
				))}
			</div>
		</div>
	)
}

