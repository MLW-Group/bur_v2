import {
  FooterContainer,
  Container,
  BlockInfoContainer,
  BlockInfoChildren,
  BlockNew,
} from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { Text } from "../Text/styled";
import { Button } from "../Button/styled";
import Marquee from "react-fast-marquee";
import { Circle } from "../Circle/styled";
import { Block } from "../Block/styled";
import { Link } from "../Link/styled";
import { NumberCompany } from "@/texts/number";
export function Footer() {
  const dummy = [
    {
      img: "/svg/phoneWhite.svg",
      title: "Наш телефон:",
      subTitle: NumberCompany,
    },
    {
      img: "/svg/email.svg",
      title: "Наш почтовый адрес:",
      subTitle: "TEST@EXAMPLE.COM",
    },
    {
      img: "/svg/map.svg",
      title: "Мы находимся по адресу:",
      subTitle: "МОСКВА, УЛ. ЮЖНАЯ, Д.8",
    },
  ];
  // const dummy1 = [
  //   {
  //     name: "Меню",
  //     fw: "XXL",
  //     ff: "oswald",
  //     color: "white",
  //     transform: "upper",
  //   },
  //   {
  //     name: "Главная",
  //     fw: "S",
  //     color: "gray",
  //     ff: "open",
  //   },
  //   {
  //     name: "О компании",
  //     fw: "S",
  //     color: "gray",
  //     ff: "open",
  //   },
  //   {
  //     name: "Новости",
  //     fw: "S",
  //     color: "gray",
  //     ff: "open",
  //   },
  //   {
  //     name: "Отзывы о нас",
  //     fw: "S",
  //     color: "gray",
  //     ff: "open",
  //   },
  //   {
  //     name: "Контакты",
  //     fw: "S",
  //     color: "gray",
  //     ff: "open",
  //   },
  // ];
  return (
    <FooterContainer>
      <Container>
        <BlockInfoContainer>
          <BlockInfoChildren $gap="M">
            {dummy.map((el, i) => (
              <BlockNew $flexDirection="row" key={i}>
                <Circle $height="S" $width="S" $background="orange">
                  <Image src={el.img} alt="123" width={22} height={22} />
                </Circle>
                <BlockNew $flexDirection="col">
                  <Text $size="M" $color="gray" $fontFamily="open">
                    {el.title}
                  </Text>
                  <Text $size="XL" $color="white" $fontWeight="XXL">
                    {el.subTitle}
                  </Text>
                </BlockNew>
              </BlockNew>
            ))}
          </BlockInfoChildren>
        </BlockInfoContainer>
        <BlockInfoContainer>
          <BlockInfoChildren
            $alignItems="center"
            $justifyContent="center"
            $gap="M"
          >
            <Image src={"/svg/logo.svg"} alt="123" width={75} height={75} />
            <Text $size="M" $fontWeight="XXL" $color="white" $transform="upper">
              Центр бурения
            </Text>
            <Text $size="S" $fontFamily="open" $color="gray">
              Услуги бурения
            </Text>
            <Block $flexDirection="row" $gap="S">
              <Circle $background="gray" $width="S" $height="S">
                <Image
                  src={"/svg/telegram.svg"}
                  alt="123"
                  width={18}
                  height={15}
                />
              </Circle>
              <Circle $background="gray" $width="S" $height="S">
                <Image
                  src={"/svg/email.svg"}
                  alt="123"
                  width={20}
                  height={20}
                />
              </Circle>
              <Circle $background="gray" $width="S" $height="S">
                <Image
                  src={"/svg/phoneWhite.svg"}
                  alt="123"
                  width={20}
                  height={20}
                />
              </Circle>
            </Block>
          </BlockInfoChildren>
        </BlockInfoContainer>
        <BlockInfoContainer>
          <BlockInfoChildren
            $gap="S"
            $alignItems="center"
            $justifyContent="center"
          >
            <Link
              $size="30"
              $fontWeight="XXL"
              $color="white"
              $transform="upper"
            >
              меню
            </Link>
            <Link $size="S" $fontFamily="open" $color="gray">
              Главная
            </Link>
            <Link $size="S" $fontFamily="open" $color="gray">
              О компании
            </Link>
            <Link $size="S" $fontFamily="open" $color="gray">
              Новости
            </Link>
            <Link $size="S" $fontFamily="open" $color="gray">
              Отзывы о нас
            </Link>
            <Link $size="S" $fontFamily="open" $color="gray">
              Контакты
            </Link>
          </BlockInfoChildren>
        </BlockInfoContainer>
      </Container>
    </FooterContainer>
  );
}
