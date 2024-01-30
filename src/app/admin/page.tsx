"use client";
import Main from "@/components/Admin/Main";
import Sidebar from "@/components/Admin/Sidebar";
import { Header } from "@/components/Header";
import '../global.css'
import SignInForm from "@/components/SignInForm";
import { useState } from "react";
import styled from "styled-components";
import { AppContext } from "@/context/app-context";
const Block = styled.div`
  width: 100vw;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0.05) 100%
    ),
    url(/img/grid.png), black 50% / cover no-repeat;
  height: 100vh;
  display:flex;
  justify-content:center;
  align-items:center;
`;
export default function AdminPage() {
  const token = localStorage.getItem('Token')

  return (
    <AppContext.Provider
      value={{ token }}
    >
      <Block>
        <div className={'container'} id="container">
          <SignInForm />
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
              </div>
            </div>
          </div>
        </div>
      </Block >
    </AppContext.Provider>
  );
}
