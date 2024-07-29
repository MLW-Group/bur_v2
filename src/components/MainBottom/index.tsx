import {
  MainBottomContainer,
  BlockNumberAbsolute,
  BlockNumber,
  BlockLine,
} from "./styled";
import Image from "next/image";
import Subtract from "@svg/Subtract.svg";
import { Block } from "../Block/styled";
import { Text } from "../Text/styled";
import { Circle } from "../Circle/styled";
import { Button } from "../Button/styled";
import { useContext, useEffect } from "react";
import { AppContext } from "@/context/app-context";
export function MainBottom() {
  const dummy = [
    {
      number: "01",
      nameFirst: "собственная",
      nameSecond: "техника",
      desc: "Предлагаем профессиональные услуги по бурению скважин на воду с применением собственной высокотехнологичной техники.",
      mainColor: "orange",
      secondColor: "white",
    },
    {
      number: "02",
      nameFirst: "высокая",
      nameSecond: "квалификация",
      desc: "Наша компания предоставляет услуги по бурению скважин на воду, гарантируя высокое качество и профессионализм благодаря нашей команде опытных специалистов.",
      mainColor: "white",
      secondColor: "orange",
    },
    {
      number: "03",
      nameFirst: "гарантия",
      nameSecond: "цены",
      desc: "Мы предлагаем услуги по бурению скважин на воду с уникальным условием – гарантией цены. Наша компания стремится к максимальной прозрачности и уверенности клиентов в стоимости наших услуг.",
      mainColor: "white",
      secondColor: "orange",
    },
    {
      number: "04",
      nameFirst: "работа",
      nameSecond: "без предоплаты",
      desc: "Предоставляем услуги по бурению скважин на воду с уникальным условием – без предоплаты. Доверие и удобство наших клиентов для нас на первом месте.",
      mainColor: "white",
      secondColor: "orange",
    },
  ] as const;
  // @ts-ignore
  const { width } = useContext(AppContext);
  return (
    <MainBottomContainer>
      <Block
        $marginTop="50"
        $height="80%"
        $gap="100"
        $flexDirection={width && width < 1500 ? "col" : "row"}
        $justifyContent={width && width < 1500 ? "FE" : "center"}
      >
        {dummy.map((el, i) => (
          <Block
            $flexDirection="col"
            $justifyContent="center"
            key={i}
            $height="100px"
          >
            <BlockNumber>
              <BlockNumberAbsolute>
                <Text $size="120" $color="grayNumber" $fontWeight="XXL">
                  {el.number}
                </Text>
              </BlockNumberAbsolute>
              <Block $gap="S" $flexDirection="col">
                <Block>
                  <Text
                    $size="M"
                    $color={el.mainColor}
                    $fontWeight="XXL"
                    $fontFamily="oswald"
                    $transform="upper"
                  >
                    {el.nameFirst}
                  </Text>
                  <Text
                    $size="M"
                    $color={el.secondColor}
                    $marginLeft="l"
                    $fontWeight="XXL"
                    $fontFamily="oswald"
                    $transform="upper"
                  >
                    {el.nameSecond}
                  </Text>
                </Block>
                <Text
                  $size="M"
                  $color="gray"
                  $textAlign="center"
                  $fontWeight="M"
                  $fontFamily="open"
                >
                  {el.desc}
                </Text>
              </Block>
            </BlockNumber>
            <BlockLine></BlockLine>
          </Block>
        ))}
      </Block>
    </MainBottomContainer>
  );
}
