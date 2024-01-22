import {
  TrustContainer,
  TrustHeader,
  TrustSubTitle,
  TrustWrapper,
  TrustBlock
} from "./styled";
import { useContext, useState } from "react";
import Image from "next/image";
import { Text } from "../Text/styled";
import Subtract from "@svg/Subtract.svg";
import { Button } from "../Button/styled";
import img from '@img/1.jpg'
import img1 from '@img/1.jpg'
import img2 from '@img/1.jpg'
import img3 from '@img/1.jpg'
import img4 from '@img/1.jpg'
import img5 from '@img/1.jpg'
import { Circle } from "../Circle/styled";
import { Block } from "../Block/styled";
import { AppContext } from "@/context/app-context";
export function Trust() {
  // @ts-ignore
  const { width } = useContext(AppContext);
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
  ]
  return (
    <TrustContainer>
      <TrustHeader>
        <Text $size="40" $color="orange" $fontWeight="XXL" $transform="upper">
          Нам доверяют
        </Text>
      </TrustHeader>
      <TrustSubTitle>
        <Text $size="M" $maxWidth="60%" $color="white" $fontWeight="small" $fontFamily="open" $textAlign="center">
          ГК «Магнезит» г. Сатка, АО «Карабашский медеплавильный комбинат» г. Карабаш, ГРЭС Березовский Свердловская область, Завод бетоносмесительного оборудования г. Златоуст , Завод «Иристон» г. Златоуст, Магнитогорский Металлургический Комбинат и многие другие.
        </Text>
      </TrustSubTitle>
      <TrustWrapper>
        {dummy.map((el) => (
          <TrustBlock>
            <Image src={el.image} alt="img" width={400} height={250}
              style={{
                borderRadius: 5
              }}
              objectFit="contain"
            />
            <Text $size="M" $whiteSpace="nowrap" $color="white" $fontWeight="XXL" $transform="upper">
              {el.name}
            </Text>
          </TrustBlock>
        ))}
      </TrustWrapper>
    </TrustContainer>
  );
}
