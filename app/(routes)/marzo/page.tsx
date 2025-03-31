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

import { BarChartSellInFebrero } from '../components/BarChartSellin/BarChartSellInFebrero';
import { BarChartSellOutFebrero } from '../components/BarChartSellOut/BarChartSellOutFebrero';
import { SalesRadialChartFebrero } from '../components/SalesRadialChart/SalesRadialChartFebrero';
import { SalesRadialChartFebreroProyectado } from '../components/SalesRadialChart/SalesRadialChartFebreroProyectado';
import { VentasPorFormatoChartFebrero } from '../components/VentasPorFormatoChart/VentasPorFormatoChartFebrero';
import { SalesRadialChartAcumuladoFebrero } from '../components/SalesRadialChart/SalesRadialChartAcumuladoFebrero';

const dataCardSummary = [
	{
		icon: ChartNoAxesCombined,
		total: '1,413,024 pzas',
		añoAnterior: '1,544,406 pzas',
		average: -9,
		title: 'Total Sell In',
		tooltipText: 'Sell In en piezas 2025',
	},
	{
		icon: CircleDollarSign,
		total: '$23,815,556.00 mxn',
		añoAnterior: '$23,115,115.00 mxn',
		average: 3,
		title: 'Total Sell In Valor',
		tooltipText: 'Sell In en valor',
	},
	{
		icon: ShoppingCart,
		total: '997,290 pzas',
		añoAnterior: '1,431,852 pzas',
		average: -30,
		title: 'Total Sell Out',
		tooltipText: 'Sell Out en piezas 2025',
	},
	{
		icon: CircleDollarSign,
		total: '$18,127,589.21 mxn',
		añoAnterior: '$23,461,189.12 mxn',
		average: -33,
		title: 'Total Sell Out en Valor',
		tooltipText: 'Sell Out en Valor',
	},
	{
		icon: Landmark,
		total: '13.35%',
		añoAnterior: '',
		average: 0,
		title: 'Utilidad Promedio',
		tooltipText: 'Utilidad promedio de todos los formatos',
	},
	{
		icon: PackageOpen,
		total: '35 Existencia',
		añoAnterior: '0',
		average: 0,
		ddiExistencia: '34 DDI Existencia',
		title: 'DDI',
		tooltipText: '34 DDI Existencia al cierre del mes  ',
	},
	{
		icon: Truck,
		total: '77,053 cajas ordenadas',
		average: 68,
		title: 'Fill Rate',
		tooltipText: 'Surtido 52,281 cajas en el mes',
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
					<BarChartSellInFebrero />
				</div>
				<div className="w-full h-full">
					<BarChartSellOutFebrero />
				</div>
			</div>

			<div className="flex flex-col xl:flex-row flex-wrap gap-4 md:gap-5 mt-20 md:mb-10 w-full">
				<SalesRadialChartFebrero />
				<SalesRadialChartFebreroProyectado />
				<SalesRadialChartAcumuladoFebrero />
				<Partformat />
			</div>

			<div className="grid md:gap-x-10 mt-12">
				<div className="w-full h-full"></div>
			</div>

			<div className="grid md:gap-x-10 mt-12">
				<VentasPorFormatoChartFebrero />
			</div>
		</div>
	);
}
