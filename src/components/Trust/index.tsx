import { TrustContainer, TrustHeader, TrustSubTitle, TrustWrapper, TrustBlock } from './styled';
import { useContext, useState } from 'react';
import Image from 'next/image';
import { Text } from '../Text/styled';
import Subtract from '@svg/Subtract.svg';
import { Button } from '../Button/styled';
import img from '@img/1.png';
import img1 from '@img/2.png';
import img2 from '@img/3.png';
import img3 from '@img/4.png';
import img4 from '@img/5.png';
import img5 from '@img/6.png';
import { Circle } from '../Circle/styled';
import { Block } from '../Block/styled';
import { AppContext } from '@/context/app-context';
export function Trust() {
	// @ts-ignore
	const { width, setOpenInvite, setTypeModal } = useContext(AppContext);

	const dummy = [
		{
			name: 'г. Екатеринбург, объездная АД',
			image: img,
		},
		{
			name: 'пос. Федоровка, Челябинская обл',
			image: img1,
		},
		{
			name: 'г. Березовский, Свердловская обл.',
			image: img2,
		},
		{
			name: 'г. Челябинск, ул. Университетская набережная',
			image: img3,
		},
		{
			name: 'пос. Еткуль, Челябинская обл.',
			image: img4,
		},
		{
			name: 'г. Челябинск, Комсомольский проспект',
			image: img5,
		},
	];
	return (
		<TrustContainer>
			<TrustHeader>
				<Text $size="40" $color="orange" $fontWeight="XXL" $transform="upper">
					Нам доверяют
				</Text>
			</TrustHeader>
			<TrustSubTitle>
				<Text
					$size="M"
					$maxWidth={width && width < 1030 ? '100%' : '60%'}
					$color="white"
					$fontWeight="small"
					$fontFamily="open"
					$textAlign="center"
				>
					ГК «Магнезит» г. Сатка, АО «Карабашский медеплавильный комбинат» г. Карабаш, ГРЭС Березовский Свердловская
					область, Завод бетоносмесительного оборудования г. Златоуст , Завод «Иристон» г. Златоуст, Магнитогорский
					Металлургический Комбинат и многие другие.
				</Text>
			</TrustSubTitle>
			<TrustWrapper>
				{dummy.map((el) => (
					<TrustBlock
						style={{
							width: width && width < 530 ? '100%' : 420,
						}}
					>
						<Image
							src={el.image}
							alt="img"
							// width={400}
							width={width && width < 530 ? 320 : 400}
							height={250}
							style={{
								borderRadius: 5,
							}}
							objectFit="contain"
						/>
						<Text
							$size={width && width < 530 ? 'XS' : 'M'}
							$whiteSpace={'nowrap'}
							$color="white"
							$fontWeight="XXL"
							$transform="upper"
						>
							{el.name}
						</Text>
					</TrustBlock>
				))}
			</TrustWrapper>
			<Button
				// $mix={'21x45'}
				$mix={width && width < 480 ? '17x20' : '21x45'}
				$size="L"
				$fontWeight="XXL"
				$background="orange"
				$color="white"
				$transform="upper"
				onClick={() => {
					setTypeModal('modalPhone3');
					setOpenInvite(true);
				}}
			>
				{/* @ts-ignore */}
				<Text $size="L" $whiteSpace="nowrap">
					Приглашаем к сотрудничеству
				</Text>
			</Button>
		</TrustContainer>
	);
}
