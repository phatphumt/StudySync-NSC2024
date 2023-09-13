import TextInput from '../components/TextInput';
import { useState } from 'react';
import { signUpForm } from '../configs/stuff';
//import { UserCredential, signInWithEmailAndPassword } from 'firebase/auth';

/* interface User {
	email: string;
	password: string;
} */

const SignUpPage = () => {
	const [signing, setSigning] = useState(false);
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
    confirmPassword: ''
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
    if (credentials.password !== credentials.confirmPassword) {
      return;
    }
		setSigning((prev) => !prev);
	};
  
	return (
		<>
			<main className="flex flex-col items-center justify-center text-center h--full--nav">
				<h1 className="mb-8 text-5xl">Sign up</h1>
				<form className="flex flex-col items-center gap-5">
					{signUpForm.map((stuff) => {
						return (
							<TextInput
								onChange={handleChange}
								name={stuff.name}
								type={stuff.type}
								className="px-1 py-3 text-xl rounded-lg input--style"
							>
								{stuff.text}
							</TextInput>
						);
					})}
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

export default SignUpPage;
