"use client";

import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";
import Modal from "../Modal";
export default function Services() {
  const [openModal, setOpenModal] = useState(false)
  const services = [
    {
      id: 0,
      name: "Бурение скважин",
      img: "/services1.jpg",
    },
    {
      id: 1,
      name: "Обустройство скважин",
      img: "/services2.jpg",
    },
    {
      id: 2,
      name: "Подводка воды к дому и разводка в доме",
      img: "/services3.jpg",
    },
  ];
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: "url(/services_bac.jpg)",
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.container}>
        <div className={styles.content} style={{ gap: 50 }}>
          <h1>Услуги</h1>
          <div className={styles.shape} />
        </div>
        <div className={styles.servicesRow}>
          {services.map((el) => (
            <div key={el.id} className={styles.servicesBlock}>
              <p>{el.name}</p>
              <Image src={el.img} width={150} height={150} alt="" />
              <button onClick={() => setOpenModal(true)}>Рассчитать стоимость</button>
            </div>
          ))}
        </div>
      </div>
      {openModal && <Modal setOpenModal={setOpenModal}/>}
    </div>
  );
}
