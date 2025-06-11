import React from 'react'
import { cn } from 'utils'
import { Typography } from 'components/ui/Typography'

export const Hero = () => {
	return (
		<section className={cn('flex min-h-screen items-center justify-center')}>
			<div className={cn('container mx-auto px-4')}>
				<Typography variant="h1" className="mb-4" size="6xl">
					Derek Portfolio
				</Typography>
				<Typography
					variant="h3"
					font="clash-medium"
					className="mb-6"
					size="4xl"
				>
					Creative Developer & Designer
				</Typography>

				<div className="max-w-2xl space-y-4">
					<Typography font="clash-regular" size="2xl">
						Regular text (2xl) - Clash Display Regular
					</Typography>
					<Typography font="clash-light" size="xl">
						Light text (xl) - Clash Display Light
					</Typography>
					<Typography font="clash-bold" size="lg">
						Bold text (lg) - Clash Display Bold
					</Typography>
					<Typography font="league-condensed" size="3xl">
						Condensed text (3xl) - League Gothic Condensed
					</Typography>
					<Typography font="league-semicondensed" size="base">
						Semi-condensed text (base) - League Gothic Semi-Condensed
					</Typography>
				</div>
			</div>
		</section>
	)
}
