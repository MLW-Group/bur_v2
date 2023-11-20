import { UnderHeaderContainer } from "./styled";
import Image from "next/image";
import Logo from "@svg/logo.svg";
import Phone from "@svg/phoneWhite.svg";
import { NameCompany, Services } from "@/texts/name";
import { NumberCompany } from "@/texts/number";
import { Block } from "../Block/styled";
import { Link } from "../Link/styled";
import { Text } from "../Text/styled";
import { Circle } from "../Circle/styled";
import { AppContext } from "@/context/app-context";
import { useContext } from "react";
export function UnderHeader() {
  const width = useContext(AppContext);

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
      {/* <Block $justifyContent="SE" $gap="XL">
        {dummy.map((el, i) => (
          <Link
            key={i}
            $size="XS"
            $fontFamily="open"
            $color="white"
            $transform="upper"
            $fontWeight="XL"
          >
            {el.name}
          </Link>
        ))}
      </Block> */}
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
