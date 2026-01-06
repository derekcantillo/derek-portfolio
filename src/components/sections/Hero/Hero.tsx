'use client'
import React from 'react'
import { cn, IMAGES, CONTACT_INFO, RESUME_INFO } from 'utils'
import { HeroContent, HeroImage } from './components'

export const Hero = () => {
	const roles = [
		'Frontend Developer',
		'Ingeniero de Sistemas',
		'Backend Developer',
		'FullStack Developer'
	]

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
					greeting="Hey, I'm Derek."
					roles={roles}
					availableText="Disponible para proyectos"
					contactEmail={CONTACT_INFO.EMAIL}
					resumeUrl={RESUME_INFO.URL}
					showAvailableBadge={true}
					githubUrl={CONTACT_INFO.SOCIAL.GITHUB}
					linkedinUrl={CONTACT_INFO.SOCIAL.LINKEDIN}
				/>

				<HeroImage
					imageSrc={IMAGES.PROFILE_PHOTO}
					imageAlt="Derek's photo"
					showExperienceBadge={true}
					experienceYears="4+ Años"
					experienceLabel="Experiencia"
				/>
			</div>
		</section>
	)
}
