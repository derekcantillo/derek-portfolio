import React from 'react'
import { cn } from 'utils'

export const Projects = () => {
	return (
		<section className={cn('bg-gray-50 py-20')}>
			<div className={cn('container mx-auto px-4')}>
				<h2 className={cn('mb-8 text-3xl font-bold')}>Projects</h2>
				<div
					className={cn('grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3')}
				>
					{/* Project cards will go here */}
				</div>
			</div>
		</section>
	)
}
