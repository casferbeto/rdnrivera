import { Navbar } from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export const metadata = {
	icons: {
		icon: '/icon.png', // Ruta desde la carpeta public
	},
};

export default function LayoutDashboard({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex w-full h-full">
			<div className="hidden xl:block w-80 h-full xl:fixed">
				<Sidebar />
			</div>
			<div className="w-full xl:ml-[235px]">
				<Navbar />
				<div className="p-6 bg-[#fafbfc] dark:bg-secondary">{children}</div>
			</div>
		</div>
	);
}
