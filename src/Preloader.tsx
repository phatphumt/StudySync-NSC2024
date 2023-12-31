import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Home from './pages/Home';
import { useAuth } from './context/AuthContext';
import NavBar from './components/NavBar';
import Timer from './pages/TimerPage';

const Preloader = () => {
	const authstuff = useAuth();

	return (
		<>
			{!authstuff?.isLoading ? (
				<div className="overflow-x-hidden transition-all">
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/dashboard"
							element={
								<ProtectedRoute altPath="/login">
									<Dashboard />
								</ProtectedRoute>
							}
						/>
						<Route path="/login" element={<LoginPage />} />
						<Route path="/signup" element={<SignUpPage />} />
						<Route path="/timer" element={<Timer />} />
					</Routes>
				</div>
			) : (
				<div className="grid h-screen place-items-center">
					<div className="loader" />
				</div>
			)}
		</>
	);
};

export default Preloader;
