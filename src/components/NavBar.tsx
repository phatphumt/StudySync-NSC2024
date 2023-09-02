import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<Nav className="navbar navbar-expand-lg bg-body-tertiary navbg d-flex flex-row justify-content-evenly align-items-center">
			<Nav.Link className="navbar-brand">
				<Link to="/">
					<strong>StudySync</strong>
				</Link>
			</Nav.Link>
			<div className="d-flex gap-1">
				<Nav.Link>
					<Link to="/about">Dashboard</Link>
				</Nav.Link>
				<Nav.Item>
					<Link to="/login">
						<Button
							variant="success"
							className="d-flex flex-row justify-content-center align-items-center gap-1"
						>
							<span>Login</span>
							<span className="material-symbols-outlined">login</span>
						</Button>
					</Link>
				</Nav.Item>
			</div>
		</Nav>
	);
};

export default NavBar;
