import React from 'react';

interface Props {
	secondsLeft: number;
	className?: string;
	children: React.ReactNode;
}

const TimerText = ({ secondsLeft, className, children }: Props) => {
	return (
		<>
			<span className={className}>
				{children}
				{Math.floor(secondsLeft / 60)}:
				{(secondsLeft % 60).toString().padStart(2, '0')}
			</span>
		</>
	);
};

export default TimerText;
