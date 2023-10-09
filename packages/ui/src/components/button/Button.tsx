import { Loader2 } from 'lucide-react'
import { ButtonProps, ButtonRoot } from '../ui/button'

export interface IButton extends ButtonProps {
	loading?: boolean
}

export function Button(props: IButton) {
	const { loading, disabled, children, ...rest } = props
	return (
		<ButtonRoot type="button" disabled={loading || disabled} {...rest}>
			{loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
			{children}
		</ButtonRoot>
	)
}
