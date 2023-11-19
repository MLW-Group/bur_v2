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
  const width = useContext(AppContext);

  return (
    <ReceiveContainer>
      <BlockHalf>
        <Block $flexDirection="col" $gap="XL">
          <BlockTitle>
            <Text
              $size="80"
              $transform="upper"
              $fontWeight="XXL"
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
              За 15 лет пробурили свыше 2500 скважин по Москве и Московской
              области!
              <br />
              Обеспечиваем доступность услуг, гарантируя высокое качество!
            </Text>
          </BlockSub>
        </Block>
        <BlockQuality>
          <Quality>
            <Block>
              <Image src={Subtract} alt="123" />
              <Circle $width="L" $height="L" $background="orange">
                <Image alt="123" src={"/img/like.png"} width={50} height={50} />
              </Circle>
            </Block>
            <Text
              $size="L"
              $transform="upper"
              $fontWeight="XXL"
              $textAlign="center"
            >
              ВЫПОЛНЯЕМ УСЛУГИ КАЧЕСТВЕННО И УДОБНО
            </Text>
          </Quality>
          <Quality>
            <Block>
              <Image src={Subtract} alt="123" />
              <Circle $width="L" $height="L" $background="orange">
                <Image alt="123" src={"/img/like.png"} width={50} height={50} />
              </Circle>
            </Block>
            <Text
              $size="L"
              $transform="upper"
              $fontWeight="XXL"
              $textAlign="center"
            >
              ДЕЛАЕМ АНАЛИЗЫ В СОБСТВЕННЫХ ЛАБОРАТОРИЯХ
            </Text>
          </Quality>
        </BlockQuality>
      </BlockHalf>
      <BlockHalf>
        <ReceiveBlock>
          <Receive1>
            <BlockAbsolute>
              <Image
                alt="123"
                src={"/svg/Subtract.svg"}
                width={28}
                height={105}
              />
              <Image
                alt="123"
                src={"/img/vadim.webp"}
                width={100}
                height={100}
                style={{
                  objectFit: "cover",
                  borderRadius: "2500px",
                }}
              />
            </BlockAbsolute>
            <Text $size="L" $transform="upper" $fontWeight="XXL">
              вадим немков
            </Text>
            <Text
              $size="S"
              $fontWeight="M"
              $fontFamily="open"
              $color="grayBlackNo"
              $textAlign="center"
              $fontStyle="italic"
              $maxWidth={width < 1250 ? "90%" : "70%"}
            >
              Сайт просто супер. Ребята молодцы, делают свою работу на высоком
              уровне. Буду рекомендовать всем друзьям и близким.
            </Text>
            <Absolute>
              <Image
                alt="123"
                src={"/img/underRec.png"}
                width={226}
                height={69}
              />
            </Absolute>
          </Receive1>
          <Receive1>
            <BlockAbsolute>
              <Image
                alt="123"
                src={"/svg/Subtract.svg"}
                width={28}
                height={105}
              />
              <Image
                alt="123"
                src={"/img/evg.webp"}
                width={100}
                height={100}
                style={{
                  objectFit: "cover",
                  borderRadius: "2500px",
                }}
              />
            </BlockAbsolute>
            <Text $size="L" $transform="upper" $fontWeight="XXL">
              ЕВГЕНИЯ ОРЛОВА
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
              Сайт просто супер. Ребята молодцы, делают свою работу на высоком
              уровне. Буду рекомендовать всем друзьям и близким.
            </Text>
            <Absolute>
              <Image
                alt="123"
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
