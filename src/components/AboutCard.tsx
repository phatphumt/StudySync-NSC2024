import React from 'react';

interface Props {
	children: React.ReactNode;
	iconName: string;
	desc: string[];
}

const AboutCard = (props: Props) => {
	console.log(props.desc.length);
	return (
		<>
			<article className="flex flex-col items-center text-center">
				<h2 className="mb-5 text-3xl font-medium">{props.children}</h2>
				<span className="mb-4 material-symbols-outlined icons text-9xl">
					{props.iconName}
				</span>
				<div className=''>
					{props.desc.map((stuff, index) => {
						return (
							<aside>
								{stuff}
								{props.desc.length - 1 !== index && <br />}
							</aside>
						);
					})}
				</div>
			</article>
		</>
	);
};

export default AboutCard;
