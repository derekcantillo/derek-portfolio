'use client'
import React from 'react'
import { cn, IMAGES } from 'utils'
import { Typography } from 'components/ui/Typography'
import Image from 'next/image'
import { AnimatedText } from './AnimatedText'

export const Hero = () => {
	return (
		<section
			className={cn(
				'container mx-auto flex min-h-screen items-center justify-center'
			)}
		>
			<div
				className={cn(
					'flex w-full flex-row items-center justify-between gap-8'
				)}
			>
				<div className="flex flex-col">
					<Typography
						variant="h2"
						className="mb-4"
						size="4xl"
						font="clash-regular"
					>
						Hey, I&apos;m Derek
					</Typography>

					<AnimatedText />
				</div>

				<div className="relative aspect-square w-full max-w-md">
					<div className="absolute inset-0 rounded-full border-2 border-gray-400"></div>
					<Image
						src={IMAGES.PROFILE_PHOTO}
						alt="Derek's photo"
						fill
						className="rounded-full object-cover p-2"
						priority
					/>
				</div>
			</div>
		</section>
	)
}
