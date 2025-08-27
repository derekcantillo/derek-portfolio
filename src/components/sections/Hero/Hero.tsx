'use client'
import React from 'react'
import { cn, IMAGES, CONTACT_INFO } from 'utils'
import { Typography } from 'components/ui/Typography'
import Image from 'next/image'
import { AnimatedText } from './AnimatedText'
import Link from 'next/link'

export const Hero = () => {
	return (
		<section
			data-scroll-section
			id="hero"
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

					<div className="mt-8 flex gap-4">
						<a
							href={`mailto:${CONTACT_INFO.EMAIL}`}
							className="bg-accent hover:bg-accent/80 rounded-lg px-6 py-3 text-white transition-colors"
						>
							<Typography variant="span" size="lg" font="clash-semibold">
								Let&apos;s Talk
							</Typography>
						</a>
						<Link
							href="#projects"
							className="border-light font hover:bg-accent/10 rounded-lg border-2 px-6 py-3 transition-colors"
						>
							<Typography variant="span" size="lg" font="clash-semibold">
								See My Projects
							</Typography>
						</Link>
					</div>
				</div>

				<div className="relative aspect-square w-full max-w-md">
					<div className="absolute inset-0 translate-x-4 translate-y-4 rounded-lg border-2 border-gray-400"></div>
					<Image
						src={IMAGES.PROFILE_PHOTO}
						alt="Derek's photo"
						fill
						className="rounded-lg object-cover"
						priority
					/>
				</div>
			</div>
		</section>
	)
}
