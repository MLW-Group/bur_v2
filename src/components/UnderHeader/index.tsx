import { UnderHeaderContainer } from "./styled";
import Image from "next/image";
import Logo from "@svg/logo.svg";
import Phone from "@svg/phoneWhite.svg";
import { NameCompany, Services } from "@/texts/name";
import { NumberCompany, NumberCompanySecond } from "@/texts/number";
import { Block } from "../Block/styled";
import { Link } from "../Link/styled";
import { Text } from "../Text/styled";
import { Circle } from "../Circle/styled";
import { AppContext } from "@/context/app-context";
import { useContext } from "react";
export function UnderHeader() {
  // @ts-ignore
  const { width } = useContext(AppContext);

  const dummy = [
    {
      name: "Главная",
    },
    {
      name: "О компании",
    },
    {
      name: "Новости",
    },
    {
      name: "отзывы о нас",
    },
    {
      name: "контакты",
    },
  ];

  return (
    <UnderHeaderContainer>
      <Block>
        <Image alt="Logo" src={Logo} width={75} height={75} />
        <Block
          $flexDirection="col"
          $marginLeft="l"
          $justifyContent="center"
          $gap="S"
        >
          <Text
            $size="XXL"
            $color="white"
            $fontWeight="XXL"
            $transform="upper"
            $fontFamily="oswald"
            $textAlign="center"
          >
            {NameCompany}
          </Text>
          <Text
            $size="S"
            $color="white"
            $mix="0x10"
            $fontFamily="open"
            $textAlign="center"
          >
            {Services}
          </Text>
        </Block>
      </Block>
      <Block>
        <Block
          $flexDirection="col"
          $justifyContent="center"
          $marginRight="l"
          $gap="S"
        >
          <Text $size="L" $color="white" $fontWeight="XXL" $transform="upper">
            {NumberCompany}
          </Text>
          <Text $size="L" $color="white" $fontWeight="XXL" $transform="upper">
            {NumberCompanySecond}
          </Text>
        </Block>
        <Circle $width="S" $height="S" $background="orange">
          <Image alt="Phone" src={Phone} />
        </Circle>
      </Block>
    </UnderHeaderContainer>
  );
}
