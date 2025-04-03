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
import { VentasPorFormatoChartMarzo } from '../components/VentasPorFormatoChart/VentasPorFormatoChartMarzo';
import { SalesRadialChartMarzo } from '../components/SalesRadialChart/SalesRadialChartMarzo';
import { SalesRadialChartMarzoProyectado } from '../components/SalesRadialChart/SalesRadialChartMarzoProyectado';
import { SalesRadialChartAcumuladoMarzo } from '../components/SalesRadialChart/SalesRadialChartAcumuladoMarzo';
import { BarChartSellInMarzo } from '../components/BarChartSellin/BarChartSellInMarzo';
import { BarChartSellOutMarzo } from '../components/BarChartSellOut/BarChartSellOutMarzo';
import { PartChartFamilyMarzo } from '../components/PartChartFamily/PartChartFamilyMarzo';
import { BarChartSalesMarzo } from '../components/BarChartSales/BarChartSalesMarzo';
import { TableIntegrationsMarzo } from '../components/TableIntegrationsMarzo/TableIntegrationsMarzo';
import { ListIntegrationsMarzo } from '../components/ListIntegrationsMarzo/ListIntegrationsMarzo';

const dataCardSummary = [
	// Primeras 8 tarjetas (Datos Acumulados)
	{
		icon: ChartNoAxesCombined,
		total: '3,512,494  pzas',
		añoAnterior: '3,545,304 pzas',
		average: -1,
		title: 'Total Sell In',
		tooltipText: 'Sell In en piezas 2025',
		group: 'acumulado',
	},
	{
		icon: CircleDollarSign,
		total: '$58,203,573  mxn',
		añoAnterior: '$52,939,086  mxn',
		average: 10,
		title: 'Total Sell In',
		tooltipText: 'Sell In en valor',
		group: 'acumulado',
	},
	{
		icon: ShoppingCart,
		total: '3,532,617  pzas',
		añoAnterior: '3,601,382 pzas',
		average: -2,
		title: 'Total Sell Out',
		tooltipText: 'Sell Out en piezas 2025',
		group: 'acumulado',
	},
	{
		icon: CircleDollarSign,
		total: '$61,854,610 mxn',
		añoAnterior: '58,361,607 mxn',
		average: 6,
		title: 'Total Sell Out',
		tooltipText: 'Sell Out en Valor',
		group: 'acumulado',
	},
	{
		icon: Landmark,
		total: '12.19%',
		añoAnterior: '7.73%',
		average: 57.7,
		title: 'Margen',
		tooltipText: 'Margen a total negocio',
		group: 'acumulado',
	},
	{
		icon: PackageOpen,
		total: '36 Disponibles',
		añoAnterior: '',
		average: 0,
		ddiExistencia: '',
		title: 'DDI',
		tooltipText: '36 DDI Existencia',
		group: 'acumulado',
	},
	{
		icon: Truck,
		total: '294,643 cajas',
		average: 97.15,
		title: 'Fill Rate',
		tooltipText: 'Surtido 286,258 cajas en marzo',
		group: 'acumulado',
	},
	{
		icon: UsersRound,
		total: '13',
		average: 0,
		title: 'Rank total proveedores',
		tooltipText:
			'Rank 1 en Sueros Orales / Rank 9 en medicamento / Rank 19 en farmacia',
		group: 'acumulado',
	},
	// Siguientes 8 tarjetas (Datos del mes)
	{
		icon: ChartNoAxesCombined,
		total: '1,673,388 pzas',
		añoAnterior: '1,544,406 pzas',
		average: 8,
		title: 'Total Sell In',
		tooltipText: 'Sell In en piezas 2025',
		group: 'mes',
	},
	{
		icon: CircleDollarSign,
		total: '$28,093,838.00 mxn',
		añoAnterior: '$23,115,115.00 mxn',
		average: 22,
		title: 'Total Sell In Valor',
		tooltipText: 'Sell In en valor',
		group: 'mes',
	},
	{
		icon: ShoppingCart,
		total: '1,245,654 pzas',
		añoAnterior: '1,431,852 pzas',
		average: -13,
		title: 'Total Sell Out',
		tooltipText: 'Sell Out en piezas 2025',
		group: 'mes',
	},
	{
		icon: CircleDollarSign,
		total: '$22,571,566 mxn',
		añoAnterior: '$23,461,189 mxn',
		average: -4,
		title: 'Total Sell Out en Valor',
		tooltipText: 'Sell Out en Valor',
		group: 'mes',
	},
	{
		icon: Landmark,
		total: '16.18%',
		añoAnterior: '',
		average: 0,
		title: 'Utilidad Promedio',
		tooltipText: 'Utilidad promedio de todos los formatos',
		group: 'mes',
	},
	{
		icon: PackageOpen,
		total: '37 Existencia',
		añoAnterior: '0',
		average: 0,
		ddiExistencia: '',
		title: 'DDI',
		tooltipText: '37 DDI Existencia al cierre del mes',
		group: 'mes',
	},
	{
		icon: Truck,
		total: '77,053 cajas ordenadas',
		average: 95,
		title: 'Fill Rate',
		tooltipText: 'Surtido 73,118 cajas en el mes',
		group: 'mes',
	},
	{
		icon: UsersRound,
		total: '13',
		average: 0,
		title: 'Rank total proveedores',
		tooltipText:
			'Rank 1 en Sueros Orales / Rank 9 en medicamento / Rank 19 en farmacia',
		group: 'mes',
	},
];

export default function Home() {
	return (
		<div>
			<h2 className="text-2xl mb-4">Marzo 2025</h2>

			{/* Grupo 1 - Datos Acumulados */}
			<div className="mb-8">
				<h3 className="text-xl font-semibold mb-4">Datos Acumulados</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-x-20">
					{dataCardSummary
						.filter((card) => card.group === 'acumulado')
						.map(
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
									promedio={average}
									añoActual="2025"
									ddiDisponible={ddiExistencia ? '34' : undefined}
								/>
							),
						)}
				</div>
			</div>

			<div className="grid md:gap-x- mt-12">
				<SalesDistributors />
			</div>
			<div className="grid md:gap-x- mt-5">
				<Sellout />
			</div>

			{/* Grupo 2 - Datos del Mes */}
			<div className="mb-8 mt-10">
				<h3 className="text-xl font-semibold mb-4">Datos del Mes</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-x-20 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
					{dataCardSummary
						.filter((card) => card.group === 'mes')
						.map(
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
									promedio={average}
									añoActual="2025"
									ddiDisponible={ddiExistencia ? '34' : undefined}
								/>
							),
						)}
				</div>
			</div>

			<div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-10 mt-12 md:mb-10">
				<div className="w-full h-full">
					<BarChartSellInMarzo />
				</div>
				<div className="w-full h-full">
					<BarChartSellOutMarzo />
				</div>
			</div>

			<div className="flex flex-col xl:flex-row flex-wrap gap-4 md:gap-5 mt-20 md:mb-10 w-full">
				<SalesRadialChartMarzo />
				<SalesRadialChartMarzoProyectado />
				<SalesRadialChartAcumuladoMarzo />
				<Partformat />
			</div>

			<div className="w-full h-full mt-5">
				<div>
					<BarChartSalesMarzo />
				</div>
			</div>

			<div className="w-full h-full mt-5">
				<PartChartFamilyMarzo />
			</div>

			<div className="w-full h-full mt-5">
				<ListIntegrationsMarzo />
			</div>
		</div>
	);
}
