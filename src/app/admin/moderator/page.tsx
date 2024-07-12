"use client";
import ModeratorTable from "@/components/Admin/ModeratorTable";
import Sidebar from "@/components/Admin/Sidebar";
import axios from "axios";
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
export default function ModeratorPage() {
  const router = useRouter();
  const getCurrentUser = async (token: string) => {
    try {
      const { data } = await axios.get(
        `https://bur-api.macwel.app/api/v1/marker`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("🚀 ~ getCurrentUser ~ data:", data);
      // if (data) {
      //   router.push("/admin/order");
      // }
    } catch (error) {
      if (error) {
        router.push("/admin");
      }
    }
  };
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken")! as string;
    getCurrentUser(accessToken);
  }, []);
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
