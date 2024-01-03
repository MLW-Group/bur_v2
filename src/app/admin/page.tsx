"use client";
import Main from "@/components/Admin/Main";
import Sidebar from "@/components/Admin/Sidebar";
import { Header } from "@/components/Header";
import styled from "styled-components";
const Block = styled.div`
  width: 100vw;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0.05) 100%
    ),
    url(/img/grid.png), black 50% / cover no-repeat;
  height: 100vh;
`;
export default function AdminPage() {
  return (
    <Block>
      <Sidebar />
      <Main />
    </Block>
  );
}
 