'use client';

import { TrendingUp } from 'lucide-react';
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from 'recharts';
import { useEffect, useState } from 'react';

// Datos sin 'as const' para evitar conflictos de mutabilidad
const salesDataEnero = [
	{
		month: '',
		goal: 1822002,
		billed: 1481774,
		billedWithAppointment: 0,
		formattedGoal: '1,822,002',
		formattedBilled: '1,481,774 pzas',
		formattedBilledWithAppointment: '',
	},
];

export function SalesRadialChartAcumuladoFebrero() {
	const [isMounted, setIsMounted] = useState(false);
	const {
		goal,
		billed,
		billedWithAppointment,
		formattedGoal,
		formattedBilled,
		formattedBilledWithAppointment,
	} = salesDataEnero[0];

	const progress = (billed / goal) * 100;
	const projectedProgress = (billedWithAppointment / goal) * 100;
	const isGoalExceeded = billedWithAppointment >= goal;

	useEffect(() => setIsMounted(true), []);

	if (!isMounted) return null;

	// Función de renderizado con tipos compatibles con Recharts
	const renderLabel = (props: {
		viewBox?: {
			cx?: number;
			cy?: number;
			[key: string]: any;
		};
	}) => {
		const cx = props.viewBox?.cx || 0;
		const cy = props.viewBox?.cy || 0;

		return (
			<text
				x={cx}
				y={cy}
				textAnchor="middle"
				className="[text-shadow:_0_1px_0_rgb(255 255 255 / 90%)]"
			>
				<tspan
					x={cx}
					y={cy - 16}
					className="fill-foreground text-2xl font-bold"
				>
					{`${(isGoalExceeded ? projectedProgress : progress).toFixed(1)}%`}
				</tspan>
				<tspan x={cx} y={cy + 4} className="fill-muted-foreground text-sm">
					{isGoalExceeded ? formattedBilledWithAppointment : formattedBilled}
				</tspan>
			</text>
		);
	};

	return (
		<div className="flex flex-col h-full p-6 bg-white rounded-lg border shadow-sm">
			{/* Encabezado */}
			<div className="pb-2">
				<h3 className="text-lg font-semibold">
					Progreso de Ventas - Acumulado 2025
				</h3>
				<p className="text-sm text-muted-foreground">
					{isGoalExceeded ? 'Meta vs Facturado + Cita' : 'Meta vs Facturado'}
				</p>
			</div>

			{/* Gráfica */}
			<div className="flex flex-1 items-center justify-center pb-0">
				<div className="mx-auto aspect-square w-full max-w-[250px]">
					<RadialBarChart
						data={salesDataEnero}
						endAngle={180}
						innerRadius={80}
						outerRadius={130}
						width={250}
						height={250}
					>
						<PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
							<Label content={renderLabel as any} />{' '}
							{/* Conversión temporal segura */}
						</PolarRadiusAxis>

						<RadialBar
							dataKey="goal"
							stackId="a"
							cornerRadius={5}
							fill="#16c8c730"
							className="stroke-background stroke-2"
						/>

						<RadialBar
							dataKey={isGoalExceeded ? 'billedWithAppointment' : 'billed'}
							fill="#887cfd"
							stackId="a"
							cornerRadius={5}
							className="stroke-background stroke-2"
						/>
					</RadialBarChart>
				</div>
			</div>

			{/* Pie de página */}
			<div className="flex flex-col gap-2 text-sm mt-4">
				<div className="flex items-center gap-2 font-medium leading-none">
					{isGoalExceeded ? 'Meta superada' : 'Progreso actual'}
					<TrendingUp className="h-4 w-4" />
				</div>
				<div className="leading-none text-muted-foreground">
					{`Meta: ${formattedGoal} | ${
						isGoalExceeded
							? `Facturado + Cita: ${formattedBilledWithAppointment}`
							: `Facturado: ${formattedBilled}`
					}`}
				</div>
			</div>
		</div>
	);
}
