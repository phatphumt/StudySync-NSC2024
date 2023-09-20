import React, { useState } from 'react';
import useCountdown from '../hooks/useCountdown';
import TimerText from '../components/TimerText';

function CountdownComponent() {
	const { secondsLeft, start, stop, resume } = useCountdown(async () =>
		alert("time's up baby")
	);
	const [minutes, setMinutes] = useState(0);
	const [inputSeconds, setInputSeconds] = useState(0);

	const handleStartClick = () => {
		start(minutes, inputSeconds);
	};

	const handleStopClick = () => {
		stop();
	};

	const handleResumeClick = () => {
		resume();
	};

	return (
		<div className="container p-4 mx-auto">
			<h2 className="mb-4 text-2xl font-semibold">Countdown Timer</h2>
			<TimerText secondsLeft={secondsLeft}>Time: </TimerText>
			<div className="flex mb-4 space-x-2">
				<input
					className="w-16 px-2 py-1 border rounded"
					type="number"
					placeholder="Minutes"
					value={minutes}
					onChange={(e) => setMinutes(parseInt(e.target.value, 10))}
				/>
				<input
					className="w-16 px-2 py-1 border rounded"
					type="number"
					placeholder="Seconds"
					value={inputSeconds}
					onChange={(e) => setInputSeconds(parseInt(e.target.value, 10))}
				/>
			</div>
			<div className="space-x-2">
				<button
					className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
					onClick={handleStartClick}
				>
					Start
				</button>
				<button
					className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
					onClick={handleStopClick}
				>
					Stop
				</button>
				<button
					className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-700"
					onClick={handleResumeClick}
				>
					Resume
				</button>
			</div>
		</div>
	);
}

export default CountdownComponent;
