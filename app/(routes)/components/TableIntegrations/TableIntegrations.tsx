'use client';

import * as React from 'react';
import { ChevronUp, MoreHorizontalIcon } from 'lucide-react';
import { TableIntegrationProps } from './TableIntegrations.types';

import {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
	PaginationState,
} from '@tanstack/react-table';

import { Button } from '@/components/ui/button';

import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import Image from 'next/image';
import { Progress } from '@/components/ui/progress';
import { formatPrice } from '@/lib/formatPrice';

const data: TableIntegrationProps[] = [
	{
		formato: 'Club',
		icon: '/bottle-left.png',
		ventaPzas: '386,180',
		ventaMxn: '$7,299,743.38 ',
		rate: 0,
	},
	{
		formato: 'Express',
		icon: '/bottle-right.png',
		ventaPzas: '20,006',
		ventaMxn: ' $426,464.52 ',
		rate: 0,
	},
	{
		formato: 'Frescura',
		icon: '/Electrolit-Apple-Front_1080x.png',
		ventaPzas: '10,981',
		ventaMxn: ' $229,341.30 ',
		rate: 0,
	},
	{
		formato: 'GBS',
		icon: '/Electrolit-Berry-Bliss-Front_1080x.png',
		ventaPzas: '140,973',
		ventaMxn: ' $2,929,922.41 ',
		rate: 0,
	},
	{
		formato: 'Mostrador',
		icon: '/Electrolit-Coconut-Front_1080x.png',
		ventaPzas: '806,473',
		ventaMxn: ' $13,723,740.86 ',
		rate: 0,
	},
	{
		formato: 'Reparto',
		icon: '/bottle-left.png',
		ventaPzas: '1,652,919',
		ventaMxn: ' $28,349,912.97 ',
		rate: 0,
	},
];

export const columns: ColumnDef<TableIntegrationProps>[] = [
	{
		accessorKey: 'icon',
		header: '',
		cell: ({ row }) => (
			<div className="capitalize">
				<Image src={row.getValue('icon')} alt="Logo" width={20} height={20} />
			</div>
		),
		enableSorting: false,
	},
	{
		accessorKey: 'formato',
		header: ({ column }) => (
			<Button variant="ghost" onClick={() => column.toggleSorting()}>
				Formato
				<ChevronUp
					className={`ml-2 h-4 w-4 transition-transform ${
						column.getIsSorted() ? 'rotate-180' : ''
					}`}
				/>
			</Button>
		),
		cell: ({ row }) => (
			<div className="capitalize">{row.getValue('formato')}</div>
		),
		enableSorting: true,
	},
	{
		accessorKey: 'ventaPzas',
		header: ({ column }) => (
			<Button variant="ghost" onClick={() => column.toggleSorting()}>
				Venta Neta Pzas
				<ChevronUp
					className={`ml-2 h-4 w-4 transition-transform ${
						column.getIsSorted() ? 'rotate-180' : ''
					}`}
				/>
			</Button>
		),
		cell: ({ row }) => (
			<div className="capitalize">{row.getValue('ventaPzas')}</div>
		),
		enableSorting: true,
		sortingFn: (a, b) => {
			const valueA = parseInt(
				(a.getValue('ventaPzas') as string).replace(/,/g, ''),
				10,
			);
			const valueB = parseInt(
				(b.getValue('ventaPzas') as string).replace(/,/g, ''),
				10,
			);
			return valueA - valueB;
		},
	},
	{
		accessorKey: 'ventaMxn',
		header: ({ column }) => (
			<Button variant="ghost" onClick={() => column.toggleSorting()}>
				Venta Neta MXN
				<ChevronUp
					className={`ml-2 h-4 w-4 transition-transform ${
						column.getIsSorted() ? 'rotate-180' : ''
					}`}
				/>
			</Button>
		),
		cell: ({ row }) => (
			<div className="capitalize">{row.getValue('ventaMxn')}</div>
		),
		enableSorting: true,
		sortingFn: (a, b) => {
			const valueA = parseFloat(
				(a.getValue('ventaMxn') as string)
					.replace(/[^\d.]/g, '')
					.replace(/,/g, ''),
			);
			const valueB = parseFloat(
				(b.getValue('ventaMxn') as string)
					.replace(/[^\d.]/g, '')
					.replace(/,/g, ''),
			);
			return valueA - valueB;
		},
	},
	{
		accessorKey: 'rate',
		header: ({ column }) => (
			<div className="text-right">
				<Button variant="ghost" onClick={() => column.toggleSorting()}>
					RATE
					<ChevronUp
						className={`ml-2 h-4 w-4 transition-transform ${
							column.getIsSorted() ? 'rotate-180' : ''
						}`}
					/>
				</Button>
			</div>
		),
		cell: ({ row }) => (
			<div className="text-right font-medium flex gap-1 items-center">
				<Progress value={row.getValue('rate')} className="h-2" />
			</div>
		),
		enableSorting: true,
	},
];

export function TableIntegrations() {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[],
	);
	const [columnVisibility, setColumnVisibility] =
		React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});
	const [pagination, setPagination] = React.useState<PaginationState>({
		pageIndex: 0,
		pageSize: 10,
	});

	const table = useReactTable({
		columns,
		data,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
			pagination,
		},
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
	});

	return (
		<div className="w-full mt-5">
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHead key={header.id}>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext(),
											  )}
									</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && 'selected'}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
