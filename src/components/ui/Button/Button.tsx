import { cn } from '@/utils'
import { Typography } from '@/components/ui'
import Link from 'next/link'
import { createElement } from 'react'
import { ButtonProps } from './button.types'
import clsx from 'clsx'

const buttonVariants = {
	primary: clsx(
		'bg-accent text-light hover:opacity-90 active:opacity-80 shadow-lg hover:shadow-xl'
	),
	secondary: clsx(
		'bg-white text-dark hover:opacity-90 active:opacity-80 shadow-md hover:shadow-lg',
		'border-4 border-accent/20'
	),
	outline: clsx(
		'bg-transparent border-2 border-current text-current hover:bg-current/10 active:bg-current/20'
	),
	ghost: clsx(
		'bg-transparent text-current hover:bg-current/10 active:bg-current/20'
	),
	link: clsx(
		'bg-transparent text-current underline-offset-4 hover:underline p-0'
	)
}

const baseStyles = clsx(
	'inline-flex items-center justify-center cursor-pointer',
	'gap-2 rounded-2xl px-8 py-4 text-base font-medium transition-all duration-200',
	'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
	'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 '
)

export const Button = ({
	className,
	element = 'button',
	variant = 'primary',
	disabled = false,
	loading = false,
	children,
	href,
	labelProps,
	icon,
	iconPosition = 'left',
	...props
}: ButtonProps) => {
	const classes = cn(
		variant !== 'link' && baseStyles,
		buttonVariants[variant],
		loading && 'opacity-70 cursor-wait',
		className
	)

	const content = (
		<>
			{loading && (
				<Typography
					as="span"
					className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
				/>
			)}
			{icon && iconPosition === 'left' && !loading && (
				<span className="h-5 w-5">{icon}</span>
			)}
			<Typography
				variant="span"
				size="lg"
				font="clash-semibold"
				{...labelProps}
			>
				{children}
			</Typography>
			{icon && iconPosition === 'right' && !loading && (
				<span className="h-5 w-5">{icon}</span>
			)}
		</>
	)

	if (variant === 'link' && href) {
		return (
			<Link href={href} className={classes}>
				{content}
			</Link>
		)
	}

	const Component = element

	return createElement(
		Component,
		{
			className: classes,
			...(Component === 'button' && { disabled: disabled || loading }),
			...(Component === 'a' && href && { href }),
			...props
		},
		content
	)
}
