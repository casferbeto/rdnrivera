'use client';

import { SidebarItem } from '../SidebarItem';
import { Separator } from '@/components/ui/separator';
import { dataGeneralSidebar } from './SidebarRoutes.data';
import { Button } from '@/components/ui/button';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export function SidebarRoutes() {
	const handleDownloadPDF = async () => {
		try {
			// 1. Almacenar estados originales
			const originalScrollX = window.scrollX;
			const originalScrollY = window.scrollY;
			const originalOverflow = document.body.style.overflow;
			const originalWidth = document.body.style.width;

			// 2. Aplicar estilos temporales
			document.body.style.overflow = 'visible';
			document.body.style.width = `${document.documentElement.scrollWidth}px`;

			// 3. Optimizar elementos para impresión
			document.querySelectorAll('canvas, table').forEach((el) => {
				const element = el as HTMLElement;
				element.style.boxShadow = 'none';
				element.classList.add('print-margin');
			});

			// 4. Capturar contenido completo
			const canvas = await html2canvas(document.documentElement, {
				scale: 1,
				scrollX: -originalScrollX,
				scrollY: -originalScrollY,
				windowWidth: document.documentElement.scrollWidth,
				windowHeight: document.documentElement.scrollHeight,
				useCORS: true,
				logging: true,
			});

			// 5. Restaurar estados originales
			document.body.style.overflow = originalOverflow;
			document.body.style.width = originalWidth;
			window.scrollTo(originalScrollX, originalScrollY);

			// 6. Configurar PDF
			const pdf = new jsPDF('p', 'mm', 'a4');
			const pageWidth = pdf.internal.pageSize.getWidth();
			const pageHeight = pdf.internal.pageSize.getHeight();

			// 7. Calcular dimensiones
			const imgWidth = pageWidth - 10;
			const imgHeight = (canvas.height * imgWidth) / canvas.width;

			// 8. Dividir en páginas
			let position = 0;
			let remainingHeight = imgHeight;

			while (remainingHeight > 0) {
				pdf.addImage(
					canvas,
					'PNG',
					5,
					position + 5,
					imgWidth,
					imgHeight,
					undefined,
					'FAST',
				);

				remainingHeight -= pageHeight - 10;
				position -= pageHeight - 10;

				if (remainingHeight > 0) {
					pdf.addPage('p', 'portrait');
				}
			}

			// 9. Descargar
			pdf.save(`reporte-completo-${new Date().toISOString().slice(0, 10)}.pdf`);
		} catch (error) {
			console.error('Error:', error);
			alert('Error al generar el PDF');
		} finally {
			// 10. Limpiar estilos temporales
			document.querySelectorAll('canvas, table').forEach((el) => {
				const element = el as HTMLElement;
				element.style.boxShadow = '';
				element.classList.remove('print-margin');
			});
		}
	};

	return (
		<div className="flex flex-col justify-between h-full">
			<div>
				<div className="p-2 md:p-6">
					<p className="text-slate-500 mb-2">GENERAL</p>
					{dataGeneralSidebar.map((item) => (
						<SidebarItem key={item.label} item={item} />
					))}
				</div>
			</div>

			<div>
				<div className="text-center p-6">
					<Button
						variant="outline"
						className="w-full bg-white hover:bg-gray-50 print:hidden"
						onClick={handleDownloadPDF}
					>
						Descargar PDF Completo
					</Button>
				</div>

				<Separator className="bg-gray-200" />
				<footer className="mt-3 p-3 text-center text-sm text-gray-500 print:hidden">
					© 2025 Todos los derechos reservados
				</footer>
			</div>
		</div>
	);
}
