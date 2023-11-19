import {
  OfferContainer,
  BlockTitle,
  BlockContent,
  Block,
  Number,
  BlockLeft,
} from "./styled";
import { useContext, useState } from "react";
import Image from "next/image";
import { Text } from "../Text/styled";
import { Button } from "../Button/styled";
import { AppContext } from "@/context/app-context";
export function Offer() {
  const width = useContext(AppContext);

  const dummy = [
    {
      number: "01",
      img: "/img/bur1.png",
      title: "бурение на воду",
      subtitile:
        "Примерное описание. Текст редактируется через систему управления сайтом.",
    },
    {
      number: "02",
      img: "/img/jetpack.png",
      title: "водоочистка",
      subtitile:
        "Примерное описание. Текст редактируется через систему управления сайтом.",
    },
    {
      number: "03",
      img: "/img/stantion.png",
      title: "Скважины",
      subtitile:
        "Примерное описание. Текст редактируется через систему управления сайтом.",
    },
    {
      number: "04",
      img: "/img/machine.png",
      title: "забивка свай",
      subtitile:
        "Примерное описание. Текст редактируется через систему управления сайтом.",
    },
  ];
  return (
    <OfferContainer>
      <BlockTitle>
        <Text
          $size={width < 1150 ? "30" : "70"}
          $color="white"
          $transform="upper"
          $fontWeight="XXL"
          $textAlign="center"
        >
          Что мы можем вам предложить
        </Text>
      </BlockTitle>
      <BlockContent>
        {dummy.map((el, i) => (
          <Block key={i}>
            <Number>
              <Text
                $size="200"
                $color="white"
                $textFill="transparent"
                $textStroke="whiteOp"
                $fontWeight="XXL"
              >
                {el.number}
              </Text>
            </Number>
            <BlockLeft>
              <Image src={el.img} alt="123" width={70} height={70} />
              <Text
                $size="L"
                $color="white"
                $transform="upper"
                $fontWeight="XXL"
              >
                {el.title}
              </Text>
              <Text $size="S" $color="gray" $fontFamily="open">
                {el.subtitile}
              </Text>
            </BlockLeft>
          </Block>
        ))}
      </BlockContent>
    </OfferContainer>
  );
}
