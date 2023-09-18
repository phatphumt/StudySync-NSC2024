import TextInput from '../components/TextInput';
import { useState } from 'react';
import { signInForm } from '../configs/stuff';
import 'dotenv';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const authstuff = useAuth();
	const navigate = useNavigate();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCredentials((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			};
		});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setError('');
		setLoading(true);
		authstuff
			?.login(credentials.email, credentials.password)
			.then(() => {
				setLoading(!true);
				navigate('/dashboard');
			})
			.catch((err) => {
				setError(`${err}`);
				setLoading(!true);
			});
	};

	return (
		<>
			<main className="flex flex-col items-center justify-center text-center h--full--nav">
				<h1 className="mb-8 text-5xl">Login</h1>
				<form
					className="flex flex-col items-center gap-5"
					onSubmit={handleSubmit}
				>
					{signInForm.map((stuff) => {
						return (
							<TextInput
								onChange={handleChange}
								name={stuff.name}
								type={stuff.type}
								className="px-1 py-2 text-base rounded-lg input--style"
								required={true}
							>
								{stuff.text}
							</TextInput>
						);
					})}
					<Link to="/signup">Sign up here!</Link>
					{error && <p className="font-medium text-red-600">{error}</p>}
					<button
						className={
							loading ? 'signin--btn opacity-80 cursor-wait' : 'signin--btn'
						}
						disabled={loading}
					>
						ลงชื่อเข้าใช้
					</button>
				</form>
			</main>
		</>
	);
};

export default LoginPage;
