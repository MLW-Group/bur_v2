import {
  OfferContainer,
  BlockTitle,
  BlockContent,
  Block,
  Number,
  BlockLeft,
} from "./styled";
import { useState } from "react";
import Image from "next/image";
import { Text } from "../Text/styled";
import { Button } from "../Button/styled";
export function Offer() {
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
      img: "/img/bur1.png",
      title: "бурение на воду",
      subtitile:
        "Примерное описание. Текст редактируется через систему управления сайтом.",
    },
    {
      number: "03",
      img: "/img/bur1.png",
      title: "бурение на воду",
      subtitile:
        "Примерное описание. Текст редактируется через систему управления сайтом.",
    },
    {
      number: "04",
      img: "/img/bur1.png",
      title: "бурение на воду",
      subtitile:
        "Примерное описание. Текст редактируется через систему управления сайтом.",
    },
  ];
  return (
    <OfferContainer>
      <BlockTitle>
        <Text $size="70" $color="white" $transform="upper" $fontWeight="XXL">
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
              <Text $size="L" $color="white" $transform="upper">
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
