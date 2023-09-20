import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const NavBar = () => {
	const authstuff = useAuth();
	return (
		<nav className="flex flex-col p-3 font-semibold justify-evenly bg-main xs:flex-row xs:items-center">
			<div className="mb-1 text-2xl font-bold xs:m-0">
				<Link to="/">StudySync</Link>
			</div>
			<section className="flex flex-col gap-1 mt-1 text-sm xs:flex-row xs:items-center xs:gap-5 xs:mt-0">
				<div>
					<Link to="/dashboard">Dashboard</Link>
				</div>
				<div className="">
					{!authstuff?.user ? (
						<Link to="/login">
							<button className="flex items-center gap-1 px-0 py-0 transition-all duration-200 bg-transparent xs:px-4 xs:py-2 xs:bg-darker rounded-2xl hover:shadow-lg active:scale-90">
								<span>Login</span>
								<span className="hidden p-0 text-base material-symbols-outlined xs:block">
									login
								</span>
							</button>
						</Link>
					) : (
						<>{authstuff.user.email}</>
					)}
				</div>
			</section>
		</nav>
	);
};

export default NavBar;
