import React from 'react'
import { cn } from 'utils'
import { Typography } from 'components/ui/Typography'

export const Hero = () => {
	return (
		<section className={cn('flex min-h-screen items-center justify-center')}>
			<div className={cn('container mx-auto px-4')}>
				<Typography variant="h1" className="mb-4">
					Your Name
				</Typography>
				<Typography variant="h3" font="clash" weight="light">
					Your Role or Tagline
				</Typography>
			</div>
		</section>
	)
}
