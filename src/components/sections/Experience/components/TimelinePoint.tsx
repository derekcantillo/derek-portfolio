import React from 'react'
import { cn } from 'utils'

export const TimelinePoint = () => {
	return (
		<div className="relative z-10 flex flex-shrink-0 flex-col items-center">
			<div
				className={cn(
					'bg-accent rounded-full shadow-lg',
					'flex items-center justify-center',
					'ring-background',
					'h-6 w-6 ring-2 sm:h-7 sm:w-7 sm:ring-3 lg:h-8 lg:w-8 lg:ring-4'
				)}
			>
				<div className="h-2 w-2 rounded-full bg-white sm:h-2.5 sm:w-2.5 lg:h-3 lg:w-3"></div>
			</div>
		</div>
	)
}

