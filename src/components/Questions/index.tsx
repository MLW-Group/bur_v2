import styles from "@/styles/Home.module.css";
const Questions = () => {
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
            <button className={styles.button}>Заказать звонок</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Questions;
