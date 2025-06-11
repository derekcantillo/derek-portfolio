import React from 'react'
import { cn } from 'utils'
import { Typography } from 'components/ui/Typography'

export const Contact = () => {
	return (
		<section
			id="contact"
			className={cn(
				'container mx-auto flex min-h-screen items-center justify-center'
			)}
		>
			<div className={cn('')}>
				<Typography variant="h2" className="mb-8">
					Contact Me
				</Typography>
				<div className={cn('mx-auto max-w-2xl')}>
					{/* Contact form will go here */}
				</div>
			</div>
		</section>
	)
}
