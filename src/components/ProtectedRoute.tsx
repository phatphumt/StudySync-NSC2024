import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

interface Props {
	children: React.ReactNode;
	altPath: string;
}

const ProtectedRoute = ({ children, altPath }: Props) => {
	const auth = useAuth();
	if (!auth?.user) {
		return <Navigate to={altPath} />;
	}
	return children;
};

export default ProtectedRoute;
