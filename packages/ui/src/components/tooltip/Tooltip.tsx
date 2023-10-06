import { TooltipArrow, TooltipContent, TooltipProvider, TooltipRoot, TooltipTrigger } from '@/ui/tooltip'
import { cn } from '@/lib/utils'

export interface ITooltip {
	content: React.ReactNode
	children: React.ReactNode
	delay?: number
	className?: string
	contentClassName?: string
	arrowClassName?: string
	arrow?: boolean
	disabled?: boolean
}

export function Tooltip(props: ITooltip) {
	const { content, children, delay = 200, disabled, contentClassName, className, arrow, arrowClassName } = props
	return (
		<TooltipProvider delayDuration={delay}>
			<TooltipRoot>
				<TooltipTrigger disabled={disabled} className={cn(className, 'disabled:opacity-60')} type="button">
					{children}
				</TooltipTrigger>
				<TooltipContent className={contentClassName}>
					{arrow ? <TooltipArrow className={cn('fill-slate-900', arrowClassName)} /> : null}
					{content}
				</TooltipContent>
			</TooltipRoot>
		</TooltipProvider>
	)
}
