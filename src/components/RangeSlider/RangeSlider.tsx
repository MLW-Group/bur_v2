import { useRouter } from 'next/router';
import { FC } from 'react';
import { Direction, Range, getTrackBackground } from 'react-range';

import styles from './RangeSlider.module.css';

interface RangeSliderProps {
	value: number;
	onChange: (value: number) => void;
	step: number;
	min: number;
	max: number;
	thumb?: boolean;
}

export const RangeSlider: FC<RangeSliderProps> = ({ value, onChange, step, min, max, thumb }) => {
	return (
		<Range
			values={[value]}
			step={step}
			min={min}
			max={max}
			onChange={(values) => onChange(values[0])}
			direction={Direction.Right}
			renderTrack={({ props, children }) => (
				<div onMouseDown={props.onMouseDown} onTouchStart={props.onTouchStart} className={styles.track}>
					<div
						ref={props.ref}
						className={styles.filler}
						style={{
							background: getTrackBackground({
								values: [value],
								colors: ['#FF5F1E', '#ccc'],
								min: min,
								max: max,
								direction: Direction.Right,
							}),
						}}
					>
						{children}
					</div>
				</div>
			)}
			renderThumb={({ props }) => (
				<div {...props} className={styles.thumb}>
					{thumb && <div className={styles.value}>{value.toLocaleString()}р.</div>}
				</div>
			)}
		/>
	);
};
