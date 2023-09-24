import React from 'react';

interface Props {
	children: React.ReactNode;
	iconName: string;
	className?: string;
}

const DashboardButton = ({ children, iconName, className }: Props) => {
	return (
		<div>
			<button
				className={
					'flex items-center justify-center w-full h-full gap-2 rounded-full bg-main py-3 px-10' +
					' ' +
					className
				}
			>
				<span className="text-xl material-symbols-outlined">{iconName}</span>
				<span className="text-lg font-semibold">{children}</span>
			</button>
		</div>
	);
};

export default DashboardButton;
