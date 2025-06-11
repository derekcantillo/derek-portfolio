'use client'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Typography } from 'components/ui/Typography'

const roles = [
	{
		first: 'Frontend',
		second: { text: 'Developer', isStatic: true }
	},
	{
		first: 'Backend',
		second: { text: 'Developer', isStatic: true }
	},
	{
		first: 'Fullstack',
		second: { text: 'Developer', isStatic: true }
	}
	// {
	// 	first: 'System',
	// 	second: { text: 'Engineer', isStatic: false }
	// }
]

export const AnimatedText = () => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [prevIndex, setPrevIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex(prevIdx => {
				setPrevIndex(prevIdx)
				return (prevIdx + 1) % roles.length
			})
		}, 3000) // Change every 3 seconds

		return () => clearInterval(interval)
	}, [])

	const enhanced3DVariants = {
		initial: {
			rotateX: 90,
			rotateY: -5,
			rotateZ: 2,
			y: 50,
			z: -100,
			opacity: 0,
			scale: 0.9,
			transformPerspective: 1000,
			transformOrigin: 'bottom center',
			filter: 'blur(4px)'
		},
		animate: {
			rotateX: 0,
			rotateY: 0,
			rotateZ: 0,
			y: 0,
			z: 0,
			opacity: 1,
			scale: 1,
			filter: 'blur(0px)',
			transition: {
				duration: 0.6,
				ease: [0.215, 0.61, 0.355, 1] // Cubic bezier for smooth motion
			}
		},
		exit: {
			rotateX: -90,
			rotateY: 5,
			rotateZ: -2,
			y: -50,
			z: -100,
			opacity: 0,
			scale: 0.9,
			filter: 'blur(4px)',
			transformPerspective: 1000,
			transformOrigin: 'top center',
			transition: {
				duration: 0.4,
				ease: [0.55, 0.085, 0.68, 0.53]
			}
		}
	}

	const isSecondWordDifferent =
		roles[prevIndex].second.text !== roles[currentIndex].second.text

	return (
		<Typography
			variant="h1"
			font="clash-bold"
			size="9xl"
			className="mb-4 flex flex-col leading-none"
		>
			<div className="perspective-1000 h-[1.2em] overflow-hidden">
				<AnimatePresence mode="wait">
					<motion.span
						key={`first-${currentIndex}`}
						variants={enhanced3DVariants}
						initial="initial"
						animate="animate"
						exit="exit"
						className="inline-block text-shadow-sm"
					>
						{roles[currentIndex].first}{' '}
					</motion.span>
				</AnimatePresence>
			</div>

			<div className="perspective-1000 h-[1.2em] overflow-hidden">
				<AnimatePresence mode="wait">
					{isSecondWordDifferent ? (
						<motion.span
							key={`second-${roles[currentIndex].second.text}`}
							variants={enhanced3DVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							className="inline-block text-shadow-sm"
						>
							{roles[currentIndex].second.text}
						</motion.span>
					) : (
						<motion.span
							key={`static-${roles[currentIndex].second.text}`}
							className="inline-block"
						>
							{roles[currentIndex].second.text}
						</motion.span>
					)}
				</AnimatePresence>
			</div>
		</Typography>
	)
}
