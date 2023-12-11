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
  const arr = LinkByCitySlug[slug].slice(4);
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
