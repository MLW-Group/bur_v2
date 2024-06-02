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
  const { width, modal, setTypeModal } = useContext(AppContext);

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
    <SliderContainer id="about">
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
          <h3
            style={{
              fontSize: width && width < 700 ? 40 : 80,
              textTransform: "uppercase",
              fontWeight: "700",
              fontFamily: "oswald",
            }}
            // $size={width && width < 700 ? "40" : "80"}
            // $transform="upper"
            // $fontWeight="XXL"
          >
            О компании
          </h3>
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
            onClick={() => {
              setTypeModal("modalPhone2");
              modal.setOpenModal(true);
            }}
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
              <h3
                style={{
                  fontFamily: "oswald",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    fontSize: 65,
                    fontWeight: "700",
                    color: "#FF5F1E",
                  }}
                >
                  500+
                </span>
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    textAlign: "center",
                    textTransform: "uppercase",
                  }}
                >
                  СКВАЖИН ПРОБУРЕНО ЗА ГОДЫ РАБОТЫ
                </span>
              </h3>
              {/* <Text $size="medium" $fontWeight="XXL" $color="orange">
                500+
              </Text>
              <Text
                $size="L"
                $fontWeight="XXL"
                $transform="upper"
                $textAlign="center"
              >
                СКВАЖИН ПРОБУРЕНО ЗА ГОДЫ РАБОТЫ
              </Text> */}
            </Block>
          </BlockBot>
          <BlockBot>
            <Block $flexDirection="col" $gap="S">
              <h3
                style={{
                  fontFamily: "oswald",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: 45,
                      fontWeight: "700",
                      color: "#FF5F1E",
                      textTransform: "uppercase",
                    }}
                  >
                    более
                  </span>
                  <span
                    style={{
                      fontSize: 65,
                      fontWeight: "700",
                      color: "#FF5F1E",
                      textTransform: "uppercase",
                    }}
                  >
                    30
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    textAlign: "center",
                    textTransform: "uppercase",
                  }}
                >
                  ЕДИНИЦ ТЕХНИКИ В АВТОПАРКЕ
                </span>
              </h3>
            </Block>
          </BlockBot>
        </BlockCenterBottom>
      </BlockHalf>
    </SliderContainer>
  );
}
