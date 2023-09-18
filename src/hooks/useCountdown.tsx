import { useEffect, useState } from 'react';

const useCountdown = () => {
	const [secondsLeft, setSecondsLeft] = useState(0);
	useEffect(() => {
		if (secondsLeft <= 0) return;

		const timeout = setTimeout(() => {
			setSecondsLeft((prev) => prev - 1);
		}, 1000);

		return () => clearTimeout(timeout);
	}, [secondsLeft]);

	const start = (seconds: number) => {
		setSecondsLeft(seconds);
	};

	return { secondsLeft, start };
};

export default useCountdown;
