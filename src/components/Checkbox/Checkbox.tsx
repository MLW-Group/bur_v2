import { FC } from 'react';
import Link from 'next/link';

import styles from './Checkbox.module.css';

export enum SizesCheckbox {
	S = 'S',
	L = 'L',
}

interface CheckboxProps {
	size?: SizesCheckbox;
	label?: string;
	labelHref?: string;
	labelTextHref?: string;
	isChecked?: boolean;
	onChange?: () => void;
	colorCheckbox?: string;
	defailtColored?: boolean;
	solid?: boolean;
	customColor?: string;
	labelAction?: (e: React.SyntheticEvent<HTMLSpanElement>) => void;
}

const sizeCheckbox = (size?: string) => {
	switch (size) {
		case SizesCheckbox.S: {
			return styles.checkboxWrapperS;
		}
		case SizesCheckbox.L: {
			return styles.checkboxWrapperL;
		}
		default: {
			return styles.checkboxWrapperL;
		}
	}
};

export const Checkbox: FC<CheckboxProps> = ({
	label,
	size,
	labelHref,
	labelTextHref,
	isChecked,
	onChange,
	colorCheckbox = '#FF5F1E',
	defailtColored,
	customColor,
	labelAction,
	solid,
}) => {
	return (
		<label className={`${styles.checkboxWrapper} ${sizeCheckbox(size)}`}>
			<input type="checkbox" className={styles.inputCheckbox} onChange={onChange} />
			<svg
				className={styles.checkbox}
				style={{
					border: `2px solid ${
						isChecked ? colorCheckbox : defailtColored ? colorCheckbox : customColor ? customColor : '#eaf0f4'
					}`,
					background: solid ? colorCheckbox : 'transparent',
				}}
				aria-hidden="true"
				viewBox="0 0 15 11"
				fill="none"
			>
				<path
					d="M1 4.5L5 9L14 1"
					strokeWidth="2"
					stroke={isChecked ? colorCheckbox : 'transparent'}
					className={styles.vector}
				/>
			</svg>
			<p>
				{label}{' '}
				{labelAction ? (
					<span className={styles.link} onClick={labelAction}>
						{labelTextHref}
					</span>
				) : (
					labelTextHref &&
					labelHref && (
						<Link href={labelHref} className={styles.link}>
							{labelTextHref}
						</Link>
					)
				)}
			</p>
		</label>
	);
};
