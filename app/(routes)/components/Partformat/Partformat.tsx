'use client';
import { Percent } from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend } from 'recharts';
import { CustomIcon } from '@/components/CustomIcon';
import { dataPartformat } from './Partformat.data';

export function Partformat() {
	return (
		<div className="mb-4 lg:mb-0 shadow-sm bg-background rounded-lg p-5 w-full xl:w-96 hover:shadow-lg transition">
			<div className="flex gap-x-2 items-center mb-4">
				<CustomIcon icon={Percent} />
				<p className="text-xl">Participación por Formato</p>
			</div>
			<div className="w-full h-[200px]  ">
				<ResponsiveContainer aspect={1} maxHeight={200}>
					<PieChart>
						<Pie
							dataKey="value"
							data={dataPartformat}
							outerRadius={80}
							labelLine={false}
							label={({ value }) => `${value}%`} // Aquí añadimos las etiquetas
							fill="#8884d8" // Puedes personalizar el color aquí
						/>
						<Tooltip
							formatter={(value) => `${value}%`} // Formato para el tooltip
						/>
						<Legend
							wrapperStyle={{
								paddingTop: '18px', // Ajusta este valor según necesites
								marginTop: '15px', // Opcional: para mayor control
							}}
						/>
					</PieChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
