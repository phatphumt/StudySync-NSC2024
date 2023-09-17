import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
	const authstuff = useAuth();
	const handleClick = () => {
		authstuff?.logout();
	};
	return (
		<>
			<h1>
				current user: {authstuff?.user && <p>{`${authstuff?.user.email}`}</p>}
			</h1>
			<button onClick={handleClick}>signout</button>
		</>
	);
};

export default Dashboard;
