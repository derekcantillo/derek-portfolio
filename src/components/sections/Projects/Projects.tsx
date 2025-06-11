import React from 'react'
import { cn } from 'utils'
import { Typography } from 'components/ui/Typography'

export const Projects = () => {
	return (
		<section
			id="projects"
			className={cn(
				'container mx-auto flex min-h-screen items-center justify-center'
			)}
		>
			<div className={cn('')}>
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
