import { MarqueeContainer, ContentBetween, Content } from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import { useState } from "react";
import Image from "next/image";
import { Text } from "../Text/styled";
import { Button } from "../Button/styled";
import { Block } from "../Block/styled";
import Marquee from "react-fast-marquee";
export function MarqueeBlock() {
  const dummy = [
    {
      img: "/img/logo1.webp",
    },
    {
      img: "/img/logo2.webp",
    },
    {
      img: "/img/logo3.webp",
    },
    {
      img: "/img/logo4.webp",
    },
    {
      img: "/img/logo4.webp",
    },
    {
      img: "/img/logo4.webp",
    },
  ];
  return (
    <MarqueeContainer>
      <Marquee speed={100}>
        <ContentBetween>
          {dummy.map((el, i) => (
            <Content key={i}>
              <Image
                src={el.img}
                alt="123"
                width={180}
                height={100}
                style={{
                  objectFit: "cover",
                }}
              />
            </Content>
          ))}
        </ContentBetween>
      </Marquee>
    </MarqueeContainer>
  );
}
