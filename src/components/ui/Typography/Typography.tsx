import { createElement } from 'react'
import { cn } from 'utils'
import { TypographyProps } from './typography.types'

// Define los estilos directamente con las familias de fuentes exactas
const fontClasses = {
	// Clash Display variants
	clash: 'font-clash',
	'clash-extralight': 'font-clash-extralight',
	'clash-light': 'font-clash-light',
	'clash-regular': 'font-clash-regular',
	'clash-medium': 'font-clash-medium',
	'clash-semibold': 'font-clash-semibold',
	'clash-bold': 'font-clash-bold',
	'clash-variable': 'font-clash-variable',
	// League Gothic variants
	league: 'font-league',
	'league-condensed': 'font-league-condensed',
	'league-semicondensed': 'font-league-semicondensed'
}

// Mapeo directo de las fuentes a estilos inline si es necesario
const fontFamilyMap = {
	// Clash Display variants
	clash: 'ClashDisplay-Variable',
	'clash-extralight': 'ClashDisplay-Extralight',
	'clash-light': 'ClashDisplay-Light',
	'clash-regular': 'ClashDisplay-Regular',
	'clash-medium': 'ClashDisplay-Medium',
	'clash-semibold': 'ClashDisplay-Semibold',
	'clash-bold': 'ClashDisplay-Bold',
	'clash-variable': 'ClashDisplay-Variable',
	// League Gothic variants
	league: 'LeagueGothic-Regular',
	'league-condensed': 'LeagueGothic-Condensed',
	'league-semicondensed': 'LeagueGothic-SemiCondensed'
}

// Clases de tamaño de Tailwind
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
	'6xl': 'text-6xl',
	'7xl': 'text-7xl',
	'8xl': 'text-8xl',
	'9xl': 'text-9xl',
	'10xl': 'text-10xl'
}

// Mapeo de tamaños a valores de píxeles para usar con estilos inline
const fontSizeMap = {
	xs: '0.75rem', // 12px
	sm: '0.875rem', // 14px
	base: '1rem', // 16px
	lg: '1.125rem', // 18px
	xl: '1.25rem', // 20px
	'2xl': '1.5rem', // 24px
	'3xl': '1.875rem', // 30px
	'4xl': '2.25rem', // 36px
	'5xl': '3rem', // 48px
	'6xl': '3.75rem', // 60px
	'7xl': '4.5rem', // 72px
	'8xl': '5.25rem', // 84px
	'9xl': '6rem', // 96px
	'10xl': '7.5rem' // 120px
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

// Mapeo de pesos de fuente para estilos inline
const fontWeightMap = {
	thin: '100',
	extralight: '200',
	light: '300',
	normal: '400',
	medium: '500',
	semibold: '600',
	bold: '700',
	extrabold: '800',
	black: '900'
}

// Color classes
const colorClasses = {
	light: 'text-light',
	dark: 'text-dark',
	accent: 'text-accent',
	inherit: 'text-inherit'
}

const defaultVariantMapping = {
	h1: { size: '6xl', weight: 'bold', font: 'league', color: 'inherit' },
	h2: { size: '5xl', weight: 'bold', font: 'league', color: 'inherit' },
	h3: { size: '4xl', weight: 'semibold', font: 'clash', color: 'inherit' },
	h4: { size: '3xl', weight: 'semibold', font: 'clash', color: 'inherit' },
	h5: { size: '2xl', weight: 'medium', font: 'clash', color: 'inherit' },
	h6: { size: 'xl', weight: 'medium', font: 'clash', color: 'inherit' },
	p: {
		size: 'base',
		weight: 'normal',
		font: 'clash-regular',
		color: 'inherit'
	},
	span: {
		size: 'base',
		weight: 'normal',
		font: 'clash-regular',
		color: 'inherit'
	},
	caption: {
		size: 'sm',
		weight: 'normal',
		font: 'clash-regular',
		color: 'inherit'
	}
} as const

export const Typography = ({
	variant = 'p',
	size,
	weight,
	font,
	color,
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
	const finalColor = color ?? defaultStyles.color

	const isSpecificFontVariant =
		finalFont !== 'clash' &&
		finalFont !== 'league' &&
		finalFont !== 'league-condensed' &&
		finalFont !== 'league-semicondensed'

	const weightClass = isSpecificFontVariant ? '' : weightClasses[finalWeight]
	const fontWeight = isSpecificFontVariant
		? undefined
		: fontWeightMap[finalWeight]

	const fontFamily = fontFamilyMap[finalFont]
	const fontSize = fontSizeMap[finalSize]
	const style = {
		fontFamily: `'${fontFamily}', sans-serif`,
		fontSize,
		...(fontWeight ? { fontWeight } : {})
	}

	return createElement(
		element,
		{
			className: cn(
				sizeClasses[finalSize],
				weightClass,
				fontClasses[finalFont],
				colorClasses[finalColor],
				className
			),
			style,
			...props
		},
		children
	)
}
