import { useRouter } from 'next/router';
import { FC, useContext, useState } from 'react';

import styles from './Calculator.module.css';
import { ElectricityIcon, HostingIcon, IncomeIcon, InfoSmallIcon, Money } from '@/app/icons';

import { Button } from '../Button/styled';
import { RangeSlider } from '../RangeSlider';
import { AppContext } from '@/context/app-context';
import { RadioFilter } from '../RadioFilter';
import { Checkbox, SizesCheckbox } from '../Checkbox';
import { Tooltip } from '../Tooltip';

interface CalculatorProps {}

export const Calculator: FC<CalculatorProps> = ({}) => {
	const [radio, setRadio] = useState({
		plastic: false,
		conductor: false,
		metall: false,
	});
	const [checked, setChecked] = useState(false);
	const { modal, setTypeModal } = useContext(AppContext);
	const [currentCost, setCurrentCost] = useState<number>(10);
	const [currency, setCurrency] = useState<string>('₽');
	const hostingCost = 1700;
	const price = currentCost * hostingCost;

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>Калькулятор цены скважины</div>
			<div className={styles.container}>
				<div className={styles.hostingAndSliders}>
					<div
						className={`${styles.head} ${styles.indicator} ${styles.hosting}`}
						style={{
							padding: '25px 15px !important',
						}}
					>
						<div className={styles.indicatorTitle}>
							<HostingIcon />
							<h3>Цена за метр скважины</h3>
						</div>
						<p>
							{hostingCost.toLocaleString('ru-RU', { useGrouping: true })}
							{` ` + currency}
						</p>
					</div>
					<div className={styles.sliders}>
						<div className={styles.slider}>
							<div className={styles.sliderHeader}>
								<p className={styles.sliderName}>Глубина скважины</p>
								<div className={styles.sliderValue}>
									<p>{currentCost.toLocaleString('ru-RU', { useGrouping: true })} Метров</p>
									<p>/</p>
									<p>
										{100}
										{' ' + 'Метров'}
									</p>
								</div>
							</div>
							<RangeSlider value={currentCost} onChange={setCurrentCost} step={1} min={1} max={100} />
						</div>
						<div className={styles.radioWrapper}>
							<RadioFilter
								isChecked={radio.plastic}
								onChange={() => setRadio({ plastic: true, conductor: false, metall: false })}
								label="Пластиковая
основа"
								toolTipText="123"
							/>
							<RadioFilter
								isChecked={radio.conductor}
								onChange={() => setRadio({ plastic: false, conductor: true, metall: false })}
								label="Труба
кондукторная"
								toolTipText="123"
							/>
							<RadioFilter
								isChecked={radio.metall}
								onChange={() => setRadio({ plastic: false, conductor: false, metall: true })}
								label="Металлическая
труба"
								toolTipText="123"
							/>
						</div>
					</div>
				</div>
				<div className={styles.indicatorsContainer}>
					<div className={`${styles.indicator} ${styles.head}`}>
						<div className={styles.indicatorTitle}>
							<IncomeIcon />
							<h3>Бурение</h3>
						</div>
						<p>
							{price.toLocaleString('ru-RU', { useGrouping: true })} {' ' + currency}
						</p>
					</div>
					<div className={styles.indicator}>
						<div className={styles.indicatorTitle}>
							<ElectricityIcon />
							<h3>Труба</h3>
						</div>
						<p>20 000 {currency}</p>
					</div>

					<div className={styles.indicator}>
						<div className={styles.indicatorTitle}>
							<Money />
							<h3>В кредит</h3>
						</div>
						<Checkbox size={SizesCheckbox.L} isChecked={checked} onChange={() => setChecked(!checked)} />
					</div>
				</div>
				<div className={styles.mobileIndicatorsContainer}>
					<div className={`${styles.head} ${styles.indicator}`}>
						<div className={styles.indicatorTitle}>
							<HostingIcon />
							<h3>Цена за метр скважины</h3>
						</div>
						<p>
							{hostingCost.toLocaleString('ru-RU', { useGrouping: true })} {currency}
						</p>
					</div>
					<div className={`${styles.indicator} ${styles.head}`}>
						<div className={styles.indicatorTitle}>
							<IncomeIcon />
							<h3>Бурение</h3>
						</div>
						<p>
							{price.toLocaleString('ru-RU', { useGrouping: true })} {' ' + currency}
						</p>
					</div>
					<div className={styles.indicator}>
						<div className={styles.indicatorTitle}>
							<ElectricityIcon />
							<h3>Труба</h3>
						</div>
						<p>20 000 {currency}</p>
					</div>
					<div className={styles.indicator}>
						<div className={styles.indicatorTitle}>
							<Money />
							<h3>В кредит</h3>
						</div>
						<Checkbox size={SizesCheckbox.S} isChecked={checked} onChange={() => setChecked(!checked)} />
					</div>
				</div>
				<div className={styles.value}>
					<h3>Ожидаемая прибыль</h3>
					<p>
						{price.toLocaleString('ru-RU', { useGrouping: true })} {' ' + currency}
					</p>
					<p>
						{' '}
						{price.toLocaleString('ru-RU', { useGrouping: true })} {' ' + currency}
					</p>
				</div>
			</div>
			<p className={styles.info}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio deleniti rerum voluptate reiciendis
			</p>

			<div className={styles.buttons}>
				<Button
					$background="orange"
					$mix="10x10"
					$color="white"
					$size="24"
					onClick={() => {
						setTypeModal('modalPhoneCalculator');
						modal.setOpenModal(true);
					}}
				>
					Начать зарабатывать
				</Button>
			</div>
		</div>
	);
};
