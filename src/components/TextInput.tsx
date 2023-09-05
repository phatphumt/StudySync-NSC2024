import React from 'react';

interface Props {
  children: React.ReactNode,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  name: string,
  type: string
}

const TextInput = (props: Props) => {
	const stuffId = Math.random()
  return (
		<div className="">
			<label htmlFor={`stuff${stuffId}`} className="">
				{props.children}
			</label>
			<input
				type={props.type}
				name={props.name}
				className="form-control"
				id={`stuff${stuffId}`}
				onChange={props.onChange}
			/>
		</div>
	);
}

export default TextInput;