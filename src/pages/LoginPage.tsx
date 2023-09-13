import TextInput from '../components/TextInput';
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
	};

	return (
		<>
			<main className="h--full--nav text-center flex justify-center items-center flex-col">
				<h1 className="text-5xl mb-8">Login</h1>
				<form className="flex flex-col items-center gap-5">
					<TextInput onChange={handleChange} name="email" type="email" className="text-2xl rounded-lg input--style py-4 px-1">
						Email
					</TextInput>
					<TextInput onChange={handleChange} name="password" type="password" className='text-2xl rounded-lg input--style py-4 px-1'>
						Password
					</TextInput>
					<button
						className={!signing ? 'signin--btn' : 'signin--btn signining'}
						disabled={signing}
						onClick={handleClick}
					>
						ลงชื่อเข้าใช้
					</button>
				</form>
			</main>
		</>
	);
};

export default LoginPage;
