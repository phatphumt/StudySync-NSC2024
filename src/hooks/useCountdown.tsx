import { useEffect, useState } from 'react';

interface CountdownHook {
	secondsLeft: number;
	start: (minutes: number, seconds: number) => void;
	stop: () => void;
	resume: () => void;
	onTimesUp?: () => void; // Callback function for when time is up
}

const useCountdown = (onTimesUp: () => void): CountdownHook => {
	const [secondsLeft, setSecondsLeft] = useState(0);
	const [paused, setPaused] = useState(false);
	const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (secondsLeft <= 0 || paused) {
			if (intervalId) {
				clearInterval(intervalId);
				setIntervalId(null);
				if (secondsLeft <= 0) {
					onTimesUp(); // Call the callback function when time is up
				}
			}
			return;
		}

		if (!intervalId) {
			const newIntervalId = setInterval(() => {
				setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
			}, 1000);
			setIntervalId(newIntervalId);
		}

		return () => {
			if (intervalId) {
				clearInterval(intervalId);
				setIntervalId(null);
			}
		};
	}, [secondsLeft, paused, intervalId, onTimesUp]);

	const start = (minutes: number, seconds: number) => {
		setPaused(false);
		setSecondsLeft(minutes * 60 + seconds);
	};

	const stop = () => {
		setPaused(true);
	};

	const resume = () => {
		setPaused(false);
	};

	return { secondsLeft, start, stop, resume };
};

export default useCountdown;
