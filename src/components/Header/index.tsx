import { HeaderContainer } from "./styled";
import Image from "next/image";
import { Block } from "../Block/styled";
import ClockSVG from "@svg/time.svg";
import Address from "@svg/address.svg";
import { WorkTime, WorkTimePreText } from "@/texts/works";
import { OurAddress, OurAddressText } from "@/texts/addresses";
import { Link } from "../Link/styled";
import { Text } from "../Text/styled";
import { AppContext } from "@/context/app-context";
import { useContext } from "react";
import { LinkByCitySlug } from "@/dummy/links";
export function Header() {
  // @ts-ignore
  const { width, slug } = useContext(AppContext);
  const arr = LinkByCitySlug[slug].slice(0, 4);

  return (
    <HeaderContainer>
      {/* @ts-ignore */}
      <Block $flexDirection={width < 540 && "col"} $gap={width < 500 && "XS"}>
        <Image alt="123" src={ClockSVG} />
        <Text $size="M" $color="orange" $mix="0x10" $fontFamily="open">
          {WorkTimePreText}:
        </Text>
        <Text
          $size="L"
          $color="white"
          $fontWeight="XXL"
          $transform="upper"
          $fontFamily="oswald"
        >
          {WorkTime}
        </Text>
      </Block>
      {/* @ts-ignore */}
      <Block $gap="M" $flexDirection={width && width < 500 ? "col" : "row"}>
        {arr.map((el) => (
          <Link
            href={el.url}
            $size="XL"
            $transform="upper"
            $color="orange"
            title={`Бурение скважин в ${el.name}`}
            $fontWeight="XXL"
          >
            {el.name}
          </Link>
        ))}
      </Block>
      {/* @ts-ignore */}
      <Block $flexDirection={width < 500 && "col"} $gap={width < 500 && "XS"}>
        <Image alt="123" src={Address} />
        <Text $size="M" $color="orange" $mix="0x10" $fontFamily="open">
          {OurAddressText}
        </Text>
        <Link
          href="/#addresses"
          $size="M"
          $color="white"
          $fontWeight="XXL"
          $transform="upper"
          $fontFamily="oswald"
        >
          {OurAddress}
        </Link>
      </Block>
    </HeaderContainer>
  );
}
