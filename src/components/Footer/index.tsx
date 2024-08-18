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
import { OurAddress } from "@/texts/addresses";
import { LinkByCitySlug } from "@/dummy/links";
import { useContext } from "react";
import { AppContext } from "@/context/app-context";
export function Footer() {
  const { width, slug } = useContext(AppContext);
  const dummy = [
    {
      img: "/svg/phoneWhite.svg",
      title: "Наш телефон:",
      subTitle: NumberCompany,
    },
    {
      img: "/svg/email.svg",
      title: "Наш почтовый адрес:",
      subTitle: "flooring-decor@mail.ru",
    },
    {
      img: "/svg/map.svg",
      title: "Мы находимся по адресу:",
      subTitle: OurAddress,
    },
  ];
  // @ts-ignore
  const arr = LinkByCitySlug[slug].slice(4);
  return (
    <FooterContainer>
      <Container>
        <BlockInfoContainer>
          <BlockInfoChildren $gap="M">
            {dummy.map((el, i) => (
              <BlockNew $flexDirection="row" key={i}>
                <div
                  style={{
                    minWidth: 50,
                  }}
                >
                  <Circle $height="S" $width="S" $background="orange">
                    <Image src={el.img} alt="IconFooter" width={22} height={22} />
                  </Circle>
                </div>
                <BlockNew $flexDirection="col">
                  <Text $size="M" $color="gray" $fontFamily="open">
                    {el.title}
                  </Text>
                  <Text
                    $size="M"
                    $color="white"
                    $fontWeight="XXL"
                    $transform="upper"
                  >
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
            {/* @ts-ignore */}
            {arr.map((el, i) => (
              <Link
                key={i}
                href={el.url}
                $size="XL"
                $color="white"
                $transform="upper"
                $fontWeight="XXL"
                title={`Бурение скважин в ${el.name}`}
              >
                {el.name}
              </Link>
            ))}
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
            <Link $size="S" $fontFamily="open" $color="gray" href="#main">
              Главная
            </Link>
            <Link $size="S" $fontFamily="open" $color="gray" href="#about">
              О компании
            </Link>
            <Link $size="S" $fontFamily="open" $color="gray" href="#offer">
              Новости
            </Link>
            <Link $size="S" $fontFamily="open" $color="gray" href="#receive">
              Отзывы о нас
            </Link>
            <Link $size="S" $fontFamily="open" $color="gray" href="#contacts">
              Контакты
            </Link>
          </BlockInfoChildren>
        </BlockInfoContainer>
      </Container>
    </FooterContainer>
  );
}
