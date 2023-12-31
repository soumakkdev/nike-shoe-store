import { cn } from '@/lib/utils'
import { Label } from '../ui/label'
import { RadioGroupItem, RadioGroupProps, RadioGroupRoot } from '../ui/radio-group'
import { IOption } from '@/types'

export interface IRadioGroup extends Omit<RadioGroupProps, 'onChange'> {
	onChange: (value: string) => void
	options: IOption[]
	selected: string
	direction?: 'col' | 'row'
}

export default function RadioGroup(props: IRadioGroup) {
	const { onChange, options, selected, direction = 'col', className, ...rest } = props
	return (
		<RadioGroupRoot value={selected} onValueChange={onChange} className={cn(className, direction === 'row' ? 'flex-row' : 'flex-col')} {...rest}>
			{options?.map((option, idx) => {
				return (
					<div className="flex items-center space-x-2" key={idx}>
						<RadioGroupItem id={option.value?.toString()} value={option.value} />
						<Label htmlFor={option.value?.toString()}>{option.label}</Label>
					</div>
				)
			})}
		</RadioGroupRoot>
	)
}
