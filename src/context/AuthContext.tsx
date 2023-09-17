/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	User,
	UserCredential,
} from 'firebase/auth';
import { auth } from '../configs/firebase';

const AuthProvider = createContext<
	| {
			createUser: (email: string, password: string) => Promise<UserCredential>;
			user: User | null | undefined;
			logout: () => Promise<void>;
			login: (email: string, password: string) => Promise<UserCredential>;
	  }
	| undefined
>(undefined);

interface Props {
	children: React.ReactNode;
}

const AuthContextProvider = ({ children }: Props) => {
	const [user, setUser] = useState<User | null>();

	const createUser = (email: string, password: string) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const login = (email: string, password: string) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logout = () => {
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			console.log(currentUser);
			setUser(currentUser);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<AuthProvider.Provider value={{ createUser, user, logout, login }}>
			{children}
		</AuthProvider.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthProvider);
};

export default AuthContextProvider;
