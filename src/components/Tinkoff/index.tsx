"use client";

import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";
import Modal from "../Modal";
import ModalReCall from "../ModalRe";

export default function Tinkoff() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalRe, setOpenModalRe] = useState(false);

  return (
    <div className={styles.wrapper} id="tinkoff">
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
          <div
            className={styles.tinkoffBlock}
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <div style={{ padding: "40px 0px 40px 40px", flex: "20" }}>
              <p className={styles.tinkoffBlockTitle}>
                Получите консультацию по рассрочке от нашего специалиста
              </p>
              <div className={styles.freeTinkoff}>
                <p
                  style={{
                    color: "white",
                    fontSize: 28,
                    margin: "20px 20px 0px 20px",
                    fontFamily: "sans-serif",
                  }}
                >
                  совершенно <b>бесплатно</b>
                </p>
                <div
                  style={{
                    background: "white",
                    width: "90%",
                    height: 3,
                    borderStyle: "solid",
                    borderColor: "rgba(0,0,0,1)",
                    borderWidth: 0,
                    borderRadius: "70%",
                  }}
                />
                <div className={styles.payment}>
                  <Image
                    loading="lazy"
                    src={"/tinkoff.svg"}
                    width={150}
                    height={50}
                    alt=""
                  />
                  <Image
                    loading="lazy"
                    src={"/dolyami.svg"}
                    width={200}
                    height={50}
                    alt=""
                  />
                </div>
              </div>
              <button onClick={() => setOpenModal(true)}>
                Оставить заявку
              </button>
            </div>
            <div style={{ paddingTop: "40px" }}>
              <Image
                loading="lazy"
                src={"/agent.png"}
                style={{ height: "100%" }}
                width={500}
                height={450}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} setOpenModalRe={setOpenModalRe} />}
      {openModalRe && <ModalReCall setOpenModalRe={setOpenModalRe} />}

    </div>
  );
}
