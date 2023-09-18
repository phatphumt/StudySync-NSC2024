import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
	const authstuff = useAuth();
	return (
		<>
			<div className="grid grid-cols-12 grid-rows-12 h--full--nav place-items-">
				<div className="grid grid-cols-3 col-start-2 col-end-9 grid-rows-2 row-start-2 bg-black row-end-10 rounded-2xl">
					<div
						className="flex items-center justify-center col-span-2"
						onClick={() => authstuff?.logout()}
					>
						<div className="w-[60%] bg-gray-600 rounded-lg h-[65%]"></div>
					</div>
					<div className="flex items-center justify-center col-span-2">
						<div className="w-[60%] bg-gray-600 rounded-lg h-[65%]"></div>
					</div>
				</div>
				<div className="flex items-center justify-center row-span-2">
					<div className="w-[60%] bg-gray-600 rounded-lg h-[65%]"></div>
				</div>
				<div className="col-start-10 col-end-12 row-start-2 bg-slate-800 row-end-10 rounded-2xl place-items-center w-[120%]"></div>
			</div>
		</>
	);
};

export default Dashboard;
