import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home.tsx';
import Dashboard from './pages/Dashboard.tsx';
import LoginPage from './pages/LoginPage.tsx'; 
import NavBar from './components/NavBar.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Router>
			<NavBar />
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
