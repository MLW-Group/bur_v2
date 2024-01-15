"use client";
import Image from "next/image";
import styled from "styled-components";
import Logo from "@svg/logo.svg";
import { Link } from "@/components/Link/styled";
import { Text } from "@/components/Text/styled";
const Block = styled.div`
`;
export default function Sidebar() {
  return (
    <Block>
      <div
        style={{
          width: "100%",
          padding: 10,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: 10,
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 30,
          }}
        >
          <Link $size="L" href="/">
            <Image src={Logo} width={60} height={60} alt="Logo" />
          </Link>
          <Text $size="XXL" $transform="upper" $color="orange" $fontWeight="XL">
            Админ панель
          </Text>
        </div>
      </div>
    </Block>
  );
}
