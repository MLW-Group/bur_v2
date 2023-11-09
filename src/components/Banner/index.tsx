"use client";

import { dummyBannerLeft, dummyBannerRight } from "@/dummy/banner/banner";
import { BannerSlugTitle } from "@/dummy/bannerSlug";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Modal from "../Modal";
import { useState } from "react";
export default function Banner({ slug }: { slug: string }) {
  const title = BannerSlugTitle.filter((el) => el.name === slug)[0].title;
  const [openModal, setOpenModal] = useState(false);
  return (
    <section className={styles.banner}>
      <div className={styles.bannerOpacity}>
        <div
          style={{
            maxWidth: "55%",
            textAlign: "center",
          }}
        >
          <h1 className={styles.mainTitle}>
            {title} <br />с гарантией по договору
            <span
              style={{
                fontSize: 40,
                borderBottom: "1.5px solid #fbcf00",
                fontWeight: 500,
                // margin: 10,
              }}
            >
              {" "}
              от 1000 руб/м.
            </span>
          </h1>

          <div className={styles.columnBanner}>
            <div
              style={{
                display: "flex",
                minWidth: "30%",
                minHeight: "25vh",
                justifyContent: "space-around",
                flexDirection: "column",
              }}
            >
              {dummyBannerLeft.map((el) => (
                <article
                  key={el.name}
                  style={{
                    flexDirection: "row",
                    // background: "red",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Image src={el.img} width={45} height={45} alt="" />
                  <span style={{ marginLeft: 10, fontSize: 22 }}>
                    {el.name}
                  </span>
                </article>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                width: "40%",
                minHeight: "25vh",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              {dummyBannerRight.map((el) => (
                <article
                  key={el.name}
                  style={{
                    // background: "red",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Image src={el.img} width={45} height={45} alt="" />
                  <span style={{ fontSize: 22 }}>{el.name}</span>
                </article>
              ))}
            </div>
          </div>
          <p style={{ fontSize: 20 }}>
            Ответьте на 3 вопроса и узнайте стоимость бурения скважины.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                opacity: 1,
                background: "black",
                // height: "60px",
                // width: "40%",
                padding: "10px 20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ fontSize: 20 }}>
                Рассрочка и кредитование без переплат <br /> до двух лет
              </p>
            </div>
          </div>
          <button
            style={{
              marginTop: 10,
              letterSpacing: 1,
              padding: "10px 30px",
              borderRadius: 6,
              border: "none",
              fontWeight: 600,
              background:
                "linear-gradient(180deg,rgba(255,235,59,1),rgba(249,168,37,1))",
              cursor: "pointer",
            }}
          >
            <Link href="#tinkoff" style={{ color: "#1E1E1E" }}>
              УЗНАТЬ ПОДРОБНЕЕ
            </Link>
          </button>
          <div style={{ marginTop: 10, marginBottom: 10 }}>
            <p>+ Получите гарантированный подарок</p>
          </div>
          <button
            style={{
              marginTop: 10,
              letterSpacing: 1,
              padding: "15px 40px",
              borderRadius: 6,
              border: "none",
              fontWeight: 600,
              background:
                "linear-gradient(180deg,rgba(255,235,59,1),rgba(249,168,37,1))",
              cursor: "pointer",
            }}
            onClick={() => setOpenModal(true)}
          >
            УЗНАЙТЕ СТОИМОСТЬ ВАШЕЙ СКВАЖИНЫ
          </button>
        </div>
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </section>
  );
}
