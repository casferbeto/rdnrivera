import { Button } from '@/components/ui/button';
import {
	ClerkProvider,
	SignInButton,
	SignUpButton,
	SignedIn,
	SignedOut,
	UserButton,
} from '@clerk/nextjs';
import { CardSummary } from '../components/CardSummary';
import {
	UserRound,
	UsersRound,
	ChartNoAxesCombined,
	ShoppingCart,
	CircleDollarSign,
	Landmark,
	PackageOpen,
	Truck,
} from 'lucide-react';
import { LastCustomers } from '../components/LastCustomers';
import { SalesDistributors } from '../components/SalesDistributors';
import { ListIntegrations } from '../components/ListIntegrations';
import { Average } from 'next/font/google';
import { Sellout } from '../components/Sellout';
import { Partformat } from '../components/Partformat/Partformat';
import { VentasPorFormatoChartEnero } from '../components/VentasPorFormatoChart/VentasPorFormatoChartEnero';
import { SalesRadialChartEnero } from '../components/SalesRadialChart/SalesRadialChartEnero';
import { SalesRadialChartEneroProyectado } from '../components/SalesRadialChart/SalesRadialChartEneroProyectado';
import { SalesRadialChartAcumulado } from '../components/SalesRadialChart/SalesRadialChartAcumulado';
import { BarChartSellIn } from '../components/BarChartSellin/BarChartSellIn';
import { BarChartSellOut } from '../components/BarChartSellOut/BarChartSellOut';

const dataCardSummary = [
	{
		icon: ChartNoAxesCombined,
		total: '2,919,058 pzas',
		añoAnterior: '3,549,930 pzas',
		average: -18,
		title: 'Total Sell In',
		tooltipText: 'Sell In en piezas a marzo 2025',
	},
	{
		icon: CircleDollarSign,
		total: '$18,880,557 mxn',
		añoAnterior: '$23,115,115 mxn',
		average: -18,
		title: 'Total Sell In',
		tooltipText: 'Sell In en valor',
	},
	{
		icon: ShoppingCart,
		total: '3,017,532 pzas',
		añoAnterior: '3,601,382.00 pzas',
		average: -16,
		title: 'Total Sell Out',
		tooltipText: 'Sell Out en piezas a marzo 2025',
	},
	{
		icon: CircleDollarSign,
		total: '$58,361,607.01 mxn',
		añoAnterior: '$52,959,125.44 mxn',
		average: -9,
		title: 'Total Sell Out',
		tooltipText: 'Sell Out en Valor',
	},
	{
		icon: Landmark,
		total: '8.80%',
		añoAnterior: '7.82%',
		average: 12.5,
		title: 'Margen',
		tooltipText: 'Margen a total negocio',
	},
	{
		icon: PackageOpen,
		total: '24 Disponibles',
		añoAnterior: '34',
		average: 30,
		ddiExistencia: '34 DDI Existencia',
		title: 'DDI',
		tooltipText: '36 DDI Existencia  ',
	},
	{
		icon: Truck,
		total: '294,643 cajas',
		average: 81.81,
		title: 'Fill Rate',
		tooltipText: 'Surtido 241,043 cajas en marzo',
	},
	{
		icon: UsersRound,
		total: '13',
		average: 0,
		title: 'Rank total proveedores',
		tooltipText:
			'Rank 1 en Sueros Orales / Rank 9 en medicamento / Rank 19 en farmacia',
	},
];

export default function Home() {
	return (
		<div>
			<h2 className="text-2xl mb-4">Marzo 2025</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
				{dataCardSummary.map(
					({
						icon,
						total,
						average,
						title,
						tooltipText,
						añoAnterior,
						ddiExistencia,
					}) => (
						<CardSummary
							key={title}
							icon={icon}
							total={total}
							average={average}
							title={title}
							tooltipText={tooltipText}
							añoAnterior={añoAnterior}
							ddiExistencia={ddiExistencia}
							// Agregar valores por defecto para props requeridas
							promedio={average} // Si promedio es igual a average
							añoActual="2025" // Valor estático o dinámico según necesidad
							ddiDisponible={ddiExistencia ? '34' : undefined} // Ejemplo condicional
						/>
					),
				)}
			</div>
			<div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-10 mt-12 md:mb-10">
				<div className="w-full h-full">
					<BarChartSellIn />
				</div>
				<div className="w-full h-full">
					<BarChartSellOut />
				</div>
			</div>

			<div className="flex flex-col xl:flex-row flex-wrap gap-4 md:gap-5 mt-12 md:mb-10 w-full">
				<SalesRadialChartEnero />
				<SalesRadialChartEneroProyectado />
				<SalesRadialChartAcumulado />
			</div>

			<div className="grid md:gap-x-10 mt-12">
				<div className="w-full h-full">
					<Partformat />
				</div>
			</div>

			<div className="grid md:gap-x-10 mt-12">
				<VentasPorFormatoChartEnero />
			</div>
		</div>
	);
}
