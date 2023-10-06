import { cn } from '@/lib/utils'
import { Fragment, ReactNode } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'

export interface IMenuItem {
	title?: string
	onClick?: () => void
	hidden?: boolean
	danger?: boolean
	icon?: ReactNode
	separator?: boolean
}

export interface IMenu {
	options: IMenuItem[]
	trigger: ReactNode
	triggerClassName?: string
}

export function Menu(props: IMenu) {
	const { trigger, options, triggerClassName } = props
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className={triggerClassName}>
				{trigger}
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{options
					?.filter((option) => !option?.hidden)
					?.map((option, idx) => {
						return (
							<Fragment key={idx}>
								<DropdownMenuItem
									onClick={option?.onClick}
									className={cn('font-medium gap-2', { 'text-red-600 focus:text-red-600': option?.danger })}
								>
									{option?.icon}
									{option?.title}
								</DropdownMenuItem>

								{option?.separator ? <DropdownMenuSeparator /> : null}
							</Fragment>
						)
					})}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
