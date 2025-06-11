import React from 'react'
import { cn } from 'utils'
import { Typography } from 'components/ui/Typography'

export const About = () => {
	return (
		<section
			id="about"
			className={cn(
				'container mx-auto flex min-h-screen items-center justify-center'
			)}
		>
			<div className={cn('')}>
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
