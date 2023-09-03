import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home.tsx';
import About from './pages/Dashboard.tsx';
import LoginPage from './pages/LoginPage.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.sass';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/about" element={<About />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
