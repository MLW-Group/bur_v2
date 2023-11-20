import {
  MainContainer,
  BlockTitle,
  BlockCenter,
  BlockBottom,
  BlockRight,
  BlockBot,
  BlockAbsolute,
} from "./styled";
import Image from "next/image";
import Subtract from "@svg/Subtract.svg";
import Bur from "@img/bur.png";
import { Block } from "../Block/styled";
import { Text } from "../Text/styled";
import { Circle } from "../Circle/styled";
import { Button } from "../Button/styled";
import { useContext, useState } from "react";
import { AppContext } from "@/context/app-context";
import { BannerSlugTitle } from "@/dummy/bannerSlug";
export function Main() {
  // @ts-ignore
  const { width, modal, slug } = useContext(AppContext);
  console.log("🚀 ~ file: index.tsx:22 ~ Main ~ slug:", slug);
  const title = BannerSlugTitle.filter((el) => el.name === slug)[0].title;
  console.log("🚀 ~ file: index.tsx:22 ~ Main ~ title:", title);
  return (
    <MainContainer>
      <BlockTitle>
        <BlockCenter>
          <Block $justifyContent="center" $flexDirection="col" $gap="medium">
            <Text
              $size={width < 650 ? "70" : "biggest"}
              $color="white"
              $fontFamily="oswald"
              $transform="upper"
              $fontWeight="XXL"
              $textAlign="center"
            >
              бурение
            </Text>
            <Text
              $size={width < 650 ? "XXL" : "medium"}
              $color="white"
              $fontFamily="oswald"
              $transform="upper"
              $fontWeight="small"
              $textAlign="center"
            >
              скважин на воду
            </Text>
            <Text
              $size={width < 650 ? "40" : "lg"}
              $color="orange"
              $fontFamily="oswald"
              $transform="upper"
              $fontWeight="XXL"
              $textAlign="center"
            >
              {/* от 1000 руб./м */}
              {title}
            </Text>
          </Block>
        </BlockCenter>
      </BlockTitle>
      <BlockBot>
        <BlockBottom>
          <Block>
            <Image src={Subtract} alt="123" />
            <Circle $width="L" $height="L" $background="orange">
              <Image alt="123" src={Bur} width="50" height="50" />
            </Circle>
          </Block>
          {/* @ts-ignore */}
          <Block $gap="S" $flexDirection={width < 650 && "col"}>
            <Text
              $size="L"
              $color="white"
              $transform="upper"
              $fontWeight="M"
              $fontFamily="open"
            >
              Работем с
            </Text>
            <Text $size="80" $color="white" $mix="0x10" $fontWeight="XXL">
              2012
            </Text>
            <Text
              $size="L"
              $color="white"
              $transform="upper"
              $fontWeight="M"
              $fontFamily="open"
            >
              года
            </Text>
          </Block>
        </BlockBottom>
        <BlockRight>
          <Block $flexDirection="col" $justifyContent="center">
            <Text
              $size="S"
              $fontFamily="open"
              $color="gray"
              $lineHeight="L"
              $textAlign="center"
            >
              Строгое соблюдение технологии бурения скважин на воду в Московской
              области, Москве и Подмосковье. Высокое качество и соблюдения
              сроков выполнения работ по при бурение скважин на воду под ключ.
            </Text>
            <BlockAbsolute>
              <Button
                $background="orange"
                $mix={"17x52"}
                $color="white"
                $size={width < 480 ? "XS" : "L"}
                $transform="upper"
                $fontWeight="XL"
                onClick={() => modal.setOpenModal(true)}
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
