import { HTMLAttributes } from 'react'

export type TypographyVariant =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'p'
	| 'span'
	| 'caption'

export type TypographySize =
	| 'xs'
	| 'sm'
	| 'base'
	| 'lg'
	| 'xl'
	| '2xl'
	| '3xl'
	| '4xl'
	| '5xl'
	| '6xl'

export type TypographyWeight =
	| 'thin'
	| 'extralight'
	| 'light'
	| 'normal'
	| 'medium'
	| 'semibold'
	| 'bold'
	| 'extrabold'
	| 'black'

export type TypographyFont =
	// Clash Display variants
	| 'clash'
	| 'clash-extralight'
	| 'clash-light'
	| 'clash-regular'
	| 'clash-medium'
	| 'clash-semibold'
	| 'clash-bold'
	| 'clash-variable'
	// League Gothic variants
	| 'league'
	| 'league-condensed'
	| 'league-semicondensed'

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
	variant?: TypographyVariant
	size?: TypographySize
	weight?: TypographyWeight
	font?: TypographyFont
	as?: TypographyVariant
}
