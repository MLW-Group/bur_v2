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
      desc: "Примерное описание. Текст редактируется через систему управления сайтом.",
      mainColor: "orange",
      secondColor: "white",
    },
    {
      number: "02",
      nameFirst: "высокая",
      nameSecond: "квалификация",
      desc: "Примерное описание. Текст редактируется через систему управления сайтом.",
      mainColor: "white",
      secondColor: "orange",
    },
    {
      number: "03",
      nameFirst: "работа",
      nameSecond: "без предоплаты",
      desc: "Примерное описание. Текст редактируется через систему управления сайтом.",
      mainColor: "white",
      secondColor: "orange",
    },
    {
      number: "04",
      nameFirst: "гарантия на работы",
      nameSecond: "до 10 лет",
      desc: "Примерное описание. Текст редактируется через систему управления сайтом.",
      mainColor: "white",
      secondColor: "orange",
    },
  ] as const;
  const { width } = useContext(AppContext);
  return (
    <MainBottomContainer>
      <Block
        $marginTop="50"
        $height="80%"
        $gap="100"
        $flexDirection={width < 1500 ? "col" : "row"}
        $justifyContent={width < 1500 ? "FE" : "center"}
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
                  $size="XS"
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
