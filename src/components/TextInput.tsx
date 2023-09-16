import React from 'react';

interface Props {
  children: React.ReactNode,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  name: string,
  type: string,
  className: string
	required: boolean
}

const TextInput = ({children, name, type, onChange, className, required}: Props) => {
	const stuffId = Math.random()
  return (
		<div>
			<input
				type={type}
				name={name}
				id={`stuff${stuffId}`}
				onChange={onChange}
				placeholder={children?.toString()}
				className={className}
				required={required}
			/>
		</div>
	);
}

export default TextInput;