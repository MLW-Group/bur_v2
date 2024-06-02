"use client";
import ModeratorTable from "@/components/Admin/ModeratorTable";
import Sidebar from "@/components/Admin/Sidebar";
import axios from "axios";
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
export default function ModeratorPage() {
  return (
    <Block>
      <Sidebar />
      <div
        style={{
          // background: "white",
          padding: "10px 50px ",
        }}
      >
        <ModeratorTable />
      </div>
    </Block>
  );
}
