import { LucideIcon } from 'lucide-react';

export type CardSummaryProps = {
	icon: LucideIcon;
	total: string;
	title: string;
	tooltipText: string;
	average: number;
	añoAnterior?: string;
	ddiExistencia?: string;
	// Hacer opcionales las props faltantes
	promedio?: number;
	añoActual?: string;
	ddiDisponible?: string;
};
