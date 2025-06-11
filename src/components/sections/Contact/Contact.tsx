import React from 'react'
import { cn } from 'utils'
import { Typography } from 'components/ui/Typography'

export const Contact = () => {
	return (
		<section className={cn('bg-gray-50 py-20')}>
			<div className={cn('mx-auto px-4')}>
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
