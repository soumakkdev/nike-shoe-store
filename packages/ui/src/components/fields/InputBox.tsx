import { cn } from '@/lib/utils'
import { Input, InputProps } from '../ui/input'
import { Label } from '../ui/label'

export interface IInputBox extends InputProps {
	label?: string
	error?: string
	startIcon?: React.ReactNode
	size?: 'sm' | 'md' | 'lg'
	helpMessage?: string
}

export const InputBox = (props: IInputBox) => {
	const { error, label, required, startIcon, className, helpMessage, ...rest } = props

	return (
		<div>
			{label ? <Label>{label}</Label> : null}

			<div className="relative">
				{startIcon ? <div className="absolute inset-y-0 left-0 flex items-center pl-2">{startIcon}</div> : null}

				<Input className={cn({ 'pl-8': !!startIcon, 'ring-red-500 ring-1': error }, className)} {...rest} />
			</div>

			{error ? (
				<p className="text-xs text-red-500 mt-1">{error}</p>
			) : helpMessage ? (
				<p className="text-xs italic mt-1 text-slate-400">{helpMessage}</p>
			) : null}
		</div>
	)
}
