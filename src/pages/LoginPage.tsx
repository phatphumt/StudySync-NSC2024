import TextInput from '../components/TextInput';
import { Button } from 'react-bootstrap';
import '../styles/LoginPage.sass';
import { useState } from 'react';
//import { UserCredential, signInWithEmailAndPassword } from 'firebase/auth';

/* interface User {
	email: string;
	password: string;
} */

const LoginPage = () => {
	const [signing, setSigning] = useState(false);
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCredentials((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			};
		});
	};

	const handleClick = () => {
		console.log(credentials);
		setSigning((prev) => !prev);
		/* signIn(credentials); */
	};

/* 	const signIn = (user: User) => {
		signInWithEmailAndPassword(auth, user.email, user.password)
			.then((userCredential: UserCredential) => {
        console.log(userCredential)
			})
			.catch((error) => {
        console.log(error)
			});
	};
 */
	return (
		<>
			<main>
				<h1>Login</h1>
				<form>
					<TextInput onChange={handleChange} name="email" type="email">
						Email
					</TextInput>
					<TextInput onChange={handleChange} name="password" type="password">
						Password
					</TextInput>
					<Button
						variant="secondary"
						className={!signing ? 'signin--btn' : 'signin--btn signining'}
						disabled={signing}
						onClick={handleClick}
					>
						ลงชื่อเข้าใช้
					</Button>
				</form>
			</main>
		</>
	);
};

export default LoginPage;
