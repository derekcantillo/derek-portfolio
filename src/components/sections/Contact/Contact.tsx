'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import { cn, CONTACT_INFO } from 'utils'
import { Typography } from 'components/ui/Typography'

export const Contact = () => {
	const t = useTranslations('contact')

	const availableFor = [
		t('availableFor.items.0'),
		t('availableFor.items.1'),
		t('availableFor.items.2')
	]

	const socialLinks = [
		{
			name: 'GitHub',
			url: CONTACT_INFO.SOCIAL.GITHUB
		},
		{
			name: 'LinkedIn',
			url: CONTACT_INFO.SOCIAL.LINKEDIN
		}
	]

	const resumeLink = '/your-resume.pdf'

	return (
		<section
			data-scroll-section
			id="contact"
			className={cn('mt-20 bg-amber-50 py-16 text-[#131313]')}
		>
			<div className={cn('container mx-auto')}>
				<div className="grid grid-cols-1 gap-12 md:grid-cols-2">
					{/* Contact Info */}
					<div>
						<Typography variant="h2" className="mb-6">
							{t('title')}
						</Typography>
						<Typography variant="p" className="mb-8">
							{t('subtitle')}
						</Typography>

						<div className="space-y-6">
							<div>
								<Typography variant="h4" className="mb-2">
									{t('email')}
								</Typography>
								<a
									href={`mailto:${CONTACT_INFO.EMAIL}`}
									className="text-lg hover:underline"
								>
									{CONTACT_INFO.EMAIL}
								</a>
							</div>

							<div>
								<Typography variant="h4" className="mb-2">
									{t('location')}
								</Typography>
								<Typography variant="p">{CONTACT_INFO.LOCATION}</Typography>
							</div>

							<div>
								<Typography variant="h4" className="mb-2">
									{t('availableFor.title')}
								</Typography>
								<ul className="list-disc space-y-1 pl-5">
									{availableFor.map(item => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</div>
						</div>
					</div>

					{/* Social Links and Connect */}
					<div className="flex flex-col justify-between">
						<div>
							<Typography variant="h3" className="mb-6">
								{t('connect.title')}
							</Typography>

							<Typography variant="p" className="mb-8">
								{t('connect.subtitle')}
							</Typography>

							<div className="grid grid-cols-2 gap-4">
								{socialLinks.map(social => (
									<a
										key={social.name}
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-center gap-2 rounded-md bg-[#131313] p-3 text-[#eeeeee] transition-opacity hover:opacity-90"
									>
										{social.name}
									</a>
								))}
							</div>
						</div>

						<div className="mt-12">
							<Typography variant="h4" className="mb-4">
								{t('resume.title')}
							</Typography>
							<a
								href={resumeLink}
								download
								className="font-clash-medium inline-block rounded-md bg-[#131313] px-6 py-3 text-[#eeeeee] transition-opacity hover:opacity-90"
							>
								{t('resume.button')}
							</a>
						</div>
					</div>
				</div>

				<div className="mt-16 border-t border-[#131313]/20 pt-8 text-center">
					<Typography variant="span" size="sm">
						© {new Date().getFullYear()} {CONTACT_INFO.NAME}. {t('copyright')}
					</Typography>
				</div>
			</div>
		</section>
	)
}
