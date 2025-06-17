import { ReactNode } from 'react';

export default function LayoutAdmin({ children }: { children: ReactNode }) {
	return (
		<div
			style={{
				width: '100wv',
				minHeight: '100vh',
				background:
					'linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), url(/img/grid.png), black 50% / cover no-repeat',
			}}
		>
			{children}
		</div>
	);
}
