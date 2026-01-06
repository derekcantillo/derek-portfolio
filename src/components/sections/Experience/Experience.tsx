'use client'

import React from 'react'
import { cn } from 'utils'
import { Typography } from 'components/ui/Typography'
import { ExperienceItem } from './components'

export const Experience = () => {
	const experiences = [
		{
			company: 'Sofka technologies',
			position: 'Consultor de Desarrollo',
			location: 'Remoto',
			period: 'Nov 2024 – presente',
			description:
				'Desarrollo frontend aplicando el patrón de microfrontends, con integración a backend mediante arquitectura de monorepos y enfoque en pruebas unitarias eficientes.',
			stack:
				'React, React Native, Next JS, Jest, Typescript, Tailwind, axios, azure devops'
		},
		{
			company: 'BTI Rebus Technology',
			position: 'Frontend Dev Mid Sr',
			location: 'Remoto',
			period: 'Jul 2022 – Nov 2024',
			description:
				'Desarrollo de aplicaciones web y móviles con React, React Native y Next.js, optimizando rendimiento y adaptando soluciones a distintos contextos funcionales. Liderazgo técnico en equipos ágiles, gestión de despliegues en App Store y Google Play, y comunicación directa con clientes en inglés para asegurar entregas continuas de valor.',
			stack:
				'React, React Native, Next JS, Jest, Typescript, Tailwind, axios, Node JS, clickUp'
		},
		{
			company: 'INVEMAR',
			position: 'Desarrollador Full stack',
			location: 'Remoto',
			period: 'Feb 2022 – Jul 2024',
			description:
				'Desarrollo full stack con React y Django Rest Framework, automatización de procesos con Python y experiencia avanzada en Oracle SQL. Implementación de web scraping con Beautiful Soup y Scrapy para recolección de datos, y colaboración con equipos multifuncionales en el levantamiento de requisitos y entrega de soluciones integradas.',
			stack: 'React, python, django rest Framework, oracle SQL, fast API'
		},
		{
			company: 'Virtual Solutions',
			position: 'Desarrollador Jr',
			location: 'Remoto',
			period: 'Ene 2021 – Feb 2022',
			description:
				'Implementación de microfrontends en proyectos frontend, con integración backend bajo arquitectura de monorepos. Desarrollo y optimización de pruebas unitarias para asegurar la calidad del software.',
			stack: 'React, html, css, javascript, SASS, mySQL'
		}
	]

	return (
		<section
			data-scroll-section
			id="experience"
			className="bg-background relative min-h-screen px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:py-20"
		>
			<div className="container mx-auto mb-10 text-center sm:mb-12 lg:mb-20">
				<Typography
					variant="span"
					className="text-accent mb-1 block text-xs font-semibold tracking-wider uppercase sm:mb-2 sm:text-sm"
				>
					MI CAMINO
				</Typography>
				<Typography
					variant="h2"
					className="text-foreground text-2xl sm:text-3xl lg:text-4xl"
				>
					Trayectoria Profesional
				</Typography>
			</div>

			<div className="relative container mx-auto max-w-6xl">
				{/* Timeline Line - Vertical for mobile/tablet, center for desktop */}
				<div
					className={cn(
						'absolute top-0 bottom-0 w-0.5 bg-[var(--border-color)]',
						'left-[11px] sm:left-[13px] lg:left-1/2 lg:-translate-x-1/2'
					)}
				></div>

				<div className="relative">
					{experiences.map((exp, index) => (
						<ExperienceItem
							key={exp.company}
							company={exp.company}
							position={exp.position}
							location={exp.location}
							period={exp.period}
							description={exp.description}
							stack={exp.stack}
							isLeft={index % 2 !== 0}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
