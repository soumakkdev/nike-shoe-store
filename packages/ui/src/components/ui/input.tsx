import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
	size?: 'sm' | 'md' | 'lg'
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { className, type, size, ...rest } = props
	return (
		<input
			type={type}
			className={cn(
				'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
				{
					'h-8 px-2': size === 'sm',
					'h-9 px-3': size === 'md',
					'h-10 px-3': size === 'lg',
				},
				className
			)}
			ref={ref}
			{...rest}
		/>
	)
})
Input.displayName = 'Input'

export { Input }
