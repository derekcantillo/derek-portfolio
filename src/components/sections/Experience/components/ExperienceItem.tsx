import React from 'react'
import { cn } from 'utils'
import { ExperienceItemProps } from './types'
import { ExperienceCard } from './ExperienceCard'
import { PeriodBadge } from './PeriodBadge'
import { TimelinePoint } from './TimelinePoint'

export const ExperienceItem = ({
	company,
	position,
	location,
	period,
	description,
	stack,
	isLeft
}: ExperienceItemProps) => {
	return (
		<>
			{/* Mobile & Tablet Layout (< 1024px) */}
			<div className="relative mb-12 flex gap-4 lg:hidden last:mb-0">
				<TimelinePoint />
				
				<div className="flex-1 pb-8">
					<ExperienceCard
						company={company}
						position={position}
						location={location}
						period={period}
						description={description}
						stack={stack}
					/>
				</div>
			</div>

			{/* Desktop Layout (>= 1024px) */}
			<div className="relative mb-16 hidden grid-cols-[1fr_auto_1fr] items-center gap-8 last:mb-0 lg:grid">
				<div className={cn('flex', isLeft ? 'justify-end' : 'justify-end')}>
					{isLeft ? (
						<ExperienceCard
							company={company}
							position={position}
							location={location}
							period={period}
							description={description}
							stack={stack}
						/>
					) : (
						<PeriodBadge period={period} />
					)}
				</div>

				<TimelinePoint />

				<div className={cn('flex', isLeft ? 'justify-start' : 'justify-start')}>
					{isLeft ? (
						<PeriodBadge period={period} />
					) : (
						<ExperienceCard
							company={company}
							position={position}
							location={location}
							period={period}
							description={description}
							stack={stack}
						/>
					)}
				</div>
			</div>
		</>
	)
}

