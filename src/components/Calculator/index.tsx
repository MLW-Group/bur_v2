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
import { Cities } from '@/dummy/cities';

interface CalculatorProps {}

export const Calculator: FC<CalculatorProps> = ({}) => {
	const { slug, paramsModal } = useContext(AppContext);

	const getRegion = Cities.find((el) => el.url === slug)?.region;
	const getPriceRegion = getRegion == 'ekb' ? 1400 : 1700;
	const [radio, setRadio] = useState('plastic');
	const [checked, setChecked] = useState(false);
	const { modal, setTypeModal, setParamsModal } = useContext(AppContext);
	const [currentCost, setCurrentCost] = useState<number>(20);
	const currency = '₽';
	const price = currentCost * getPriceRegion;

	const pipeOpt =
		getRegion == 'ekb'
			? {
					plastic: 800,
					conductor: 1000,
					metall: 2700,
			  }
			: {
					plastic: 600,
					conductor: 1000,
					metall: 1600,
			  };
	const pipeCost = pipeOpt[radio] * currentCost - 4;

	const wellOptions = {
		regionName: getRegion,
		wellLength: currentCost,
		pipeType: radio,
		pipeLength: currentCost - 4,
		creditStatus: checked,
		finalPrice: price + pipeCost,
	};

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
							{getPriceRegion.toLocaleString('ru-RU', { useGrouping: true })}
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
										{150}
										{' ' + 'Метров'}
									</p>
								</div>
							</div>
							<RangeSlider value={currentCost} onChange={setCurrentCost} step={1} min={10} max={150} />
						</div>
						<div className={styles.radioWrapper}>
							<RadioFilter
								isChecked={radio == 'plastic'}
								onChange={() => setRadio('plastic')}
								label="Пластиковая основа"
								toolTipText="Этот материал обладает наиболее высокими эксплуатационными характеристиками. Он имеет самые высокие физико-механические показатели среди полимеров. на практике доказано, что трубы из НПВХ не подвержены коррозии на протяжении 50 лет. Теоретически они могут прослужить в 6 раз дольше. Первичное сырье для изготовления труб преимущественно состоит из пищевых смол, к которым добавляют мел и винил."
							/>
							<RadioFilter
								isChecked={radio == 'conductor'}
								onChange={() => setRadio('conductor')}
								label="Труба кондукторная"
								toolTipText="Используется для контроля и перераспределения давления. Высокое давление в глубине скважины может привести к несанкционированному выбросу грунта или воды. Труба-кондуктор помогает контролировать и регулировать этот поток, предотвращая возможные аварии и сохраняя окружающую среду."
							/>
							<RadioFilter
								isChecked={radio == 'metall'}
								onChange={() => setRadio('metall')}
								label="Металлическая труба"
								toolTipText="Монтируется из отдельных элементов. При монтаже используются резьбовые соединения. Места стыков получаются полностью герметичными.Средняя скорость разрушения колонны: 1 мм стенки за 10 лет. Сквозная коррозия может появиться уже через 25-40 лет после бурения. Но срок службы артезианских источников достигает 50-60 лет."
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
							<h3>Обсадная труба для скважины</h3>
						</div>
						<p>
							{pipeCost.toLocaleString('ru-RU', { useGrouping: true })} {currency}
						</p>
					</div>

					<div className={styles.indicator}>
						<div className={styles.indicatorTitle}>
							<Money />
							<h3>В кредит (Тинькофф, T-Банк)</h3>
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
							{getPriceRegion.toLocaleString('ru-RU', { useGrouping: true })} {currency}
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
							<h3>Обсадная труба для скважины</h3>
						</div>
						<p>20 000 {currency}</p>
					</div>
					<div className={styles.indicator}>
						<div className={styles.indicatorTitle}>
							<Money />
							<h3>В кредит (Тинькофф, T-Банк)</h3>
						</div>
						<Checkbox size={SizesCheckbox.S} isChecked={checked} onChange={() => setChecked(!checked)} />
					</div>
				</div>
				<div className={styles.value}>
					<h3>Приблизительная стоимость</h3>
					<div>
						<p>
							{(price + 3000 + pipeCost).toLocaleString('ru-RU', { useGrouping: true })} {' ' + currency}
						</p>
						<p>
							{' '}
							{(price + pipeCost).toLocaleString('ru-RU', { useGrouping: true })} {' ' + currency}
						</p>
					</div>
				</div>
			</div>
			<p className={styles.info}>
				Основание скважины не ставится до дна скважины поэтому считается по факту использования , зависит от грунтов у
				вас на участке
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
						setParamsModal(wellOptions);
					}}
				>
					Заказать скважину
				</Button>
			</div>
		</div>
	);
};
