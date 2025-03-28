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
} from 'recharts';
import { dataBarChartSellInEnero } from './BarChartSellInEnero.data';

export function BarChartSellIn() {
	return (
		<div className="mt-5">
			{/* Encabezado */}
			<div className="flex gap-x-5 mb-5">
				<div className="flex items-center gap-2">
					<div className="text-lg font-semibold">Sell Out</div>
					<div className="text-sm text-muted-foreground">
						Enero 2024 vs Enero 2025
					</div>
				</div>

				<div className="flex items-center gap-2 px-3 text-md bg-blue-500 text-white rounded-xl w-fit">
					+5.2%
					<TrendingUp strokeWidth={1} className="h-4 w-4" />
				</div>
			</div>

			{/* Gráfica */}
			<div className="h-[350px]">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						data={dataBarChartSellInEnero}
						margin={{ top: 10, right: 30, left: 20, bottom: 0 }}
					>
						<CartesianGrid vertical={false} strokeDasharray="3 3" />
						<XAxis
							dataKey="month"
							tickLine={false}
							axisLine={false}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<YAxis
							tickLine={false}
							axisLine={false}
							tickFormatter={(value) => `${value}`}
						/>
						<Tooltip
							contentStyle={{
								background: '#fff',
								border: 'none',
								borderRadius: '8px',
								boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
							}}
						/>
						<Bar
							dataKey="piezas"
							fill="#16c8c7"
							radius={[4, 4, 0, 0]}
							barSize={430}
						/>
					</BarChart>
				</ResponsiveContainer>
			</div>

			{/* Pie */}
			<div className="mt-4 text-sm text-muted-foreground">
				Comparativa Enero 2025 vs ANN
			</div>
		</div>
	);
}
