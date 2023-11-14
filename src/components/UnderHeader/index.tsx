import { UnderHeaderContainer } from "./styled";
import Image from "next/image";
import Logo from "@img/logo.png";
import Phone from "@svg/phone.svg";
import { NameCompany, Services } from "@/texts/name";
import { NumberCompany } from "@/texts/number";
import { Block } from "../Block/styled";
import { Link } from "../Link/styled";
import { Text } from "../Text/styled";
import { Circle } from "../Circle/styled";
export function UnderHeader() {
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
        <Image alt="123" src={Logo} width={75} height={75} />
        <Block $flexDirection="col" $marginLeft="l" $justifyContent="center">
          <Text
            $size="XXL"
            $color="white"
            $fontWeight="XXL"
            $transform="upper"
            $fontFamily="oswald"
          >
            {NameCompany}
          </Text>
          <Text $size="S" $color="white" $mix="0x10" $fontFamily="open">
            {Services}
          </Text>
        </Block>
      </Block>
      <Block $justifyContent="SE" $gap="XL">
        {dummy.map((el, i) => (
          <Text
            key={i}
            $size="XS"
            $fontFamily="open"
            $color="white"
            $transform="upper"
            $fontWeight="XL"
          >
            {el.name}
          </Text>
        ))}
      </Block>
      <Block>
        <Block $flexDirection="col" $justifyContent="center" $marginRight="l">
          <Text $size="L" $color="white" $fontWeight="XXL" $transform="upper">
            {NumberCompany}
          </Text>
          <Text $size="L" $color="white" $fontWeight="XXL" $transform="upper">
            {NumberCompany}
          </Text>
        </Block>
        <Circle $width="S" $height="S" $background="orange">
          <Image alt="123" src={Phone} />
        </Circle>
      </Block>
    </UnderHeaderContainer>
  );
}
