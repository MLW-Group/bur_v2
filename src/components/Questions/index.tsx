import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Modal from "../Modal";
const Questions = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content} style={{gap: 45}}>
          <h1>Остались вопросы?</h1>
          <div className={styles.shape} />
          <div className={styles.row}>
            <div className={styles.textInfoContainer}>
                <span>Закажите обратный звонок</span>
                <p>Наш специалист ответит в течение 15 минут</p>
            </div>
            <button className={styles.button} onClick={() => setOpenModal(true)}>Заказать звонок</button>
          </div>
        </div>
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} title="Закажите обратный звонок"/>}
    </div>
  );
};
export default Questions;
