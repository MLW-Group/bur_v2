import { OrderContainer, BlockTitle, BlockGlassContainer } from "./styled";
import { useContext, useState } from "react";
import Image from "next/image";
import { Text } from "../Text/styled";
import Subtract from "@svg/Subtract.svg";
import { Button } from "../Button/styled";
import { Circle } from "../Circle/styled";
import { Block } from "../Block/styled";
import { AppContext } from "@/context/app-context";
import { NumberCompany, NumberCompanySecond } from "@/texts/number";
export function Order() {
  // @ts-ignore
  const { width, modal, setTypeModal } = useContext(AppContext);

  return (
    <OrderContainer id="contacts">
      <BlockTitle>
        <Text
          $size="70"
          $transform="upper"
          $fontWeight="XXL"
          $color="white"
          $textAlign="center"
        >
          закажите скважину
        </Text>
      </BlockTitle>
      <BlockGlassContainer>
        <Text
          $size="L"
          $fontWeight="M"
          $color="gray"
          $fontStyle="italic"
          $fontFamily="open"
        >
          Обратившись к нам, вы можете заказать только работы по бурению
          скважины в Челябинской и Свердловской областях или воспользоваться
          услугами ее оборудования под ключ. Позвоните нам прямо сейчас и
          получите возможность без каких-либо ограничений круглосуточно
          пользоваться свежей и чистой водой.
        </Text>
      </BlockGlassContainer>
      <Block
        $justifyContent="center"
        $flexDirection={width && width < 900 ? "col" : "row"}
      >
        <Block $flexDirection="col" $gap="S" $justifyContent="center">
          <Text $size="40" $transform="upper" $fontWeight="XXL" $color="orange">
            {NumberCompany}
          </Text>
          <Text $size="40" $transform="upper" $fontWeight="XXL" $color="orange">
            {NumberCompanySecond}
          </Text>
        </Block>
        <Button
          $mix="17x52"
          $size="M"
          $background="orange"
          $color="white"
          $transform="upper"
          $fontWeight="XXL"
          onClick={() => {
            setTypeModal("modalPhone4");
            modal.setOpenModal(true);
          }}
        >
          {/* @ts-ignore */}
          <Text $size="XL" $whiteSpace="nowrap">
            рассчитать стоимость
          </Text>
        </Button>
      </Block>
    </OrderContainer>
  );
}
