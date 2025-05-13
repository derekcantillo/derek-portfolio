import React from 'react'
import { cn } from 'utils'
import { Typography } from 'components/ui/Typography'

export const Projects = () => {
	return (
		<section className={cn('bg-gray-50 py-20')}>
			<div className={cn('container mx-auto px-4')}>
				<Typography variant="h2" className="mb-8">
					Projects
				</Typography>
				<div
					className={cn('grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3')}
				>
					{/* Project cards will go here */}
				</div>
			</div>
		</section>
	)
}
