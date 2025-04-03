'use client';
import { ArrowUpDown, TrendingUp } from 'lucide-react';
import {
	Bar,
	BarChart,
	CartesianGrid,
	Cell,
	LabelList,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import { useState } from 'react';

const initialData = [
	{ name: '625 ml', value: 94.63, fill: '#8884d8' },
	{ name: 'AAN 625 ml', value: 96.34, fill: '#16c8c7' },
	{ name: '355 ml', value: 1.62, fill: '#8884d8' },
	{ name: 'AAN 355 ml', value: 0.0, fill: '#16c8c7' },
	{ name: '1000 ml', value: 1.7, fill: '#8884d8' },
	{ name: 'ANN 1000 ml', value: 1.73, fill: '#16c8c7' },
	{ name: 'PEDIATRICO', value: 1.12, fill: '#8884d8' },
	{ name: 'AAN PEDITRICO', value: 0.54, fill: '#16c8c7' },
	{ name: 'ZERO', value: 0.93, fill: '#8884d8' },
	{ name: 'AAN ZERO', value: 1.4, fill: '#16c8c7' },
];

export function PartChartFamilyMarzo() {
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
	const [chartData, setChartData] = useState(initialData);

	const sortData = () => {
		const sorted = [...initialData].sort((a, b) => {
			return sortOrder === 'desc' ? b.value - a.value : a.value - b.value;
		});
		setChartData(sorted);
	};

	const toggleSortOrder = () => {
		const newOrder = sortOrder === 'desc' ? 'asc' : 'desc';
		setSortOrder(newOrder);
		sortData();
	};

	const totalValue = chartData.reduce((acc, curr) => acc + curr.value, 0);

	return (
		<div className="h-full p-6 bg-background rounded-lg border shadow-sm hover:shadow-lg transition">
			{/* Header */}
			<div className="mb-4">
				<div className="flex justify-between items-start">
					<div>
						<h3 className="text-lg font-semibold">Participación por Familia</h3>
						<p className="text-sm text-muted-foreground">
							Distribución porcentual de ventas por presentación
						</p>
					</div>
					<button
						onClick={toggleSortOrder}
						className="flex items-center gap-1 px-3 py-1 text-sm bg-muted rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
					>
						Ordenar
						<ArrowUpDown className="h-4 w-4" />
						<span
							className={`text-xs ${
								sortOrder === 'desc' ? 'text-primary' : 'text-muted-foreground'
							}`}
						>
							{sortOrder === 'desc' ? '↓' : '↑'}
						</span>
					</button>
				</div>
			</div>

			{/* Gráfico */}
			<div className="h-[300px]">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						data={chartData}
						layout="vertical"
						margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
					>
						<CartesianGrid horizontal={false} strokeDasharray="3 3" />
						<YAxis
							dataKey="name"
							type="category"
							tickLine={false}
							axisLine={false}
							width={120}
							tick={{ fontSize: 12 }}
						/>
						<XAxis dataKey="value" type="number" hide />
						<Tooltip
							content={({ active, payload }) => {
								if (active && payload && payload.length) {
									return (
										<div className="bg-background p-3 rounded-lg border shadow-md">
											<p className="font-medium">{payload[0].payload.name}</p>
											<p className="text-sm">
												{Number(payload[0]?.value || 0).toFixed(2)}% del total
											</p>
											<div
												className="w-4 h-4 rounded-sm mt-1"
												style={{ backgroundColor: payload[0].payload.fill }}
											/>
										</div>
									);
								}
								return null;
							}}
						/>
						<Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={28}>
							{chartData.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={entry.fill}
									stroke="var(--background)"
									strokeWidth={2}
								/>
							))}
							<LabelList
								dataKey="value"
								position="right"
								formatter={(value: number) => `${value.toFixed(1)}%`}
								className="fill-foreground"
								fontSize={12}
							/>
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			</div>

			{/* Pie de gráfico */}
			<div className="mt-4 flex items-center gap-2 text-sm">
				<TrendingUp className="h-4 w-4 text-green-600" />
				<div>
					<p className="font-medium">
						Total participación: {(totalValue - 100).toFixed(0)}%
					</p>
					<p className="text-xs text-muted-foreground">
						Porcentaje total de todas las presentaciones
					</p>
				</div>
			</div>
		</div>
	);
}
