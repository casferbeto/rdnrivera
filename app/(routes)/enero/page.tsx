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
		total: '945,918 pzas',
		añoAnterior: '770,142 pzas',
		average: 23,
		title: 'Total Sell In',
		tooltipText: 'Sell In en piezas 2025',
	},
	{
		icon: CircleDollarSign,
		total: '$15,023,293.00 mxn',
		añoAnterior: '$11,499,722.00 mxn',
		average: 31,
		title: 'Total Sell In Valor',
		tooltipText: 'Sell In en valor',
	},
	{
		icon: ShoppingCart,
		total: '875,018 pzas',
		añoAnterior: '977,977 pzas',
		average: -11,
		title: 'Total Sell Out',
		tooltipText: 'Sell Out en piezas 2025',
	},
	{
		icon: CircleDollarSign,
		total: '$15,122,379.17 mxn',
		añoAnterior: '$15,670,106.61 mxn',
		average: -3,
		title: 'Total Sell Out en Valor',
		tooltipText: 'Sell Out en Valor',
	},
	{
		icon: Landmark,
		total: '18.83%',
		añoAnterior: '',
		average: 0,
		title: 'Utilidad Promedio',
		tooltipText: 'Utilidad promedio de todos los formatos',
	},
	{
		icon: PackageOpen,
		total: '38 Existencia',
		añoAnterior: '0',
		average: 0,
		ddiExistencia: '38 DDI Existencia',
		title: 'DDI',
		tooltipText: '38 DDI Existencia al cierre del mes  ',
	},
	{
		icon: Truck,
		total: '83,674 cajas ordenadas',
		average: 93,
		title: 'Fill Rate',
		tooltipText: 'Surtido 77,807 cajas en el mes',
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
			<h2 className="text-2xl mb-4">Enero 2025</h2>
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

			<div className="flex flex-col xl:flex-row flex-wrap gap-4 md:gap-5 mt-20 md:mb-10 w-full">
				<SalesRadialChartEnero />
				<SalesRadialChartEneroProyectado />
				<SalesRadialChartAcumulado />
				<Partformat />
			</div>

			<div className="grid md:gap-x-10 mt-12">
				<div className="w-full h-full"></div>
			</div>

			<div className="grid md:gap-x-10 mt-12">
				<VentasPorFormatoChartEnero />
			</div>
		</div>
	);
}
