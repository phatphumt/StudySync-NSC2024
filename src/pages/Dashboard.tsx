import { Link } from 'react-router-dom';
import DashboardButton from '../components/DashboardButton';
import DashboardCard from '../components/DashboardCard';

const Dashboard = () => {
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
				<div className="col-start-10 col-end-12 row-start-2 row-end-10 rounded-2xl place-items-center w-[120%] grid grid-rows-3">
					<div className="flex w-[80%] row-span-2 h-[80%] rounded-xl bg-slate-800 justify-center flex-col items-center">
						<Link to="../timer">
							<button className="flex items-center justify-center mb-6 transition-all ease-linear bg-white rounded-full w-36 h-36 active:scale-95">
								<div className="translate-x-[0.5rem] arrow-right"></div>
							</button>
						</Link>
						<div className="items-center justify-center w-full text-center">
							<h1 className="mb-[1rem] text-3xl font-extrabold text-white">
								Start
							</h1>
							<input
								type="text"
								className="rounded-full w-[80%] text-indent py-[0.3rem]"
								placeholder="What should you do??"
							/>
						</div>
					</div>
					<div className="grid w-full h-full place-items-center">
						<DashboardButton iconName="sticky_note_2">
							Flashcard
						</DashboardButton>
						<DashboardButton iconName="quiz">Quiz</DashboardButton>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
