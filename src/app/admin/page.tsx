"use client";
import Main from "@/components/Admin/Main";
import Sidebar from "@/components/Admin/Sidebar";
import { Header } from "@/components/Header";
import "../global.css";
import SignInForm from "@/components/SignInForm";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { AppContext } from "@/context/app-context";
import { useRouter } from "next/navigation";
const Block = styled.div`
  width: 100vw;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0.05) 100%
    ),
    url(/img/grid.png), black 50% / cover no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function AdminPage() {
  const router = useRouter()
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken")! as string
    if (accessToken) {
      router.push('/admin/order')
    }
  }, []);
  return (
    <Block>
      <div className={"container"} id="container">
        <SignInForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
            </div>
          </div>
        </div>
      </div>
    </Block>
  );
}
