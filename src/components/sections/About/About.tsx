import React from 'react'
import { cn } from 'utils'

export const About = () => {
	return (
		<section className={cn('py-20')}>
			<div className={cn('container mx-auto px-4')}>
				<h2 className={cn('mb-8 text-3xl font-bold')}>About Me</h2>
				<div className={cn('prose max-w-none')}>
					<p>Your about content will go here</p>
				</div>
			</div>
		</section>
	)
}
