import { Button } from '@/components/ui/button';
import {
	ClerkProvider,
	SignInButton,
	SignUpButton,
	SignedIn,
	SignedOut,
	UserButton,
} from '@clerk/nextjs';
import { CardSummary } from './components/CardSummary';
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
import { LastCustomers } from './components/LastCustomers';
import { SalesDistributors } from './components/SalesDistributors';
import { ListIntegrations } from './components/ListIntegrations';
import { Average } from 'next/font/google';
import { Sellout } from './components/Sellout';
import { Partformat } from './components/Partformat/Partformat';

const dataCardSummary = [
	{
		icon: ChartNoAxesCombined,
		total: '3,512,494  pzas',
		añoAnterior: '6,394,812  pzas',
		average: -45,
		title: 'Total Sell In',
		tooltipText: 'Sell In en piezas a abril 2025',
	},
	{
		icon: CircleDollarSign,
		total: '$58,203,573  mxn',
		añoAnterior: '$52,939,086  mxn',
		average: 10,
		title: 'Total Sell In',
		tooltipText: 'Sell In en valor',
	},
	{
		icon: ShoppingCart,
		total: '3,532,617  pzas',
		añoAnterior: '5,139,951  pzas',
		average: -31,
		title: 'Total Sell Out',
		tooltipText: 'Sell Out en piezas a marzo 2025',
	},
	{
		icon: CircleDollarSign,
		total: '$62,187,247 mxn',
		añoAnterior: '83,198,921  mxn',
		average: -25,
		title: 'Total Sell Out',
		tooltipText: 'Sell Out en Valor',
	},
	{
		icon: Landmark,
		total: '12.19%',
		añoAnterior: '7.73%',
		average: 57.7,
		title: 'Margen',
		tooltipText: 'Margen a total negocio',
	},
	{
		icon: PackageOpen,
		total: '36 Disponibles',
		añoAnterior: '',
		average: 0,
		ddiExistencia: '',
		title: 'DDI',
		tooltipText: '36 DDI Existencia  ',
	},
	{
		icon: Truck,
		total: '294,643 cajas',
		average: 97.15,
		title: 'Fill Rate',
		tooltipText: 'Surtido 286,258 cajas en marzo',
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
			<h2 className="text-2xl mb-4">Acumulado 2025</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-x-20">
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
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-x-20"></div>
			<div className="grid md:gap-x-10 mt-12">
				<SalesDistributors />
				<Sellout />
			</div>
			<div className="grid md:gap-x-10 mt-12"></div>
			<div className="flex-col md:gap-x-10 xl:flex xl:flex-row gap-y-4 md:gap-y-0 mt-12 md:mb-10 justify-center">
				<Partformat />
				<ListIntegrations />
			</div>
		</div>
	);
}
