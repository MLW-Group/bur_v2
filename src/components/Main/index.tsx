import { MainContainer, BlockTitle, BlockCenter, BlockBottom, BlockRight, BlockBot, BlockAbsolute } from './styled';
import Image from 'next/image';
import Subtract from '@svg/Subtract.svg';
import Bur from '@img/bur.png';
import { Block } from '../Block/styled';
import { Text } from '../Text/styled';
import { Circle } from '../Circle/styled';
import { Button } from '../Button/styled';
import { useContext, useState } from 'react';
import { AppContext } from '@/context/app-context';
import { BannerSlugTitle } from '@/dummy/bannerSlug';
import { H1 } from '../H1/styled';
export function Main() {
	// @ts-ignore
	const { width, modal, slug, setTypeModal } = useContext(AppContext);
	const title = BannerSlugTitle.filter((el) => el.name === slug)[0].title;
	return (
		<MainContainer id="main">
			<BlockTitle>
				<BlockCenter>
					<Block $justifyContent="center" $flexDirection="col">
						{/* <Text
              $size={width && width < 650 ? "70" : "biggest"}
              $color="white"
              $fontFamily="oswald"
              $transform="upper"
              $fontWeight="XXL"
              $textAlign="center"
            >
              <span>бурение</span>
            </Text>

            <Text
              $size={width && width < 650 ? "XXL" : "medium"}
              $color="white"
              $fontFamily="oswald"
              $transform="upper"
              $fontWeight="small"
              $textAlign="center"
            >
              скважин на воду
            </Text>
            <Text
              $size={width && width < 650 ? "40" : "lg"}
              $color="orange"
              $fontFamily="oswald"
              $transform="upper"
              $fontWeight="XXL"
              $textAlign="center"
            >
              <span>{title}</span>
            </Text> */}
						<H1
							$size={width && width < 650 ? 'XXL' : 'medium'}
							$textAlign="center"
							$fontWeight="small"
							$transform="upper"
							style={{
								display: 'flex',
								flexDirection: 'column',
								color: 'white',
							}}
						>
							<span
								style={{
									fontSize: width && width < 650 ? 70 : 130,
									textTransform: 'uppercase',
									fontWeight: '700',
								}}
							>
								Бурение
							</span>
							скважин на воду
							<span
								style={{
									color: '#FF5F1E',
									fontWeight: '700',
									fontSize: width && width < 650 ? 30 : 75,
								}}
							>
								{title}
							</span>
						</H1>
					</Block>
				</BlockCenter>
			</BlockTitle>
			<BlockBot>
				<BlockBottom>
					<Block>
						<Image src={Subtract} alt="Subtract" />
						<Circle $width="L" $height="L" $background="orange">
							<Image alt="Bur" src={Bur} width="50" height="50" />
						</Circle>
					</Block>
					{/* @ts-ignore */}
					<Block $gap="S" $flexDirection={width < 650 && 'col'}>
						<Text $size="L" $color="white" $transform="upper" $fontWeight="M" $fontFamily="open">
							Работем с
						</Text>
						<Text $size="80" $color="white" $mix="0x10" $fontWeight="XXL">
							2010
						</Text>
						<Text $size="L" $color="white" $transform="upper" $fontWeight="M" $fontFamily="open">
							года
						</Text>
					</Block>
				</BlockBottom>
				<BlockRight>
					<Block $flexDirection="col" $justifyContent="center">
						<Text $size="S" $fontFamily="open" $color="gray" $lineHeight="L" $textAlign="center">
							Строгое соблюдение технологии бурения скважин на воду в Челябинской области и в Свердловской области.
							Высокое качество и соблюдения сроков выполнения работ по при бурение скважин на воду под ключ.
						</Text>
						<BlockAbsolute>
							<Button
								$background="orange"
								$mix={width && width < 480 ? '17x20' : '17x52'}
								$color="white"
								$size={width && width < 480 ? 'XS' : 'L'}
								$transform="upper"
								$fontWeight="XL"
								onClick={() => {
									setTypeModal('modalPhone1');
									modal.setOpenModal(true);
								}}
							>
								{/* @ts-ignore */}
								<Text $size="L" $whiteSpace="nowrap">
									Рассчитать стоимость
								</Text>
							</Button>
						</BlockAbsolute>
					</Block>
				</BlockRight>
			</BlockBot>
		</MainContainer>
	);
}
