import { Link } from 'react-router-dom';
import DashboardButton from '../components/DashboardButton';
import DashboardCard from '../components/DashboardCard';

const Dashboard = () => {
	return (
		<>
			<div className="grid grid-cols-12 grid-rows-21 h-[193vh] xs:h-screen xs:grid-cols-12 xs:grid-rows-12">
				<div className="grid grid-cols-2 col-start-2 col-end-12 grid-rows-2 row-start-2 bg-black row-end-10 rounded-2xl">
					<DashboardCard stats={{ accuracy: 10, wrong: 10, correct: 10 }}>
						Flashcard
					</DashboardCard>
					<DashboardCard stats={{ accuracy: 10, wrong: 10, correct: 10 }}>
						Quiz
					</DashboardCard>
				</div>
				<div className="grid col-span-8 col-start-3 grid-rows-6 rounded-full row-start-13 row-end-23">
					<div className="grid grid-rows-6 row-span-4 place-items-center">
						<div className="flex items-center justify-center w-3/4 row-span-4 bg-black rounded-lg h-3/4">
							<div className="flex items-center justify-center w-24 h-24 bg-white rounded-full">
								<Link to="../index"></Link>
								<div className="translate-x-1 arrow-right"></div>
							</div>
						</div>
						<div className="text-2xl font-bold">เริ่มเลย</div>
						<div className="grid w-full h-full place-items-center">
							<input
								type="text"
								name=""
								id=""
								className="w-3/4 border-2 h-2/4 rounded-3xl text-indent"
							/>
						</div>
					</div>
					<div className="flex items-center justify-center">
						<DashboardButton iconName="edit" className="bg-main">
							akljdl
						</DashboardButton>
					</div>
					<div className="grid place-items-center">
						<DashboardButton iconName="edit" className="bg-main">
							akljdl
						</DashboardButton>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
