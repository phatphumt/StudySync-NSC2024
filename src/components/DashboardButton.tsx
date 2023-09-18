import React from 'react';

interface Props {
	children: React.ReactNode;
	iconName: string;
}

const DashboardButton = ({ children, iconName }: Props) => {
	return (
		<button className="flex justify-center items-center gap-2 w-9/12 rounded-full bg-main h-[75%]">
			<span className="text-3xl material-symbols-outlined">{iconName}</span>
			<span className="text-lg font-bold">{children}</span>
		</button>
	);
};

export default DashboardButton;
