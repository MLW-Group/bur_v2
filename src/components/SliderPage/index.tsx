import {
  BlockHalf,
  SliderContainer,
  BlockCenter,
  BlockUnderSlider,
  BlockCenterRight,
  BlockCenterBottom,
  BlockBot,
} from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import { useContext, useState } from "react";
import Image from "next/image";
import { Text } from "../Text/styled";
import { Button } from "../Button/styled";
import { Block } from "../Block/styled";
import { AppContext } from "@/context/app-context";
export function SliderPage() {
  // @ts-ignore
  const { width, modal } = useContext(AppContext);

  const dummy = [
    {
      img: "/img/slide11.webp",
    },
    {
      img: "/img/slide2.webp",
    },
    {
      img: "/img/slide3.webp",
    },
  ];
  return (
    <SliderContainer>
      <BlockHalf>
        <Swiper
          slidesPerView={1}
          autoplay
          spaceBetween={50}
          modules={[Autoplay, EffectFade]}
        >
          {dummy.map((el, i) => (
            <SwiperSlide key={i}>
              <BlockCenter>
                <Image
                  alt=""
                  src={el.img}
                  width={550}
                  height={423}
                  style={{ objectFit: "cover" }}
                />
              </BlockCenter>
            </SwiperSlide>
          ))}
        </Swiper>
        <BlockUnderSlider>
          {dummy.map((el, i) => (
            <BlockCenter key={i}>
              <Image
                alt=""
                src={el.img}
                width={159}
                height={106}
                style={{ objectFit: "cover" }}
              />
            </BlockCenter>
          ))}
        </BlockUnderSlider>
      </BlockHalf>
      <BlockHalf>
        <BlockCenterRight>
          <Text
            $size={width && width < 700 ? "40" : "80"}
            $transform="upper"
            $fontWeight="XXL"
          >
            О компании
          </Text>
          <Text
            $size="M"
            $fontFamily="open"
            $fontWeight="M"
            $textAlign="center"
            $maxWidth="80%"
            $color="grayBlack"
          >
            Наша организация - лидер на рынке бурения скважин в своем регионе,
            предоставляя высококачественные услуги уже более десяти лет. Наш
            опыт и профессионализм гарантируют надежное освоение водных ресурсов
            для наших клиентов
          </Text>

          <Button
            $mix={"21x45"}
            $size="L"
            $fontWeight="XXL"
            $background="orange"
            $color="white"
            $transform="upper"
            onClick={() => modal.setOpenModal(true)}
          >
            {/* @ts-ignore */}
            <Text $size="L" $whiteSpace="nowrap">
              Заказать обратный звонок
            </Text>
          </Button>
        </BlockCenterRight>
        <BlockCenterBottom>
          <BlockBot>
            <Block $flexDirection="col" $gap="S">
              <Text $size="medium" $fontWeight="XXL" $color="orange">
                500+
              </Text>
              <Text
                $size="L"
                $fontWeight="XXL"
                $transform="upper"
                $textAlign="center"
              >
                СКВАЖИН ПРОБУРЕНО ЗА ГОДЫ РАБОТЫ
              </Text>
              {/* <Text
                $size="XS"
                $textAlign="center"
                $color="black"
                $fontFamily="open"
              >
                Примерное описание
              </Text> */}
            </Block>
          </BlockBot>
          <BlockBot>
            <Block $flexDirection="col" $gap="S">
              <Block>
                <Text
                  $size="40"
                  $fontWeight="XXL"
                  $color="orange"
                  $transform="upper"
                >
                  более
                </Text>
                <Text $size="medium" $fontWeight="XXL" $color="orange">
                  30
                </Text>
              </Block>
              <Text
                $size="L"
                $fontWeight="XXL"
                $transform="upper"
                $textAlign="center"
              >
                ЕДИНИЦ ТЕХНИКИ В АВТОПАРКЕ
              </Text>
              {/* <Text
                $size="XS"
                $textAlign="center"
                $color="black"
                $fontFamily="open"
              >
                Примерное описание
              </Text> */}
            </Block>
          </BlockBot>
        </BlockCenterBottom>
      </BlockHalf>
    </SliderContainer>
  );
}
