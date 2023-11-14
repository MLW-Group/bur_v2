"use client";

import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { MainBottom } from "@/components/MainBottom";
import { Offer } from "@/components/Offer";
import { SliderPage } from "@/components/SliderPage";
import { UnderHeader } from "@/components/UnderHeader";
import styled from "styled-components";

const Block = styled.div`
  width: 100vw;

  background-image: linear-gradient(
      rgba(1, 2, 2, 0.2) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    url("https://mos-710255.oml.ru/d/bez_nazvaniya_2022-09-14t155347804.png"),
    linear-gradient(rgba(1, 2, 2, 0.25) 0%, rgba(1, 2, 2, 0.25) 100%),
    linear-gradient(
      0deg,
      rgba(1, 2, 2, 1) 0%,
      rgba(1, 2, 2, 1) 16%,
      rgba(0, 0, 0, 0) 43%,
      rgba(255, 255, 255, 0) 100%
    ),
    url("/img/back.jpg");
  background-repeat: no-repeat, repeat, no-repeat, no-repeat, no-repeat;
  background-position: left 0px top 0px, left 0 top 0, left 0px top 0px,
    left 0px top 0px, center bottom 0;
  background-size: auto, 1322px auto, auto, auto, cover;
  background-attachment: scroll, scroll, scroll, scroll, scroll;
  padding-top: 0px;
`;
export default function Home() {
  return (
    <div>
      <Block>
        <Header />
        <UnderHeader />
        <Main />
        <MainBottom />
        <SliderPage />
        <Offer />
      </Block>
    </div>
  );
}
