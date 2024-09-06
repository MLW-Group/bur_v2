import { FC } from 'react';

import styles from './RadioFilter.module.css';
import { Tooltip } from '../Tooltip';
import { InfoSmallIcon } from '@/app/icons';

interface RadioFilterProps {
	isChecked: boolean;
	onChange: () => void;
	label?: string;
	toolTipText?: string;
}

export const RadioFilter: FC<RadioFilterProps> = ({ isChecked, onChange, label, toolTipText }) => {
	return (
		<div className={styles.radioFilter} onClick={onChange}>
			<div className={`${styles.radio} ${isChecked ? styles.radioActive : ''}`}>
				<div className={`${styles.checker} ${isChecked ? styles.checkerActive : ''}`}></div>
			</div>
			<div className={styles.row}>
				<p className={`${styles.label} ${isChecked ? styles.labelActive : ''}`}>{label && label}</p>
				<div className={styles.tooltip}>
					{toolTipText && (
						<Tooltip text={toolTipText}>
							<InfoSmallIcon />
						</Tooltip>
					)}
				</div>
			</div>
		</div>
	);
};
