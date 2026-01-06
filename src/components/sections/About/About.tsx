'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { cn, IMAGES } from 'utils'
import { Typography } from 'components/ui/Typography'
import Image from 'next/image'
import {
	PaintBrushIcon,
	BoltIcon,
	AcademicCapIcon
} from '@heroicons/react/24/solid'
import { useDevice } from '@/hooks'

export const About = () => {
	const { isMobile } = useDevice()
	const t = useTranslations('about')

	const keyFacts = [
		{
			icon: PaintBrushIcon,
			title: t('keyFacts.ux.title'),
			description: t('keyFacts.ux.description'),
			bgColor: 'bg-orange-50',
			iconColor: 'text-orange-500'
		},
		{
			icon: BoltIcon,
			title: t('keyFacts.performance.title'),
			description: t('keyFacts.performance.description'),
			bgColor: 'bg-blue-50',
			iconColor: 'text-blue-500'
		},
		{
			icon: AcademicCapIcon,
			title: t('keyFacts.engineer.title'),
			description: t('keyFacts.engineer.description'),
			bgColor: 'bg-green-50',
			iconColor: 'text-green-500'
		}
	]
	return (
		<section
			data-scroll-section
			id="about"
			className={cn(
				'container mx-auto flex min-h-screen items-center justify-center px-4 py-12 md:px-6 md:py-16 lg:px-8 lg:py-20'
			)}
		>
			<div className="w-full">
				<div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
					<div className="flex flex-col justify-between space-y-6 md:space-y-8">
						<div className="space-y-4 md:space-y-6">
							<Typography
								variant="span"
								color="accent"
								font="clash-semibold"
								className="text-xs tracking-wider uppercase md:text-sm lg:text-base"
							>
								{t('title')}
							</Typography>

							<Typography
								variant={isMobile ? 'h4' : 'h2'}
								font="clash-bold"
								className="text-lg leading-tight md:text-3xl lg:text-4xl xl:text-5xl"
							>
								{t('heading')}
							</Typography>

							<div className="space-y-3 md:space-y-4">
								<Typography
									variant={isMobile ? 'span' : 'p'}
									className={cn(
										'text-xs leading-relaxed text-amber-900 lg:text-lg xl:text-xl',
										'text-center md:text-left'
									)}
								>
									{t('paragraphs.first')}
								</Typography>

								<Typography
									variant={isMobile ? 'span' : 'p'}
									className={cn(
										'text-xs leading-relaxed text-amber-900 lg:text-lg xl:text-xl',
										'hidden text-center md:block md:text-left'
									)}
								>
									{t('paragraphs.second')}
								</Typography>
							</div>
						</div>

						<div className="flex w-full flex-wrap gap-2">
							{keyFacts.map(fact => {
								const IconComponent = fact.icon
								return (
									<div
										key={fact.title}
										className={cn(
											'flex w-fit items-center gap-2.5',
											'rounded-lg border border-gray-200 bg-white p-2.5 md:p-3'
										)}
									>
										<div
											className={cn(
												'bg-accent/10 rounded-lg p-2 sm:p-2.5 md:p-3',
												fact.bgColor
											)}
										>
											<IconComponent
												className={cn(
													'h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6',
													fact.iconColor
												)}
											/>
										</div>

										<div className="flex-1">
											<Typography variant="p" size="base" font="clash-medium">
												<span className="text-sm sm:text-base md:text-lg">
													{fact.title}
												</span>
											</Typography>

											<Typography
												variant="p"
												size="xs"
												font="clash-regular"
												className="hidden text-gray-600 md:block"
											>
												<span className="text-[10px] md:text-sm">
													{fact.description}
												</span>
											</Typography>
										</div>
									</div>
								)
							})}
						</div>
					</div>

					<div className="hidden gap-4 sm:gap-6 md:flex lg:justify-end lg:gap-8 xl:gap-12">
						<div className="w-full sm:w-1/2 lg:h-3/4 lg:w-[45%] lg:self-end">
							<div className="h-full overflow-hidden rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 md:rounded-2xl">
								<div className="relative h-64 w-full sm:h-80 md:h-96 lg:h-full">
									<Image
										src={IMAGES.DEGREE_PHOTO}
										alt={t('images.degree')}
										fill
										className="object-cover"
									/>
								</div>
							</div>
						</div>

						<div className="w-full sm:w-1/2 lg:h-3/4 lg:w-[45%]">
							<div className="h-full overflow-hidden rounded-xl md:rounded-2xl">
								<div className="relative h-64 w-full sm:h-80 md:h-96 lg:h-full">
									<Image
										src={IMAGES.DEGREE_PHOTO_2}
										alt={t('images.university')}
										fill
										className="object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
