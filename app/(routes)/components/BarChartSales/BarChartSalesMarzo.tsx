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
import { useState, useEffect, useCallback } from 'react';

const initialData = [
	{ name: ' UVA 625 ML', value: 144679.0 },
	{ name: ' FRESA 625 ML', value: 134960.0 },
	{ name: ' COCO 625 ML', value: 128901.0 },
	{ name: ' MORA AZUL 625 ML', value: 120229.0 },
	{ name: ' MANZANA 625 ML', value: 104674.0 },
	{ name: ' FRESA KIWI 625 ML', value: 100237.0 },
	{ name: ' PONCHE DE FRUTAS 625 ML', value: 81904.0 },
	{ name: ' NJA/MAND 625 ML', value: 79974.0 },
	{ name: ' LIMA-LIMON 625 ML', value: 74107.0 },
	{ name: ' MORA AZUL 625 ML', value: 35030.0 },
	{ name: ' UVA 625 ML', value: 35028.0 },
];

const COLORS = [
	'#16c8c7',
	'#887cfd',
	'#ff6b6b',
	'#4ecdc4',
	'#45b7d1',
	'#96ceb4',
	'#ffeead',
	'#ff9999',
	'#88d8b0',
	'#ffcc5c',
	'#ff6f69',
];

export function BarChartSalesMarzo() {
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
	const [chartData, setChartData] = useState<typeof initialData>([]);
	const [isClient, setIsClient] = useState(false);

	// Mover sortData dentro de useCallback para estabilizar la referencia
	const sortData = useCallback(() => {
		const sorted = [...initialData].sort((a, b) => {
			return sortOrder === 'desc' ? b.value - a.value : a.value - b.value;
		});
		setChartData(sorted);
	}, [sortOrder]); // Ahora sortOrder es una dependencia explícita

	useEffect(() => {
		setIsClient(true);
		sortData();
	}, [sortData]); // Ahora incluye sortData como dependencia

	const toggleSortOrder = () => {
		const newOrder = sortOrder === 'desc' ? 'asc' : 'desc';
		setSortOrder(newOrder);
		// No necesitamos llamar a sortData aquí porque el cambio de sortOrder
		// activará el useCallback que actualizará los datos
	};

	const totalValue = chartData.reduce((acc, curr) => acc + curr.value, 0);

	if (!isClient) {
		return (
			<div className="h-full p-6 bg-background rounded-lg border shadow-sm">
				<div className="h-[300px] flex items-center justify-center">
					<p>Cargando gráfico...</p>
				</div>
			</div>
		);
	}

	return (
		<div className="h-full p-6 bg-background rounded-lg border shadow-sm hover:shadow-lg transition">
			{/* Header */}
			<div className="mb-4">
				<div className="flex justify-between items-start">
					<div>
						<h3 className="text-lg font-semibold">Top ventas por Sku</h3>
						<p className="text-sm text-muted-foreground">
							Distribución en unidades por producto
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
						<XAxis
							type="number"
							hide
							tickFormatter={(value) => new Intl.NumberFormat().format(value)}
						/>
						<Tooltip
							content={({ active, payload }) => {
								if (active && payload && payload.length) {
									return (
										<div className="bg-background p-3 rounded-lg border shadow-md">
											<p className="font-medium">{payload[0].payload.name}</p>
											<p className="text-sm">
												{new Intl.NumberFormat().format(
													Number(payload[0]?.value || 0),
												)}{' '}
												unidades
											</p>
											<div
												className="w-4 h-4 rounded-sm mt-1"
												style={{
													backgroundColor:
														COLORS[
															chartData.findIndex(
																(item) => item.name === payload[0].payload.name,
															) % COLORS.length
														],
												}}
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
									fill={COLORS[index % COLORS.length]}
									stroke="var(--background)"
									strokeWidth={2}
								/>
							))}
							<LabelList
								dataKey="value"
								position="right"
								formatter={(value: number) =>
									new Intl.NumberFormat().format(value)
								}
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
						Total unidades: {new Intl.NumberFormat().format(totalValue)}
					</p>
					<p className="text-xs text-muted-foreground">
						Cantidad total vendida en el mes.
					</p>
				</div>
			</div>
		</div>
	);
}
