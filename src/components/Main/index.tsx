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
export function Main() {
  return (
    <MainContainer>
      <BlockTitle>
        <BlockCenter>
          <Block $justifyContent="center" $flexDirection="col" $gap="medium">
            <Text
              $size="biggest"
              $color="white"
              $fontFamily="oswald"
              $transform="upper"
              $fontWeight="XXL"
            >
              бурение
            </Text>
            <Text
              $size="medium"
              $color="white"
              $fontFamily="oswald"
              $transform="upper"
              $fontWeight="small"
            >
              скважин на воду
            </Text>
            <Text
              $size="lg"
              $color="orange"
              $fontFamily="oswald"
              $transform="upper"
              $fontWeight="XXL"
            >
              от 2190 руб./м
            </Text>
          </Block>
        </BlockCenter>
      </BlockTitle>
      <BlockBot>
        <BlockBottom>
          <Block>
            <Image src={Subtract} alt="123" />
            <Circle $width="L" $height="L" $background="orange">
              <Image alt="123" src={Bur} width={50} height={50} />
            </Circle>
          </Block>
          <Block $gap="S">
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
                $mix="17x52"
                $color="white"
                $size="L"
              >
                Рассчитать стоимость
              </Button>
            </BlockAbsolute>
          </Block>
        </BlockRight>
      </BlockBot>
    </MainContainer>
  );
}
