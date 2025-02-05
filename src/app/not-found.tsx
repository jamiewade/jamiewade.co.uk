import React from 'react';
import type { Metadata } from 'next';

import NotFoundContent from '@/components/NotFoundContent';

export const metadata: Metadata = {
	title: 'Page Not Found | Jamie Wade - Software Engineer',
};

export default function NotFound(): React.JSX.Element {
	return (
		<>
			<NotFoundContent />
		</>
	);
}
