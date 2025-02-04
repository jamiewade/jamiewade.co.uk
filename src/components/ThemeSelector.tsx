'use client';

import React from 'react';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';

export default function ThemeSelector(): React.JSX.Element {
	return (
		<ul className={'absolute top-4 right-4 flex text-xl'}>
			<li>
				<button className={'block p-2'}>
					<RiSunLine />
				</button>
			</li>

			<li>
				<button className={'block p-2'}>
					<RiMoonLine />
				</button>
			</li>
		</ul>
	);
}
