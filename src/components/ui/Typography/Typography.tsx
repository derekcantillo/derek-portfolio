import { createElement } from 'react'
import { cn } from 'utils'
import { TypographyProps } from './typography.types'

const fontClasses = {
	clash: 'font-[family-name:var(--font-clash)]',
	league: 'font-[family-name:var(--font-league)]',
	'league-condensed': 'font-[family-name:var(--font-league-condensed)]',
	'league-semicondensed': 'font-[family-name:var(--font-league-semicondensed)]'
}

const sizeClasses = {
	xs: 'text-xs',
	sm: 'text-sm',
	base: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl',
	'2xl': 'text-2xl',
	'3xl': 'text-3xl',
	'4xl': 'text-4xl',
	'5xl': 'text-5xl',
	'6xl': 'text-6xl'
}

const weightClasses = {
	thin: 'font-thin',
	extralight: 'font-extralight',
	light: 'font-light',
	normal: 'font-normal',
	medium: 'font-medium',
	semibold: 'font-semibold',
	bold: 'font-bold',
	extrabold: 'font-extrabold',
	black: 'font-black'
}

const defaultVariantMapping = {
	h1: { size: '6xl', weight: 'bold', font: 'league' },
	h2: { size: '5xl', weight: 'bold', font: 'league' },
	h3: { size: '4xl', weight: 'semibold', font: 'clash' },
	h4: { size: '3xl', weight: 'semibold', font: 'clash' },
	h5: { size: '2xl', weight: 'medium', font: 'clash' },
	h6: { size: 'xl', weight: 'medium', font: 'clash' },
	p: { size: 'base', weight: 'normal', font: 'clash' },
	span: { size: 'base', weight: 'normal', font: 'clash' },
	caption: { size: 'sm', weight: 'normal', font: 'clash' }
} as const

export const Typography = ({
	variant = 'p',
	size,
	weight,
	font,
	as,
	className,
	children,
	...props
}: TypographyProps) => {
	const element = as ?? variant
	const defaultStyles = defaultVariantMapping[variant]

	const finalSize = size ?? defaultStyles.size
	const finalWeight = weight ?? defaultStyles.weight
	const finalFont = font ?? defaultStyles.font

	return createElement(
		element,
		{
			className: cn(
				sizeClasses[finalSize],
				weightClasses[finalWeight],
				fontClasses[finalFont],
				className
			),
			...props
		},
		children
	)
}
