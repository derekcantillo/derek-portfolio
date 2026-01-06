import React from 'react'
import { Typography } from 'components/ui/Typography'
import { PeriodBadgeProps } from './types'

export const PeriodBadge = ({ period }: PeriodBadgeProps) => {
	return (
		<div className="bg-accent/10 flex min-w-[150px] items-center justify-center rounded-full px-4 py-2">
			<Typography variant="span" className="text-accent text-sm font-bold">
				{period}
			</Typography>
		</div>
	)
}

