import { SelectContent, SelectGroup, SelectItem, SelectRoot, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { IOption } from '@/types'

export interface ISelect {
	value?: string
	onChange: (value?: string) => void
	disabled?: boolean
	options: IOption[]
	size?: 'sm' | 'md' | 'lg'
	id?: string
	placeholder?: string
	className?: string
}

export function Select(props: ISelect) {
	const { value, onChange, disabled, options, size, id, placeholder, className } = props

	return (
		<SelectRoot value={value ?? undefined} onValueChange={(selected) => onChange(selected)}>
			<SelectTrigger
				id={id}
				disabled={disabled}
				className={cn(
					'w-full',
					{
						'h-8': size === 'sm',
						'h-9': size === 'md',
						'h-10': size === 'lg',
					},
					className
				)}
			>
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>{options?.map((option) => <SelectItem value={option.value}>{option.label}</SelectItem>)}</SelectGroup>
			</SelectContent>
		</SelectRoot>
	)
}
