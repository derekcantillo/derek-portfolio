'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface AnimatedTextProps {
	texts: string[]
	typingSpeed?: number
	deletingSpeed?: number
	pauseDuration?: number
	className?: string
}

export const AnimatedText = ({
	texts,
	typingSpeed = 100,
	deletingSpeed = 50,
	pauseDuration = 2000,
	className = ''
}: AnimatedTextProps) => {
	const [displayedText, setDisplayedText] = useState('')
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isDeleting, setIsDeleting] = useState(false)
	const [isPaused, setIsPaused] = useState(false)

	useEffect(() => {
		const currentText = texts[currentIndex]

		if (isPaused) {
			const pauseTimer = setTimeout(() => {
				setIsPaused(false)
				setIsDeleting(true)
			}, pauseDuration)
			return () => clearTimeout(pauseTimer)
		}

		if (!isDeleting && displayedText === currentText) {
			setIsPaused(true)
			return
		}

		if (isDeleting && displayedText === '') {
			setIsDeleting(false)
			setCurrentIndex(prev => (prev + 1) % texts.length)
			return
		}

		const timer = setTimeout(
			() => {
				setDisplayedText(prev => {
					if (isDeleting) {
						return currentText.substring(0, prev.length - 1)
					} else {
						return currentText.substring(0, prev.length + 1)
					}
				})
			},
			isDeleting ? deletingSpeed : typingSpeed
		)

		return () => clearTimeout(timer)
	}, [
		displayedText,
		currentIndex,
		isDeleting,
		isPaused,
		texts,
		typingSpeed,
		deletingSpeed,
		pauseDuration
	])

	return (
		<span className={className}>
			{displayedText}
			<motion.span
				animate={{
					opacity: [1, 0, 1]
				}}
				transition={{
					duration: 0.8,
					repeat: Infinity,
					ease: 'easeInOut'
				}}
				className="ml-1 inline-block"
			>
				|
			</motion.span>
		</span>
	)
}
