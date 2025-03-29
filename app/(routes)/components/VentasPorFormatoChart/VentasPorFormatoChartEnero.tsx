'use client';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';

const data = [
	{ name: 'Formato A', value: 452300 },
	{ name: 'Formato B', value: 321500 },
	// ... otros datos
];

export function VentasPorFormatoChartEnero() {
	const CustomTooltip = ({ active, payload }: any) => {
		if (active && payload?.length) {
			return (
				<div className="bg-white p-3 rounded-lg shadow-sm border">
					<p className="font-semibold">{payload[0].payload.name}</p>
					<p className="text-sm">
						{new Intl.NumberFormat().format(
							(payload?.[0]?.value as number) ?? 0,
						)}{' '}
						piezas
					</p>
				</div>
			);
		}
		return null;
	};

	return (
		<div className="h-[350px]">
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					data={data}
					margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip content={<CustomTooltip />} />
					<Bar dataKey="value" fill="#887cfd" radius={[4, 4, 0, 0]} />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
