import { InCostContainer, BlockNumber, BlockContainer } from "./styled";
import { useContext } from "react";
import { AppContext } from "@/context/app-context";
import { Text } from "../Text/styled";
import { Block } from "../Block/styled";
export function InCost() {
  // @ts-ignore
  const { width } = useContext(AppContext);
  const dummy = [
    {
      number: "01",
      title: "Выезд буровой машины до места работы",
      subTitle:
        "Буровая машина с выездом на место работы. Эффективное бурение скважин для надежного водоснабжения.",
      align: "left",
    },
    {
      number: "02",
      title: "Бурение скважин",
      subTitle:
        "Профессиональное бурение скважин – надежное водоснабжение для вашего объекта.",
      align: "right",
    },
    {
      number: "03",
      title: "Обсадка скважины",
      subTitle:
        "Экспертная обсадка скважин для долгосрочной и безопасной работы вашего водоснабжения.",
      align: "left",
    },
    {
      number: "04",
      title: "Продувка скважины до визуально чистой воды",
      subTitle:
        "Продувка скважин до кристально чистой воды – ваш надежный путь к безупречному водоснабжению.",
      align: "right",
    },
    {
      number: "05",
      title: "Выдача паспорта скважины",
      subTitle:
        "Полная документация: выдача паспорта скважины для прозрачного контроля и управления вашим водоснабжением.",
      align: "left",
    },
  ];
  return (
    <InCostContainer>
      {dummy.map((el, i) => (
        <BlockContainer
          $borderBottom="2pxGray"
          $alignItems="center"
          $justifyContent={el.align == "left" ? "FS" : "FS"}
          $flexDirection={el.align == "left" ? "reverse" : "row"}
        >
          <BlockNumber key={i}>
            <Block $flexDirection="col">
              <Text
                $size="200"
                $color="white"
                $textFill="transparent"
                $textStroke="white"
                $fontWeight="XXL"
              >
                {el.number}
              </Text>
            </Block>
          </BlockNumber>
          <BlockContainer
            $flexDirection="col"
            $height="100%"
            $gap="M"
            $alignItems={el.align == "left" ? "FE" : "FS"}
          >
            <Text
              $size="40"
              $fontStyle="italic"
              $color="white"
              $fontWeight="XXL"
              $transform="upper"
              $textAlign="center"
            >
              {el.title}
            </Text>
            <Text $size="24" $color="white" $textAlign="center">
              {el.subTitle}
            </Text>
          </BlockContainer>
        </BlockContainer>
      ))}
    </InCostContainer>
  );
}
