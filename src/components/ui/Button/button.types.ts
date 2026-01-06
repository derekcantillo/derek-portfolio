import { TypographyProps } from '../Typography'

type ButtonBaseProps = {
	variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'
	element?: 'button' | 'a' | 'span'
	disabled?: boolean
	loading?: boolean
	className?: string
	href?: string
	children?: React.ReactNode
	labelProps?: TypographyProps
	icon?: React.ReactNode
	iconPosition?: 'left' | 'right'
}

export type ButtonProps = ButtonBaseProps &
	Omit<
		React.ButtonHTMLAttributes<HTMLButtonElement> &
			React.AnchorHTMLAttributes<HTMLAnchorElement> &
			React.HTMLAttributes<HTMLSpanElement>,
		keyof ButtonBaseProps
	>
