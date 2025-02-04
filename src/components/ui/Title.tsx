import React from 'react';

type TitleProps = {
	text: string;
};

export default function Title({ text }: TitleProps): React.JSX.Element {
	return (
		<h1
			className={
				'mb-4 font-extrabold text-4xl tracking-tighter 2xs:mb-5 2xs:text-5xl xs:text-6xl sm:text-7xl md:mb-6 md:text-8xl'
			}
		>
			{text}
			<span className={'text-emerald-500'}>.</span>
		</h1>
	);
}
