import React from 'react'
import { cn, IMAGES } from 'utils'
import { Typography } from 'components/ui/Typography'
import { GlobeAltIcon } from '@heroicons/react/24/outline'

export const Projects = () => {
	const projects = [
		{
			title: 'Blu Diners Club',
			description: 'Desarrollo de la app Blu Diners Club',
			image: IMAGES.DINERS_CLUB,
			link: 'https://play.google.com/store/apps/details?id=com.blu.de.diners.club'
		},
		{
			title: 'Play Clout',
			description: 'Desarrollo de Plataforma de Fantasy Esports',
			image: IMAGES.PLAY_CLOUT,
			link: 'https://playclout.gg/'
		},
		{
			title: 'Liquilegal',
			description: 'Desarrollo de Plataforma de Legal',
			image: IMAGES.LIQUILEGAL,
			link: 'https://liquilegal.com'
		},
		{
			title: 'SIAM EXPLORER',
			description: 'Participación en el proyecto SIAM Explorer del INVEMAR',
			image: IMAGES.SIAM_EXPLORER,
			link: 'https://siamexplorer.invemar.org.co/'
		},
		{
			title: 'Spotify Clone',
			description: 'Clon de la app Spotify',
			image: IMAGES.SPOTIFY_CLONE,
			link: 'https://derekcantillo.github.io/Spotify-Web-Clone/',
			github: 'https://github.com/derekcantillo/Spotify-Web-Clone'
		},
		{
			title: 'Marvel App',
			description: 'Desarrollo de la app Marvel',
			image: IMAGES.MARVEL_APP,
			github: 'https://github.com/derekcantillo/marvel-app'
		}
	]

	return (
		<section
			data-scroll-section
			id="projects"
			className={cn(
				'container mx-auto flex min-h-screen items-center justify-center py-16'
			)}
		>
			<div className="w-full">
				<div className="container mx-auto mb-10 text-left sm:mb-12 lg:mb-20">
					<Typography
						variant="span"
						className="text-accent mb-1 block text-xs font-semibold tracking-wider uppercase sm:mb-2 sm:text-sm"
					>
						Portafolio
					</Typography>
					<Typography
						variant="h2"
						className="text-foreground text-2xl sm:text-3xl lg:text-4xl"
					>
						Proyectos destacados
					</Typography>
				</div>
				<div className="flex flex-wrap">
					{projects.map((project, index) => {
						// Calculate row number (0-indexed)
						const rowIndex = Math.floor(index / 2)
						// Determine if this is the first or second card in its row
						const isFirstInRow = index % 2 === 0
						// For even rows, first card is 2/3, second is 1/3
						// For odd rows, first card is 1/3, second is 2/3
						const isEvenRow = rowIndex % 2 === 0

						let widthClass
						if ((isEvenRow && isFirstInRow) || (!isEvenRow && !isFirstInRow)) {
							widthClass = 'w-full md:w-2/3' // 2/3 width
						} else {
							widthClass = 'w-full md:w-1/3' // 1/3 width
						}
						if (projects.length % 2 !== 0 && index === projects.length - 1) {
							widthClass = 'w-full'
						}

						return (
							<div
								key={project.title}
								className={cn(`${widthClass} h-[25rem] p-3`)}
							>
								<div
									className="group relative h-full w-full overflow-hidden rounded-xl"
									style={{
										backgroundImage: `url(${project.image})`,
										backgroundSize: 'cover',
										backgroundPosition: 'center'
									}}
								>
									<div
										className={cn(
											'bg-accent absolute inset-0 flex items-center justify-center rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-75'
										)}
									>
										<div className="flex gap-4">
											{project.github && (
												<a
													href={project.github}
													target="_blank"
													rel="noopener noreferrer"
													className="bg-light rounded-full p-3 text-black transition-all hover:bg-gray-200"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="24"
														height="24"
														viewBox="0 0 24 24"
														fill="currentColor"
													>
														<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
													</svg>
												</a>
											)}
											{project.link && (
												<a
													href={project.link}
													target="_blank"
													rel="noopener noreferrer"
													className="bg-light rounded-full p-3 text-black transition-all hover:bg-gray-200"
												>
													<GlobeAltIcon className="h-6 w-6" />
												</a>
											)}
										</div>
									</div>

									{/* Project title overlay at bottom */}
									<div className="bg-opacity-70 absolute right-0 bottom-0 left-0 bg-black p-4">
										<Typography variant="h4" className="text-light">
											{project.title}
										</Typography>
										<Typography variant="p" className="text-gray-300" size="sm">
											{project.description}
										</Typography>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
