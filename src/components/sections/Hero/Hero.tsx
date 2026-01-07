'use client'
import React from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { cn, IMAGES, CONTACT_INFO, RESUME_INFO } from 'utils'
import { HeroContent, HeroImage } from './components'

export const Hero = () => {
	const t = useTranslations('hero')
	const locale = useLocale()

	const roles = Object.values({
		0: t('roles.0'),
		1: t('roles.1'),
		2: t('roles.2'),
		3: t('roles.3')
	})

	const resumeUrl = locale === 'en' ? RESUME_INFO.CV_EN : RESUME_INFO.CV_ES

	return (
		<section
			data-scroll-section
			id="hero"
			className={cn(
				'container mx-auto flex min-h-screen items-center justify-center px-4 py-12 md:px-6 lg:px-8'
			)}
		>
			<div
				className={cn(
					'flex w-full flex-col-reverse items-center justify-between gap-8 md:gap-12 lg:flex-row lg:gap-30'
				)}
			>
				<HeroContent
					greeting={t('greeting')}
					roles={roles}
					availableText={t('availableText')}
					contactEmail={CONTACT_INFO.EMAIL}
					resumeUrl={resumeUrl}
					showAvailableBadge={true}
					githubUrl={CONTACT_INFO.SOCIAL.GITHUB}
					linkedinUrl={CONTACT_INFO.SOCIAL.LINKEDIN}
					letsTalkText={t('buttons.letsTalk')}
					downloadCVText={t('buttons.downloadCV')}
				/>

				<HeroImage
					imageSrc={IMAGES.PROFILE_PHOTO}
					imageAlt={t('imageAlt')}
					showExperienceBadge={true}
					experienceYears={t('experience.years')}
					experienceLabel={t('experience.label')}
				/>
			</div>
		</section>
	)
}
