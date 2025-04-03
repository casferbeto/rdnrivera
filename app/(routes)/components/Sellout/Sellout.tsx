import { CustomIcon } from '@/components/CustomIcon';
import { BarChart } from 'lucide-react';
import { GraphicSellout } from '../GraphicSellout';

export function Sellout() {
	return (
		<div className="shadow-sm bg-background rounded-lg p-5">
			<div className="flex gap-x-2 items-center ">
				<CustomIcon icon={BarChart} />
				<p className="text-xl">Sell Out Promedio Mensual 883,154 piezas</p>
			</div>
			<GraphicSellout />
		</div>
	);
}
