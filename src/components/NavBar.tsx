import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className="flex items-center p-3 font-bold justify-evenly bg-main">
			<div className="text-2xl font-bold">
				<Link to="/">StudySync</Link>
			</div>
			<section className="flex items-center gap-5 text-sm">
				<div>
					<Link to="/dashboard">Dashboard</Link>
				</div>
				<div className="">
					<Link to="/login">
						<button className="flex items-center gap-1 px-4 py-2 transition-all duration-200 bg-darker rounded-2xl hover:shadow-lg active:scale-90">
							<span>Login</span>
							<span className="p-0 text-base material-symbols-outlined">login</span>
						</button>
					</Link>
				</div>
			</section>
		</nav>
	);
};

export default NavBar;
