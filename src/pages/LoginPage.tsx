import TextInput from '../components/TextInput';
import { useState } from 'react';
import { signInForm } from '../configs/stuff';
/* import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../configs/firebase';
import { Link, redirect } from 'react-router-dom';
 */

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

	const handleClick = async () => {
		console.log(credentials);
		setSigning((prev) => !prev);
/* 		signInWithEmailAndPassword(auth, user.email, user.password)
			.then((stuff) => {
				redirect('/dashboard')
			})
			.catch((error) => {
				console.log(error.code)
				console.log(error.message)
			}); */

	};

	return (
		<>
			<main className="flex flex-col items-center justify-center text-center h--full--nav">
				<h1 className="mb-8 text-5xl">Login</h1>
				<form className="flex flex-col items-center gap-5">
					{signInForm.map((stuff) => {
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
					{/* <Link to="/signup">Sign up here!</Link> */}
					<button
						className={!signing ? 'signin--btn' : 'signin--btn signining'}
						disabled={signing}
						onClick={() => handleClick()}
					>
						ลงชื่อเข้าใช้
					</button>
				</form>
			</main>
		</>
	);
};

export default LoginPage;
