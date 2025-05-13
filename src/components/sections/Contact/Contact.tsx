import React from 'react'
import { cn } from 'utils'

export const Contact = () => {
	return (
		<section className={cn('bg-gray-50 py-20')}>
			<div className={cn('container mx-auto px-4')}>
				<h2 className={cn('mb-8 text-3xl font-bold')}>Contact Me</h2>
				<div className={cn('mx-auto max-w-2xl')}>
					{/* Contact form will go here */}
				</div>
			</div>
		</section>
	)
}
