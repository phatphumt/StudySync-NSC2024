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
				<h2 className="text-3xl mb-5 font-medium">{props.children}</h2>
				<span className="material-symbols-outlined icons text-9xl mb-4">
					{props.iconName}
				</span>
				<div className=''>
					{props.desc.map((stuff, index) => {
						return (
							<>
								{stuff}
								{props.desc.length - 1 !== index && <br />}
							</>
						);
					})}
				</div>
			</article>
		</>
	);
};

export default AboutCard;
