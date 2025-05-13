import React from 'react'
import { cn } from 'utils'
import { Typography } from 'components/ui/Typography'

export const Experience = () => {
	return (
		<section className={cn('py-20')}>
			<div className={cn('container mx-auto px-4')}>
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
