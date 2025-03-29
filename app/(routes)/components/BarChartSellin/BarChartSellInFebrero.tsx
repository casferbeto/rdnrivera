'use client';

import { TrendingUp } from 'lucide-react';
import {
	Bar,
	BarChart,
	CartesianGrid,
	XAxis,
	YAxis,
	ResponsiveContainer,
	Tooltip,
	LabelList,
	Cell,
} from 'recharts';

// Datos corregidos con estructura consistente
const data = [
	{ periodo: 'Febrero 2024', ventaPzas: 893188 },
	{ periodo: 'Febrero	 2025', ventaPzas: 1230756 },
];

const COLORS = ['#16c8c7', '#887cfd'];

export function BarChartSellInFebrero() {
	return (
		<div className="mt-5">
			{/* Encabezado */}
			<div className="flex gap-x-5 mb-5">
				<div className="flex items-center gap-2">
					<div className="text-lg font-semibold">Sell In 2025 vs AAN</div>
					<div className="text-sm text-muted-foreground"> </div>
				</div>

				<div className="flex items-center gap-2 px-3 text-md bg-blue-500 text-white rounded-xl w-fit">
					-27%
					<TrendingUp strokeWidth={1} className="h-4 w-4" />
				</div>
			</div>

			{/* Gráfica */}
			<div className="h-[350px]">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						data={data}
						margin={{ top: 30, right: 30, left: 20, bottom: 0 }}
					>
						<CartesianGrid vertical={false} strokeDasharray="3 3" />

						<Tooltip
							content={({ active, payload }) => {
								if (active && payload && payload.length) {
									return (
										<div className="bg-white p-3 rounded-lg shadow-xl border">
											<p className="font-medium">
												{payload[0].payload.periodo}
											</p>
											<p className="text-sm">
												{new Intl.NumberFormat().format(
													(payload[0].value as number) ?? 0,
												)}{' '}
												piezas
											</p>
										</div>
									);
								}
								return null;
							}}
						/>
						<Bar dataKey="ventaPzas" radius={[4, 4, 0, 0]} barSize={350}>
							{data.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={COLORS[index % COLORS.length]}
								/>
							))}
							<LabelList
								dataKey="ventaPzas"
								position="top"
								formatter={(value: number) =>
									new Intl.NumberFormat().format(value)
								}
								fill="#374151"
								fontSize={12}
								offset={10}
							/>
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			</div>

			{/* Leyenda de colores */}
			<div className="mt-4 flex flex-wrap gap-3 text-sm">
				{data.map((item, index) => (
					<div key={item.periodo} className="flex items-center gap-2">
						<div
							className="w-3 h-3 rounded-sm"
							style={{ backgroundColor: COLORS[index] }}
						/>
						<span className="text-muted-foreground">{item.periodo}</span>
					</div>
				))}
			</div>

			{/* Pie */}
			<div className="mt-4 text-sm text-muted-foreground">
				Comparativa mensual vs AAN
			</div>
		</div>
	);
}
