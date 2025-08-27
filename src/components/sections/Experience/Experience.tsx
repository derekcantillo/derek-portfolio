import React from 'react'
import { cn } from 'utils'
import { Typography } from 'components/ui/Typography'

type ExperienceItemProps = {
	company: string
	position: string
	location: string
	period: string
	description: string
	stack: string
	index: number
}

const ExperienceItem = ({
	company,
	position,
	location,
	period,
	description,
	stack,
	index
}: ExperienceItemProps) => {
	const isEven = index % 2 === 0

	return (
		<div
			className={cn(
				'relative mb-12 flex w-full',
				isEven ? 'flex-row' : 'flex-row-reverse'
			)}
		>
			{/* Timeline dot */}
			<div className="bg-accent absolute left-1/2 z-10 h-3 w-3 -translate-x-1/2 rounded-full"></div>

			{/* Content */}
			<div
				className={cn(
					'w-[calc(50%-1.5rem)] transition-all duration-300',
					isEven ? 'mr-auto pr-6' : 'ml-auto pl-6'
				)}
			>
				<div className="mb-2">
					<Typography variant="h4" className="text-light font-bold">
						{company}
					</Typography>
					<Typography variant="h5" className="text-light italic">
						{position}
					</Typography>
					<div className="mt-1 flex items-center justify-between">
						<Typography variant="span" size="sm" className="text-gray-300">
							{location}
						</Typography>
						<Typography variant="span" size="sm" className="text-gray-300">
							{period}
						</Typography>
					</div>
				</div>
				<Typography variant="p" className="mb-3 text-gray-200">
					{description}
				</Typography>
				<div className="mt-2 flex flex-wrap gap-1">
					{stack.split(',').map((tech: string) => (
						<Typography
							variant="span"
							size="sm"
							key={tech}
							className={cn(
								'border-light text-light inline-block border bg-transparent px-2 py-0.5 text-sm',
								'capitalize'
							)}
						>
							{tech.trim()}
						</Typography>
					))}
				</div>
			</div>
		</div>
	)
}

export const Experience = () => {
	const experiences = [
		{
			company: 'Sofka technologies',
			position: 'Consultor de Desarrollo',
			location: 'Remoto',
			period: 'Nov 2024 – presente · 6 meses',
			description:
				'Desarrollo frontend aplicando el patrón de microfrontends, con integración a backend mediante arquitectura de monorepos y enfoque en pruebas unitarias eficientes.',
			stack:
				'React, React Native, Next JS, Jest, Typescript, Tailwind, axios, azure devops.'
		},
		{
			company: 'BTI Rebus Technology',
			position: 'Frontend Dev Mid Sr',
			location: 'Remoto',
			period: 'Jul 2022 – Nov 2024 · 2 años 5 meses',
			description:
				'Desarrollo de aplicaciones web y móviles con React, React Native y Next.js, optimizando rendimiento y adaptando soluciones a distintos contextos funcionales. Liderazgo técnico en equipos ágiles, gestión de despliegues en App Store y Google Play, y comunicación directa con clientes en inglés para asegurar entregas continuas de valor.',
			stack:
				'React, React Native, Next JS, Jest, Typescript, Tailwind, axios, Node JS, clickUp.'
		},
		{
			company: 'INVEMAR',
			position: 'Desarrollador Full stack',
			location: 'Remoto',
			period: 'feb 2022 – jul 2024 · 6 meses',
			description:
				'Desarrollo full stack con React y Django Rest Framework, automatización de procesos con Python y experiencia avanzada en Oracle SQL. Implementación de web scraping con Beautiful Soup y Scrapy para recolección de datos, y colaboración con equipos multifuncionales en el levantamiento de requisitos y entrega de soluciones integradas.',
			stack: 'React, python, django rest Framework, oracle SQL, fast API'
		},
		{
			company: 'Virtual Solutions',
			position: 'Desarrollador Jr',
			location: 'Remoto',
			period: 'ene 2021 – feb 2022 · 1 año 1 mes',
			description:
				'Implementación de microfrontends en proyectos frontend, con integración backend bajo arquitectura de monorepos. Desarrollo y optimización de pruebas unitarias para asegurar la calidad del software.',
			stack: 'React, html, css, javascript, SASS, mySQL.'
		}
	]

	return (
		<section
			id="experience"
			className={cn(
				'container mx-auto flex min-h-screen flex-col items-center py-24'
			)}
		>
			<Typography variant="h2" className="mb-12 text-center">
				Experiencia Laboral
			</Typography>

			<div className="relative w-full max-w-4xl">
				{/* Continuous timeline line */}
				<div
					className="absolute top-0 bottom-0 left-1/2 -z-0 w-[1px] -translate-x-1/2 bg-gray-300"
					style={{ height: 'calc(100% + 1rem)' }}
				></div>

				{experiences.map((exp, index) => (
					<ExperienceItem
						key={exp.company}
						index={index}
						company={exp.company}
						position={exp.position}
						location={exp.location}
						period={exp.period}
						description={exp.description}
						stack={exp.stack}
					/>
				))}

				{/* Timeline ending dot */}
				<div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-4 rounded-full bg-gray-400"></div>
			</div>
		</section>
	)
}
