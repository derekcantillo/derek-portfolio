'use client'

import React from 'react'
import { cn } from 'utils'
import { Typography } from 'components/ui/Typography'

export const Contact = () => {
	const contactInfo = {
		email: 'cantilloderek@gmail.com',
		location: 'Barranquilla, Colombia',
		name: 'Derek Cantillo'
	}

	const availableFor = [
		'Full-time positions',
		'Freelance projects',
		'Consulting work'
	]

	const socialLinks = [
		{
			name: 'GitHub',
			url: 'https://github.com/derekcantillo'
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/derek-cantillo'
		}
	]

	const resumeLink = '/your-resume.pdf'

	return (
		<section
			id="contact"
			className={cn('mt-20 bg-[#48cfcb] py-16 text-[#131313]')}
		>
			<div className={cn('container mx-auto')}>
				<div className="grid grid-cols-1 gap-12 md:grid-cols-2">
					{/* Contact Info */}
					<div>
						<Typography variant="h2" className="mb-6">
							Contact Me
						</Typography>
						<Typography variant="p" className="mb-8">
							Feel free to reach out if you&apos;re looking for a developer,
							have a question, or just want to connect.
						</Typography>

						<div className="space-y-6">
							<div>
								<Typography variant="h4" className="mb-2">
									Email
								</Typography>
								<a
									href={`mailto:${contactInfo.email}`}
									className="text-lg hover:underline"
								>
									{contactInfo.email}
								</a>
							</div>

							<div>
								<Typography variant="h4" className="mb-2">
									Location
								</Typography>
								<Typography variant="p">{contactInfo.location}</Typography>
							</div>

							<div>
								<Typography variant="h4" className="mb-2">
									Available for
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
								Let&apos;s Connect
							</Typography>

							<Typography variant="p" className="mb-8">
								The fastest way to contact me is through email or by connecting
								with me on my social networks.
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
								Download My Resume
							</Typography>
							<a
								href={resumeLink}
								download
								className="font-clash-medium inline-block rounded-md bg-[#131313] px-6 py-3 text-[#eeeeee] transition-opacity hover:opacity-90"
							>
								Download CV
							</a>
						</div>
					</div>
				</div>

				<div className="mt-16 border-t border-[#131313]/20 pt-8 text-center">
					<Typography variant="span" size="sm">
						© {new Date().getFullYear()} {contactInfo.name}. All rights
						reserved.
					</Typography>
				</div>
			</div>
		</section>
	)
}
