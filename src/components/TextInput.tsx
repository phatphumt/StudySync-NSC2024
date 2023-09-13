import React from 'react';

interface Props {
  children: React.ReactNode,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  name: string,
  type: string,
  className: string
}

const TextInput = ({children, name, type, onChange, className}: Props) => {
	const stuffId = Math.random()
  return (
		<div>
			<input
				type={type}
				name={name}
				id={`stuff${stuffId}`}
				onChange={onChange}
				placeholder={children.toString()}
				className={className}
			/>
		</div>
	);
}

export default TextInput;