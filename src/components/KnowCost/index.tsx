"use client";
import { BannerSlugTitle } from "@/dummy/bannerSlug";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
export default function KnowCost({ slug }: { slug: string }) {
  const [phone, setPhone] = useState("");
  const sendForm = async () => {
    if (process.env.NODE_ENV !== "development") {
      // @ts-ignore
      ym(94753079, "reachGoal", "modalPhone1");
    }
    await axios.post(`/api`, {
      phone,
    });
    if (process.env.NODE_ENV !== "development") {
      // @ts-ignore
      ym(94753079, "reachGoal", "modalPhone2");
    }
  };
  const knowCostTitle = BannerSlugTitle.filter((el) => el.name === slug)[0]
    .knowCost;
  return (
    <div
      className={styles.wrapper}
      style={{
        background: "#fafafa",
      }}
    >
      <div className={styles.container}>
        <div
          className={styles.content}
          style={{
            gap: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={styles.tinkoffBlock} style={{ background: "none" }}>
            <p
              className={styles.tinkoffBlockTitle}
              style={{
                color: "black",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {knowCostTitle}
            </p>
            <p
              style={{ maxWidth: "70%", fontSize: "22px", marginTop: "100px" }}
            >
              За время работы, мы пробурили 528 скважин и побывали во всех
              населенных пунктах/ садоводческих товариществах Горно-Заводской
              зоны, поэтому знаем глубину залегания воды
            </p>
            <p style={{ maxWidth: "70%", fontSize: "22px", marginTop: "30px" }}>
              Специалисты нашей компании помогут: <br />
              1. Выбрать наиболее подходящий вариант обустройства. <br />
              2. Рассчитают стоимость скважины.
            </p>
            <div
              className={styles.rowCenter}
              style={{
                justifyContent: "flex-start",
                marginTop: 50,
                marginBottom: 10,
              }}
            >
              <input
                type="tel"
                placeholder="Телефон*"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPhone(e.target.value)
                }
              />
              <button onClick={sendForm}>Узнать стоимость</button>
            </div>
            <span>
              Нажимая на кнопку, вы принимаете{" "}
              <a href="https://bur-center.ru/regulation.html">Положение</a> и{" "}
              <a href="https://bur-center.ru/consent.html">Согласие</a> на
              обработку персональных данных
            </span>
            <div style={{ position: "absolute", right: 10, bottom: 0 }}>
              <Image src={"/ag1.png"} width={300} height={400} alt="" />
              <p style={{ marginTop: 10 }}>
                Гл. инженер <br /> Корнилов Евгений Александрович
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
