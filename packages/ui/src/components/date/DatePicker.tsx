import { cn } from '@/lib/utils'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from '../ui/calendar'
import { Button } from '../button/Button'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(LocalizedFormat)
dayjs.extend(utc)
dayjs.extend(timezone)

interface IDatePicker {
	id?: string
	value: string
	onChange: (date: string) => void
	disabled?: boolean
	timezone?: string
}

const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone

export function DatePicker(props: IDatePicker) {
	const { value, onChange, disabled, timezone, id } = props
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button id={id} variant="outline" className={cn('pl-3 text-left font-normal', !value && 'text-muted-foreground')}>
					{value ? (
						dayjs(value)
							.local()
							.tz(timezone || userTimezone)
							.format('L')
					) : (
						<span>Pick a date</span>
					)}
					<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0" align="start">
				<Calendar
					mode="single"
					selected={dayjs(value)?.toDate()}
					onSelect={(value) => onChange(dayjs(value).toISOString())}
					disabled={disabled}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	)
}
