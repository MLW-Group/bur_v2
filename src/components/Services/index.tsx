"use client";

import { BannerSlugTitle } from "@/dummy/bannerSlug";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";
import Modal from "../Modal";
import ModalReCall from "../ModalRe";
export default function Services({ slug }: { slug: string }) {
  const [openModal, setOpenModal] = useState(false);
  const [openModalRe, setOpenModalRe] = useState(false);
  const serviceTitle = BannerSlugTitle.filter((el) => el.name === slug)[0]
    .services;
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
    <section
      className={styles.wrapper}
      style={{
        backgroundImage: "url(/services_bac.jpg)",
        backgroundPosition: "50% 50%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.container}>
        <div className={styles.content} style={{ gap: 50 }}>
          <h2>{serviceTitle}</h2>
          <div className={styles.shape} />
        </div>
        <div className={styles.servicesRow}>
          {services.map((el) => (
            <div key={el.id} className={styles.servicesBlock}>
              <p>{el.name}</p>
              <Image
                loading="lazy"
                src={el.img}
                width={150}
                height={150}
                alt=""
              />
              <button onClick={() => setOpenModal(true)}>
                Рассчитать стоимость
              </button>
            </div>
          ))}
        </div>
      </div>
      {openModal && (
        <Modal setOpenModal={setOpenModal} setOpenModalRe={setOpenModalRe} />
      )}
      {openModalRe && <ModalReCall setOpenModalRe={setOpenModalRe} />}
    </section>
  );
}
