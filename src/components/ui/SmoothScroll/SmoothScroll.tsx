'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

interface SmoothScrollProps {
	children: React.ReactNode
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
	const containerRef = useRef<HTMLDivElement>(null)
	const contentRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

		const container = containerRef.current
		const content = contentRef.current

		if (!container || !content) return

		const sections = content.querySelectorAll('[data-scroll-section]')

		// Helper functions to reduce nesting
		const setActiveSection = (activeSection: Element) => {
			sections.forEach(s => s.classList.remove('scroll-active'))
			activeSection.classList.add('scroll-active')
		}

		const findTargetSection = (delta: number): Element | null => {
			const sectionsArray = Array.from(sections)

			if (delta > 0) {
				for (const section of sectionsArray) {
					const rect = section.getBoundingClientRect()
					if (rect.top > 50) {
						return section
					}
				}
			} else {
				for (let i = sectionsArray.length - 1; i >= 0; i--) {
					const section = sectionsArray[i]
					const rect = section.getBoundingClientRect()
					if (rect.top < -50) {
						return section
					}
				}
			}
			return null
		}

		const scrollToSection = (
			targetSection: Element,
			isScrolling: boolean,
			setScrolling: (value: boolean) => void
		) => {
			if (isScrolling) return

			setScrolling(true)
			const rect = targetSection.getBoundingClientRect()
			const targetY = window.scrollY + rect.top

			gsap.to(window, {
				scrollTo: targetY,
				duration: 0.2,
				ease: 'power2.out',
				onComplete: () => {
					setScrolling(false)
				}
			})
		}

		const ctx = gsap.context(() => {
			sections.forEach(section => {
				ScrollTrigger.create({
					trigger: section,
					start: 'top 80%',
					end: 'bottom 20%',
					onEnter: () => setActiveSection(section),
					onEnterBack: () => setActiveSection(section)
				})
			})

			let isScrolling = false
			const setScrolling = (value: boolean) => {
				isScrolling = value
			}

			const handleWheel = (e: WheelEvent) => {
				// Check if we're in the Experience section with pinned scroll
				const experienceSection = document.getElementById('experience')
				if (experienceSection) {
					const rect = experienceSection.getBoundingClientRect()
					// If Experience section is visible and pinned, don't interfere
					if (rect.top <= 10 && rect.bottom >= window.innerHeight - 10) {
						return // Let Experience section handle its own scroll
					}
				}

				e.preventDefault()

				const targetSection = findTargetSection(e.deltaY)
				if (targetSection) {
					scrollToSection(targetSection, isScrolling, setScrolling)
				}
			}

			let touchStartY = 0

			const handleTouchStart = (e: TouchEvent) => {
				touchStartY = e.touches[0].clientY
			}

			const handleTouchEnd = (e: TouchEvent) => {
				// Check if we're in the Experience section with pinned scroll
				const experienceSection = document.getElementById('experience')
				if (experienceSection) {
					const rect = experienceSection.getBoundingClientRect()
					// If Experience section is visible and pinned, don't interfere
					if (rect.top <= 10 && rect.bottom >= window.innerHeight - 10) {
						return // Let Experience section handle its own scroll
					}
				}

				const touchEndY = e.changedTouches[0].clientY
				const deltaY = touchStartY - touchEndY

				if (Math.abs(deltaY) > 50) {
					const targetSection = findTargetSection(deltaY > 0 ? 100 : -100)
					if (targetSection) {
						scrollToSection(targetSection, isScrolling, setScrolling)
					}
				}
			}

			window.addEventListener('wheel', handleWheel, { passive: false })
			window.addEventListener('touchstart', handleTouchStart)
			window.addEventListener('touchend', handleTouchEnd)

			return () => {
				window.removeEventListener('wheel', handleWheel)
				window.removeEventListener('touchstart', handleTouchStart)
				window.removeEventListener('touchend', handleTouchEnd)
			}
		}, container)

		return () => {
			ctx.revert()
		}
	}, [])

	return (
		<div ref={containerRef}>
			<div ref={contentRef}>{children}</div>
		</div>
	)
}
