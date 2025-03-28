import { CustomIcon } from '@/components/CustomIcon';
import { CardSummaryProps } from './CardSummary.types';
import { Icon, MoveDownRight, MoveUpRight, TrendingUp } from 'lucide-react';
import { Customtooltip } from '@/components/CustomTooltip';

export function CardSummary(props: CardSummaryProps) {
	const {
		average,
		añoAnterior,
		añoActual,
		promedio,
		icon: Icon,
		title,
		tooltipText,
		total,
		ddiExistencia,
		ddiDisponible,
	} = props;

	return (
		<div className="shadow-sm bg-background rounded-lg p-5 py-3 hover:shadow-lg transition">
			<div className=" flex justify-between ">
				<div className=" flex gap-2 items-center">
					<CustomIcon icon={Icon} />
					{title} - {total}
				</div>

				<Customtooltip content={tooltipText} />
			</div>
			<div className=" flex gap-4 mt-2 md: mt-4">
				<div className="flex items-center gap-1 px-2 text-xs text-white rounded-lg h-[20px] bg-[#887cfd] bg-[#887cfd]:bg-secondary">
					Año anterior: {añoAnterior}
				</div>
			</div>
			<div className=" flex gap-4 mt-2 md: mt-4">{ddiExistencia}</div>
			<div className=" flex gap-4 mt-2 md: mt-4">
				<div
					className={`flex items-center gap-1 px-2 text-xs text-white rounded-lg h-[20px] ${
						average < 0 ? 'bg-red-500' : 'bg-[#16c8c7]'
					}`}
				>
					{average}%
					{average < 0 && (
						<MoveDownRight strokeWidth={2} className="w-4 h-4 " />
					)}
					{average > 0 && <TrendingUp strokeWidth={2} className="w-4 h-4" />}
				</div>
			</div>
		</div>
	);
}
