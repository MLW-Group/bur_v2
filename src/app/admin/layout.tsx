'use client'
import axios from "axios";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const getMe = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `https://bur-api.macwel.app/api/v1/user/me`,
  //       {
  //         withCredentials: true,
  //       }
  //     );
  //     console.log("🚀 ~ getMe ~ data:", data.data.role);
  //     // localStorage.setItem('role', data.data)
  //   } catch (error: any) {
  //     console.log("🚀 ~ getMe ~ error:", error);
  //   }
  // };
  // useEffect(() => {
  //   getMe();
  // }, []);
  return <>{children}</>;
}
