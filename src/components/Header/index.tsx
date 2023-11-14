import { HeaderContainer } from "./styled";
import Image from "next/image";
import { Block } from "../Block/styled";
import ClockSVG from "@svg/time.svg";
import Address from "@svg/address.svg";
import { WorkTime, WorkTimePreText } from "@/texts/works";
import { OurAddress, OurAddressText } from "@/texts/addresses";
import { Link } from "../Link/styled";
import { Text } from "../Text/styled";

export function Header() {
  return (
    <HeaderContainer>
      <Block>
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
      <Block>
        <Image alt="123" src={Address} />
        <Text $size="M" $color="orange" $mix="0x10" $fontFamily="open">
          {OurAddressText}
        </Text>
        <Link
          href="/#addresses"
          $size="L"
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
