import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home.tsx';
import Dashboard from './pages/Dashboard.tsx';
import LoginPage from './pages/LoginPage.tsx';
import NavBar from './components/NavBar.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import SignUpPage from './pages/SignUpPage.tsx';
import AuthProvider from './context/AuthContext.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Router>
			<AuthProvider>
				<NavBar />
				<Routes>
					<Route path="/" element={<App />} />
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
				</Routes>
			</AuthProvider>
		</Router>
	</React.StrictMode>
);
