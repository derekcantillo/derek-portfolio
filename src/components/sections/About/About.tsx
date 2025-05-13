import React from 'react'
import { cn } from 'utils'
import { Typography } from 'components/ui/Typography'

export const About = () => {
	return (
		<section className={cn('py-20')}>
			<div className={cn('container mx-auto px-4')}>
				<Typography variant="h2" className="mb-8">
					About Me
				</Typography>
				<div className={cn('prose max-w-none')}>
					<Typography variant="p" size="lg">
						Your about content will go here
					</Typography>
				</div>
			</div>
		</section>
	)
}
