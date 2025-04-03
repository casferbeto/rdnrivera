'use client';

import { SidebarItem } from '../SidebarItem';
import { Separator } from '@/components/ui/separator';
import { dataGeneralSidebar } from './SidebarRoutes.data';
import { Button } from '@/components/ui/button';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export function SidebarRoutes() {
	const handleDownloadPDF = async () => {
		// Declarar originalStyles fuera del try para que sea accesible en finally
		let originalStyles: { element: HTMLElement; display: string }[] = [];

		try {
			// 1. Ocultar elementos no deseados
			const elementsToHide = [
				'header',
				'aside',
				'.no-print',
				'.print-hidden',
				'button',
				'footer',
			];

			elementsToHide.forEach((selector) => {
				document.querySelectorAll(selector).forEach((el) => {
					const element = el as HTMLElement;
					originalStyles.push({
						element,
						display: element.style.display,
					});
					element.style.display = 'none';
				});
			});

			// Resto del código sin cambios...
			// 2. Aplicar estilos especiales para impresión
			const printStyles = `
        <style>
          @media print {
            body {
              background: white !important;
              padding: 20px !important;
            }
            .card {
              break-inside: avoid;
              page-break-inside: avoid;
              margin-bottom: 15px !important;
              box-shadow: none !important;
              border: 1px solid #eee !important;
            }
            .grid {
              display: block !important;
            }
            canvas {
              max-width: 100% !important;
              height: auto !important;
            }
          }
        </style>
      `;

			document.head.insertAdjacentHTML('beforeend', printStyles);

			// 3. Capturar solo el contenido principal
			const content = document.getElementById('main-content') || document.body;

			// 4. Configuración optimizada para html2canvas
			const canvas = await html2canvas(content, {
				scale: 1.5,
				logging: false,
				useCORS: true,
				allowTaint: true,
				backgroundColor: '#ffffff',
				scrollX: 0,
				scrollY: 0,
				windowWidth: content.scrollWidth,
				windowHeight: content.scrollHeight,
			});

			// 5. Crear PDF continuo
			const imgData = canvas.toDataURL('image/png');
			const pdf = new jsPDF({
				orientation: canvas.width > canvas.height ? 'landscape' : 'portrait',
				unit: 'mm',
			});

			const imgWidth = pdf.internal.pageSize.getWidth();
			const imgHeight = (canvas.height * imgWidth) / canvas.width;

			pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
			pdf.save(`reporte-${new Date().toISOString().slice(0, 10)}.pdf`);
		} catch (error) {
			console.error('Error al generar PDF:', error);
			alert('Error generando el PDF. Por favor intente nuevamente.');
		} finally {
			// 6. Restaurar estilos originales
			originalStyles.forEach(({ element, display }) => {
				element.style.display = display;
			});

			// Eliminar estilos de impresión
			const printStyle = document.querySelector('style[media="print"]');
			if (printStyle) {
				printStyle.remove();
			}
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
						className="w-full bg-white hover:bg-gray-50 print-hidden"
						onClick={handleDownloadPDF}
					>
						Descargar PDF Completo
					</Button>
				</div>

				<Separator className="bg-gray-200 print-hidden" />
				<footer className="mt-3 p-3 text-center text-sm text-gray-500 print-hidden">
					© 2025 Todos los derechos reservados Alberto Castillo
				</footer>
			</div>
		</div>
	);
}
