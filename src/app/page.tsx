'use client'
import Banner from "@/components/Banner";
import Equipment from "@/components/Equipment";
import Experiense from "@/components/Experiense";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InCost from "@/components/InCost";
import KnowCost from "@/components/KnowCost";
import Questions from "@/components/Questions";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Sqhema from "@/components/Sqhema";
import Tinkoff from "@/components/Tinkoff";
import Types from "@/components/Types";
import Works from "@/components/Works";
import styles from "@/styles/Home.module.css";

import { Roboto } from "next/font/google";
const inter = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["cyrillic"],
});
export default function Home() {
  return (
    <main className={`${inter.className} ${styles.main}`}>
      <Header slug="main" />
      <Banner slug="chelyabinsk" />
      <Services slug="chelyabinsk" />
      <Works />
      <Tinkoff />
      <Types />
      <Experiense />
      <Equipment />
      <KnowCost slug="chelyabinsk" />
      <Reviews />
      <InCost />
      <Sqhema />
      <Questions />
      <Footer />
    </main>
  );
}
