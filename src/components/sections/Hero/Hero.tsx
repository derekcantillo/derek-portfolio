import React from 'react'
import { cn } from 'utils'

export const Hero = () => {
	return (
		<section className={cn('flex min-h-screen items-center justify-center')}>
			<div className={cn('container mx-auto px-4')}>
				<h1 className={cn('text-4xl font-bold')}>Your Name</h1>
				<p className={cn('mt-4 text-xl')}>Your Role or Tagline</p>
			</div>
		</section>
	)
}
