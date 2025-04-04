import { CustomIcon } from '@/components/CustomIcon';
import { BarChart } from 'lucide-react';
import { Graphicsuscribers } from '../GraphicSuscribers';

export function SalesDistributors() {
	return (
		<div className="shadow-sm bg-background rounded-lg p-5">
			<div className="flex gap-x-2 items-center ">
				<CustomIcon icon={BarChart} />
				<p className="text-xl">Sell In Promedio Mensual 878,123 piezas</p>
			</div>
			<Graphicsuscribers />
		</div>
	);
}
