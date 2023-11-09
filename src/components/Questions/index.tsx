"use client";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Modal from "../Modal";
import ModalReCall from "../ModalRe";
const Questions = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalRe, setOpenModalRe] = useState(false);
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content} style={{ gap: 45 }}>
          <h2>Остались вопросы?</h2>
          <div className={styles.shape} />
          <div className={styles.row}>
            <div className={styles.textInfoContainer}>
              <span>Закажите обратный звонок</span>
              <p>Наш специалист ответит в течение 15 минут</p>
            </div>
            <button
              className={styles.button}
              onClick={() => setOpenModal(true)}
            >
              Заказать звонок
            </button>
          </div>
        </div>
      </div>
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          setOpenModalRe={setOpenModalRe}
          title="Закажите обратный звонок"
        />
      )}
      {openModalRe && (
        <ModalReCall
          setOpenModalRe={setOpenModalRe}
        />
      )}
    </section>
  );
};
export default Questions;
