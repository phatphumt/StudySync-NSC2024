import TextInput from '../components/TextInput';
import { useState } from 'react';
import { signUpForm } from '../configs/stuff';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
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
		if (credentials.password !== credentials.confirmPassword) {
			setLoading(false);
			return setError('Password does not match');
		}
		authstuff
			?.createUser(credentials.email, credentials.password)
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
				<h1 className="mb-8 text-5xl">Sign up</h1>
				<form
					className="flex flex-col items-center gap-5"
					onSubmit={handleSubmit}
				>
					{signUpForm.map(({ name, type, text }, i) => {
						return (
							<TextInput
								onChange={handleChange}
								name={name}
								type={type}
								className="px-1 py-2 text-base rounded-lg input--style"
								required={true}
								key={i}
							>
								{text}
							</TextInput>
						);
					})}
					{error && <p className="font-medium text-red-600">{error}</p>}
					<button
						className={
							loading ? 'signin--btn opacity-80 cursor-wait' : 'signin--btn'
						}
						disabled={loading}
						onClick={() => console.log('clicked')}
					>
						ลงชื่อเข้าใช้
					</button>
				</form>
			</main>
		</>
	);
};

export default SignUpPage;
