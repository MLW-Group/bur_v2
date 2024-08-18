import {
  ReceiveContainer,
  BlockHalf,
  BlockTitle,
  BlockSub,
  BlockQuality,
  Quality,
  ReceiveBlock,
  Receive1,
  BlockAbsolute,
  Absolute,
} from "./styled";
import { useContext, useState } from "react";
import Image from "next/image";
import { Text } from "../Text/styled";
import Subtract from "@svg/Subtract.svg";
import { Button } from "../Button/styled";
import { Circle } from "../Circle/styled";
import { Block } from "../Block/styled";
import { AppContext } from "@/context/app-context";
export function Receive() {
  // @ts-ignore
  const { width } = useContext(AppContext);

  return (
    <ReceiveContainer id="receive">
      <BlockHalf>
        <Block $flexDirection="col" $gap="XL">
          <BlockTitle>
            <Text
              $size="80"
              $transform="upper"
              $fontWeight="XXL"
              // @ts-ignore
              $maxWidth={width < 900 ? "100%" : "50%"}
              $textAlign="center"
            >
              отзывы клиентов
            </Text>
          </BlockTitle>
          <BlockSub>
            <Text
              $size="S"
              $fontFamily="open"
              $fontWeight="M"
              color="gray"
              $textAlign="center"
            >
              За 15 лет пробурили свыше 500 скважин по Челябинской и
              Свердловской области!
              <br />
              Обеспечиваем доступность услуг, гарантируя высокое качество!
            </Text>
          </BlockSub>
        </Block>
        <BlockQuality>
          <Quality>
            <Block>
              <Image src={Subtract} alt="Subtract" />
              <Circle $width="L" $height="L" $background="orange">
                <Image alt="Receive" src={"/img/like.png"} width={50} height={50} />
              </Circle>
            </Block>
            <Text
              $size="L"
              $transform="upper"
              $fontWeight="XXL"
              $textAlign="center"
            >
              ВЫПОЛНЯЕМ УСЛУГИ КАЧЕСТВЕННО
            </Text>
          </Quality>
          <Quality>
            <Block>
              <Image src={Subtract} alt="Subtract" />
              <Circle $width="L" $height="L" $background="orange">
                <Image alt="Like" src={"/img/like.png"} width={50} height={50} />
              </Circle>
            </Block>
            <Text
              $size="L"
              $transform="upper"
              $fontWeight="XXL"
              $textAlign="center"
            >
              Бурение скважины с продувкой до чистой воды
            </Text>
          </Quality>
        </BlockQuality>
      </BlockHalf>
      <BlockHalf>
        <ReceiveBlock>
          <Receive1>
            <Text $size="L" $transform="upper" $fontWeight="XXL">
              максим
            </Text>
            <Text
              $size="S"
              $fontWeight="M"
              $fontFamily="open"
              $color="grayBlackNo"
              $textAlign="center"
              $fontStyle="italic"
              $maxWidth={width && width < 1250 ? "90%" : "70%"}
            >
              Две недели назад бурили скважину. Все работы провели аккуратно,
              хочу поблагодарить Дмитрия за помощь и консультацию.
            </Text>
            <Absolute>
              <Image
                alt="Receive"
                src={"/img/underRec.png"}
                width={226}
                height={69}
              />
            </Absolute>
          </Receive1>
          <Receive1>
            <Text $size="L" $transform="upper" $fontWeight="XXL">
              Маргарита
            </Text>
            <Text
              $size="S"
              $fontWeight="M"
              $fontFamily="open"
              $color="grayBlackNo"
              $textAlign="center"
              $fontStyle="italic"
              $maxWidth="70%"
            >
              Всем привет! Компания с большим опытом, все посчитали быстро,
              предлагали разные варианты по материалам со своими комментариями.
              Наша семья осталась довольна, питьевая вода в доме – это
              прекрасно, спасибо!
            </Text>
            <Absolute>
              <Image
                alt="Receive"
                src={"/img/underRec.png"}
                width={226}
                height={69}
              />
            </Absolute>
          </Receive1>
        </ReceiveBlock>
      </BlockHalf>
    </ReceiveContainer>
  );
}
