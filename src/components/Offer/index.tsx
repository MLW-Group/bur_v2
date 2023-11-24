import {
  OfferContainer,
  BlockTitle,
  BlockContent,
  Block,
  Number,
  BlockLeft,
} from "./styled";
import { useContext } from "react";
import Image from "next/image";
import { Text } from "../Text/styled";
import { AppContext } from "@/context/app-context";
export function Offer() {
  // @ts-ignore
  const { width } = useContext(AppContext);

  const dummy = [
    {
      number: "01",
      img: "/img/bur1.png",
      title: "бурение на воду",
      subtitile:
        "Мы специализируемся в бурении скважин для водоснабжения, обеспечивая надежный источник чистой воды. Наша команда опытных специалистов и современное оборудование гарантируют эффективность и качество услуг, отвечая вашим потребностям в водоснабжении.",
    },
    {
      number: "02",
      img: "/img/jetpack.png",
      title: "водоочистка",
      subtitile:
        "Наша компания предлагает высококачественные решения по водоочистке, обеспечивая чистую и безопасную воду для вашего дома или бизнеса. Мы используем передовые технологии и экологически чистые методы для эффективного удаления загрязнений из воды.",
    },
    {
      number: "03",
      img: "/img/stantion.png",
      title: "Скважины",
      subtitile:
        "Мы специализируемся в бурении скважин, обеспечивая доступ к подземным водным ресурсам для различных потребностей. Наш опыт и использование современного оборудования гарантируют надежность и эффективность каждого проекта.",
    },
    {
      number: "04",
      img: "/img/machine.png",
      title: "забивка свай",
      subtitile:
        "Наша компания предоставляет профессиональные услуги по забивке свай, обеспечивая надежное основание для строительства. Мы используем передовые методы и качественные материалы, гарантируя прочность и устойчивость конструкций.",
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
