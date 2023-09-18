import DashboardCard from '../components/DashboardCard';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
	const authstuff = useAuth();
	return (
		<>
			<div className="grid grid-cols-12 grid-rows-12 h--full--nav place-items-">
				<div className="grid grid-cols-2 col-start-2 col-end-9 grid-rows-2 row-start-2 bg-black row-end-10 rounded-2xl">
					<DashboardCard stats={{ accuracy: 10, wrong: 10, correct: 10 }}>
						Flashcard
					</DashboardCard>
					<DashboardCard stats={{ accuracy: 10, wrong: 10, correct: 10 }}>
						Quiz
					</DashboardCard>
				</div>
				<div className="col-start-10 col-end-12 row-start-2 bg-slate-800 row-end-10 rounded-2xl place-items-center w-[120%]"></div>
			</div>
		</>
	);
};

export default Dashboard;
