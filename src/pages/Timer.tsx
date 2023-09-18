import React from 'react';
import useCountdown from '../hooks/useCountdown';

const Timer = () => {
	const { secondsLeft, start } = useCountdown();

	return (
		<div className="flex flex-col items-center justify-center">
			<h1 className="text-5xl font-bold">{secondsLeft}</h1>
			<button onClick={() => start(100)}>start</button>
		</div>
	);
};

export default Timer;
