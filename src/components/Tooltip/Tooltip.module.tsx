import { FC, ReactNode } from 'react';

import styles from './Tooltip.module.css';

interface TooltipProps {
	classNameWrapper?: string;
	children: ReactNode;
	text: string;
}

export const Tooltip: FC<TooltipProps> = ({ classNameWrapper, children, text }) => {
	return (
		<div className={`${styles.wrapper} ${classNameWrapper}`}>
			{children}
			<div className={styles.tooltip}>
				<p className={styles.text}>{text}</p>
			</div>
		</div>
	);
};
