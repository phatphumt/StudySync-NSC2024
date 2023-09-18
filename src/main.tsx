import React from 'react';
import ReactDOM from 'react-dom/client';
import Preloader from './components/Preloader.tsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import AuthProvider from './context/AuthContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<AuthProvider>
			<Preloader />
		</AuthProvider>
	</BrowserRouter>
);
