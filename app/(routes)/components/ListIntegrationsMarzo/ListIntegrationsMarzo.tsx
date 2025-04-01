import { CustomIcon } from '@/components/CustomIcon';
import { List } from 'lucide-react';
import { TableIntegrationsMarzo } from '../TableIntegrationsMarzo/TableIntegrationsMarzo';

export function ListIntegrationsMarzo() {
	return (
		<div className="shadow-sm bg-background rounded-lg p-5 flex-1">
			<div className="flex gap-x-2 items-center">
				<CustomIcon icon={List} />
				<p className="text-xl">Venta por Formato vs AAN - (Piezas)</p>
			</div>
			<TableIntegrationsMarzo />
		</div>
	);
}
