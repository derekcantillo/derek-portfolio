'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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
	isActive: boolean
}

const ExperienceItem = ({
	company,
	position,
	location,
	period,
	description,
	stack,
	index,
	isActive
}: ExperienceItemProps) => {
	return (
		<div
			className={cn(
				'experience-card relative flex h-full flex-col items-center justify-center px-6',
				'transition-all duration-500',
				isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-40'
			)}
			style={{ width: '50vw', minWidth: '50vw' }}
		>
			{/* Card Content */}
			<div
				className={cn(
					'card-content bg-dark/90 relative z-20 max-w-lg rounded-lg border border-gray-700 p-6 text-center',
					'transform transition-all duration-500'
				)}
				style={{
					transform: `translateY(${index % 2 === 0 ? '-200px' : '200px'})`
				}}
			>
				<div className="mb-4">
					<Typography variant="h4" className="text-accent mb-2 font-bold">
						{company}
					</Typography>
					<Typography variant="h5" className="text-light mb-3 italic">
						{position}
					</Typography>
					<div className="mb-3 flex items-center justify-center gap-4 text-sm">
						<Typography
							variant="span"
							className="flex items-center gap-1 text-gray-300"
						>
							<span>📍</span> {location}
						</Typography>
						<Typography
							variant="span"
							className="flex items-center gap-1 text-gray-300"
						>
							<span>📅</span> {period}
						</Typography>
					</div>
				</div>

				<Typography
					variant="p"
					className="mb-4 line-clamp-2 text-sm leading-relaxed text-gray-200"
				>
					{description}
				</Typography>

				<div className="flex flex-wrap justify-center gap-1">
					{stack.split(',').map((tech: string) => (
						<Typography
							variant="span"
							size="xs"
							key={tech}
							className={cn(
								'border-accent text-accent bg-accent/10 rounded-full border px-2 py-1',
								'hover:bg-accent hover:text-dark capitalize transition-colors'
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
	const timelineRef = useRef<HTMLDivElement>(null)
	const containerRef = useRef<HTMLDivElement>(null)

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

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		const timeline = timelineRef.current
		const container = containerRef.current

		if (!timeline || !container) return

		const cards = timeline.querySelectorAll('.experience-card')
		const totalCards = cards.length

		console.log('Cards found:', totalCards, cards)

		// Calculate actual timeline width for proper scroll distance
		const timelineWidth = timeline.scrollWidth
		const viewportWidth = window.innerWidth
		const scrollDistance = totalCards * 100 // Balanced scroll distance

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				start: 'top top',
				end: `+=${scrollDistance}%`,
				scrub: 1,
				pin: true,
				anticipatePin: 1,
				onUpdate: self => {
					// Calculate current position based on actual scroll progress
					const scrollProgress = self.progress
					const currentIndex = Math.min(
						Math.floor(scrollProgress * totalCards),
						totalCards - 1
					)

					// Update cards with immediate effect and force re-render
					cards.forEach((card, index) => {
						card.classList.remove('active')
						// Force style update
						if (index === currentIndex) {
							card.classList.add('active')
							card.style.opacity = '1'
							card.style.transform = 'scale(1)'
							card.style.filter = 'blur(0px)'
						} else {
							card.style.opacity = '0.25'
							card.style.transform = 'scale(0.85)'
							card.style.filter = 'blur(3px)'
						}
					})

					// Update timeline points
					const timelinePoints = container.querySelectorAll('.timeline-point')
					timelinePoints.forEach((point, index) => {
						point.classList.remove('active')
						if (index === currentIndex) {
							point.classList.add('active')
						}
					})
				}
			}
		})

		// Set initial position to center the first item properly
		const itemWidth = viewportWidth * 0.5
		const initialOffset = (viewportWidth - itemWidth) / 2 // Center first item in viewport
		const totalDistance = (experiences.length - 1) * itemWidth

		// Set initial position - center the first item
		gsap.set(timeline, { x: initialOffset })

		// Animate timeline horizontally - end with last item centered
		tl.to(timeline, {
			x: initialOffset - totalDistance,
			ease: 'none'
		})

		// Initial active state - force first card and point to be active
		if (cards.length > 0) {
			cards[0].classList.add('active')
			cards[0].style.opacity = '1'
			cards[0].style.transform = 'scale(1)'
			cards[0].style.filter = 'blur(0px)'

			// Activate first timeline point
			const timelinePoints = container.querySelectorAll('.timeline-point')
			if (timelinePoints.length > 0) {
				timelinePoints[0].classList.add('active')
			}
		}

		return () => {
			ScrollTrigger.getAll().forEach(trigger => trigger.kill())
		}
	}, [experiences.length])

	return (
		<section
			ref={containerRef}
			data-scroll-section
			id="experience"
			className="bg-dark relative h-screen overflow-hidden"
		>
			{/* Header */}
			<div className="absolute top-8 left-1/2 z-10 -translate-x-1/2 transform">
				<Typography variant="h2" className="text-light text-center">
					Experience
				</Typography>
			</div>

			{/* Timeline Container */}
			<div
				ref={timelineRef}
				className="relative flex h-full items-center"
				style={{ width: `${experiences.length * 50}vw` }}
			>
				{/* Continuous Timeline Line - Moves with the container */}
				<div
					className="absolute top-1/2 z-0 h-0.5 bg-gray-600"
					style={{
						width: `${(experiences.length - 1) * 50}vw`,
						left: '25vw', // Center of first item
						transform: 'translateY(-50%)'
					}}
				></div>

				{/* Timeline Points - Positioned correctly on the line */}
				{experiences.map((_, index) => (
					<div
						key={`point-${index}`}
						className="absolute top-1/2 z-20 -translate-y-1/2 transform"
						style={{
							left: `${25 + index * 50}vw` // Center of each item
						}}
					>
						<div
							className={`timeline-point bg-accent border-dark h-3 w-3 rounded-full border-2 shadow-lg transition-all duration-500 ${index === 0 ? 'active' : ''}`}
						></div>
					</div>
				))}

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
						isActive={false} // Will be controlled by GSAP
					/>
				))}
			</div>
		</section>
	)
}
