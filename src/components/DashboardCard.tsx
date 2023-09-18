import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Data } from '../configs/stuff';

interface Props {
	children: React.ReactNode;
	stats: Data;
}

const DashboardCard = ({ children, stats }: Props) => {
	const authstuff = useAuth();
	return (
		<div
			className="flex items-center justify-center col-span-2"
			onClick={() => {
				if (confirm('log out?')) authstuff?.logout();
			}}
		>
			<div className="w-[60%] bg-gray-600 rounded-lg h-[70%] flex justify-evenly flex-col">
				<div className="flex items-center justify-between py-3 bg-white rounded-lg mx-7">
					<span className="ml-4 font-bold">{children}</span>
					<span className="flex gap-2 mr-4">
						<span className="material-symbols-outlined dashb-ico">edit</span>
						<span className="material-symbols-outlined dashb-ico">
							arrow_forward_ios
						</span>
					</span>
				</div>
				<div className="flex items-center justify-center">
					<div className="text-center text-white">
						<span>
							<span className="font-semibold">Accuracy:</span> {stats.accuracy}
						</span>
						<br />
						<span>
							<span className="font-semibold">
								# of correct answers: {stats.correct}
							</span>
						</span>
						<br />
						<span>
							<span className="font-semibold">
								# of wrong answers: {stats.wrong}
							</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardCard;
