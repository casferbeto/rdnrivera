'use client';
import { TrendingDown, TrendingUp } from 'lucide-react';
import {
	Area,
	AreaChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import { dataSoGraphics } from './GraphicSellout.data';

export function GraphicSellout() {
	return (
		<div className="mt-5">
			<div className="flex gap-x-5 mb-5">
				<div className="flex items-center gap-2 px-3 text-md bg-[#16c8c7] text-white rounded-xl w-fit"></div>
			</div>
			<div className="h-[350px]">
				<ResponsiveContainer width="100%" height="100%">
					<AreaChart
						width={730}
						height={250}
						data={dataSoGraphics}
						margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
					>
						<defs>
							<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#16c8c7" stopOpacity={0.8} />
								<stop offset="95%" stopColor="#16c8c7" stopOpacity={0} />
							</linearGradient>
							<linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#887cfd" stopOpacity={0.8} />
								<stop offset="95%" stopColor="#887cfd" stopOpacity={0} />
							</linearGradient>
							<linearGradient id="colorAl" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#e0f9f7" stopOpacity={0.8} />
								<stop offset="95%" stopColor="#e0f9f7" stopOpacity={0} />
							</linearGradient>
						</defs>
						<XAxis dataKey="year" />
						<YAxis />
						<Tooltip />
						<Area
							type="monotone"
							dataKey="añoActual"
							stroke="#887cfd"
							fillOpacity={1}
							fill="url(#colorPv)"
						/>

						<Area
							type="monotone"
							dataKey="añoAnterior"
							stroke="#16c8c7"
							fillOpacity={1}
							fill="url(#colorUv)"
						/>

						<Area
							type="monotone"
							dataKey=""
							stroke="#ededed"
							fillOpacity={1}
							fill="url(#colorAl)"
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
