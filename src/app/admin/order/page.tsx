"use client";
import OrderTable from "@/components/Admin/OrderTable";
import Sidebar from "@/components/Admin/Sidebar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styled from "styled-components";
const Block = styled.div`
  width: 100vw;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0.05) 100%
    ),
    url(/img/grid.png), black 50% / cover no-repeat;
  min-height: 100vh;
`;
export default function OrderPage() {
 
  return (
    <Block>
      <Sidebar />
      <div
        style={{
          padding: "10px 50px ",
        }}
      >
        <OrderTable />
      </div>
    </Block>
  );
}
