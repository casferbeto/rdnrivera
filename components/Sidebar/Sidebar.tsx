import React from 'react';
import { SidebarRoutes } from '../SidebarRoutes';
import { Logo } from '@/components/Logo';

const Sidebar = () => {
	return (
		<div className="h-screen">
			<div className="h-full flex flex-col border-r w-[235px]">
				<Logo />
				<SidebarRoutes />
			</div>
		</div>
	);
};

export default Sidebar;
