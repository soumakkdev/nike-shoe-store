import { cn } from '@/lib/utils'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'

interface IReactTable {
	resizable?: boolean
	columns: any[]
	data: any[]
	onRowClick?: (rowData: any) => void
	className?: string
}

export const ReactTable = ({ columns, data, onRowClick, resizable, className }: IReactTable) => {
	const table = useReactTable({
		columns,
		data,
		columnResizeMode: 'onChange',
		getCoreRowModel: getCoreRowModel(),
	})

	return (
		<div className={cn('-mx-4 ring-1 ring-border sm:mx-0 sm:rounded-lg', className)}>
			<Table className="min-w-full divide-y divide-border" style={{ width: table.getCenterTotalSize() }}>
				<TableHeader className="min-w-full divide-y divide-border">
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id} className={cn('divide-x divide-border bg-accent/50 w-[fit-content]', { flex: resizable })}>
							{headerGroup.headers.map((header) => (
								<TableHead
									key={header.id}
									style={{
										width: header.getSize(),
									}}
									className="relative whitespace-nowrap h-auto px-3 py-2 text-left text-sm font-semibold text-foreground"
								>
									{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}

									{resizable ? (
										<div
											{...{
												onMouseDown: header.getResizeHandler(),
												onTouchStart: header.getResizeHandler(),
												className: `resizer ${header.column.getIsResizing() ? 'isResizing' : ''}`,
											}}
										/>
									) : null}
								</TableHead>
							))}
						</TableRow>
					))}
				</TableHeader>
				<TableBody className="divide-y divide-border">
					{table.getRowModel().rows.map((row) => (
						<TableRow
							key={row.id}
							className={cn('divide-x divide-border w-[fit-content]', { flex: resizable })}
							onClick={() => onRowClick?.(row.original)}
						>
							{row.getVisibleCells().map((cell) => (
								<TableCell
									key={cell.id}
									style={{
										width: cell.column.getSize(),
									}}
									className="whitespace-nowrap px-3 py-2 text-sm text-foreground"
								>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	)
}
