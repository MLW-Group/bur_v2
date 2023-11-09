"use client";
import { tooltips } from "@/dummy/sqhema";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import ModalReCall from "../ModalRe";
import InputMask from "react-input-mask";

const Sqhema = () => {
  const [openModalRe, setOpenModalRe] = useState(false);

  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const sendForm = async () => {
    if (phone.length == 0 || phone.includes("_")) {
      setError("Заполните номер телефона");
    } else {
      console.log(phone.length);
      if (process.env.NODE_ENV !== "development") {
        // @ts-ignore
        ym(94753079, "reachGoal", "zamer1");
      }
      await axios.post(`/api`, {
        phone,
      });
      if (process.env.NODE_ENV !== "development") {
        // @ts-ignore
        ym(94753079, "reachGoal", "zamer2");
      }
      setOpenModalRe(true);
    }
  };
  return (
    <section
      className={styles.wrapper}
      style={{
        backgroundImage:
          "url(https://m-files.cdnvideo.ru/lpfile/d/d/0/dd04481bd8d766c9d182c33bd35528ab.jpg)",
      }}
    >
      <div className={`${styles.container} ${styles.sqemaContainer}`}>
        <div className={styles.content} style={{ gap: 50 }}>
          <h2>Cхема работы</h2>
          <div className={styles.shape} />
          <div className={styles.row}>
            {tooltips.map((tolltip, i) => (
              <div className={styles.tooltip} key={i}>
                <h3>{tolltip.number}</h3>
                <p>{tolltip.text}</p>
              </div>
            ))}
          </div>
          <div className={styles.rowCenter}>
            <InputMask
              alwaysShowMask={true}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setPhone(e.target.value), setError("");
              }}
              mask="+7 999 999 99 99"
              placeholder="Телефон*"
            ></InputMask>
            <button onClick={sendForm}>Записаться на замер</button>
          </div>
          {error && (
            <p
              style={{
                textAlign: "center",
                color: "red",
                fontWeight: 500,
                fontSize: "20px",
              }}
            >
              {error}
            </p>
          )}
        </div>
      </div>
      {openModalRe && <ModalReCall setOpenModalRe={setOpenModalRe} />}
    </section>
  );
};
export default Sqhema;
