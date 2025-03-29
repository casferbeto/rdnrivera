'use client';

import { ArrowUpDown, TrendingUp } from 'lucide-react';
import {
	Bar,
	BarChart,
	CartesianGrid,
	LabelList,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import { useState } from 'react';

const initialData = [
	{ formato: 'Club', ventaPzas: 141790 },
	{ formato: 'Express', ventaPzas: 5081 },
	{ formato: 'Frescura', ventaPzas: 3017 },
	{ formato: 'GBS', ventaPzas: 38214 },
	{ formato: 'Mostrador', ventaPzas: 204504 },
	{ formato: 'Reparto', ventaPzas: 482412 },
];

export function VentasPorFormatoChartEnero() {
	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
	const [chartData, setChartData] = useState(initialData);

	const sortData = () => {
		const sorted = [...initialData].sort((a, b) => {
			return sortOrder === 'desc'
				? b.ventaPzas - a.ventaPzas
				: a.ventaPzas - b.ventaPzas;
		});
		setChartData(sorted);
	};

	const toggleSortOrder = () => {
		const newOrder = sortOrder === 'desc' ? 'asc' : 'desc';
		setSortOrder(newOrder);
		sortData();
	};

	const totalVentas = initialData.reduce(
		(acc, curr) => acc + curr.ventaPzas,
		0,
	);

	return (
		<div className="h-full p-6 bg-white rounded-lg border shadow-sm">
			{/* Header */}
			<div className="mb-4">
				<div className="flex justify-between items-start">
					<div>
						<h3 className="text-lg font-semibold">
							Ventas por Formato - Enero
						</h3>
						<p className="text-sm text-gray-500">
							Distribución de ventas en piezas por formato comercial
						</p>
					</div>
					<button
						onClick={toggleSortOrder}
						className="flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 rounded-lg hover:bg-gray-200"
					>
						Ordenar
						<ArrowUpDown className="h-4 w-4" />
						<span
							className={`text-xs ${
								sortOrder === 'desc' ? 'text-blue-600' : 'text-gray-600'
							}`}
						>
							{sortOrder === 'desc' ? '↓' : '↑'}
						</span>
					</button>
				</div>
			</div>

			{/* Gráfico */}
			<div className="h-[400px]">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						data={chartData}
						layout="vertical"
						margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
					>
						<CartesianGrid horizontal={false} strokeDasharray="3 3" />
						<YAxis
							dataKey="formato"
							type="category"
							tickLine={false}
							axisLine={false}
							width={120}
							tick={{ fontSize: 12 }}
						/>
						<XAxis dataKey="ventaPzas" type="number" hide />
						<Tooltip
							content={({ active, payload }) => {
								if (active && payload && payload.length) {
									return (
										<div className="bg-white p-3 rounded-lg shadow-md border">
											<p className="font-medium">
												{payload[0].payload.formato}
											</p>
											<p className="text-sm">
												{new Intl.NumberFormat().format(
													payload[0].value as number, // Corrección aplicada aquí
												)}{' '}
												piezas
											</p>
										</div>
									);
								}
								return null;
							}}
						/>
						<Bar
							dataKey="ventaPzas"
							fill="#887cfd"
							radius={[0, 4, 4, 0]}
							barSize={28}
						>
							<LabelList
								dataKey="ventaPzas"
								position="right"
								offset={10}
								formatter={(value: number) =>
									new Intl.NumberFormat().format(value)
								}
								className="fill-gray-700"
								fontSize={12}
							/>
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			</div>

			{/* Pie */}
			<div className="mt-4 flex items-center gap-2 text-sm">
				<TrendingUp className="h-4 w-4 text-green-600" />
				<div>
					<p className="font-medium">
						Total general: {new Intl.NumberFormat().format(totalVentas)} piezas
					</p>
					<p className="text-xs text-gray-500">
						Incluye todos los formatos comerciales activos
					</p>
				</div>
			</div>
		</div>
	);
}
