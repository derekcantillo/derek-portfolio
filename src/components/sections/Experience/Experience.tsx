import React from 'react'
import { cn } from 'utils'
import { Typography } from 'components/ui/Typography'

export const Experience = () => {
	return (
		<section
			id="experience"
			className={cn(
				'container mx-auto flex min-h-screen items-center justify-center'
			)}
		>
			<div className={cn('')}>
				<Typography variant="h2" className="mb-8">
					Work Experience
				</Typography>
				<div className={cn('space-y-8')}>
					{/* Experience items will go here */}
				</div>
			</div>
		</section>
	)
}
