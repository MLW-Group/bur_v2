import styles from "@/styles/Home.module.css";
import Image from "next/image";
export default function Tinkoff() {
  return (
    <div className={styles.wrapper}>
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
          <div className={styles.tinkoffBlock}>
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
                <Image src={"/tinkoff.svg"} width={150} height={50} alt="" />
                <Image src={"/dolyami.svg"} width={200} height={50} alt="" />
              </div>
            </div>
            <button>Оставить заявку</button>
            <div style={{ position: "absolute", right: 10, bottom: 0 }}>
              <Image src={"/agent.png"} width={500} height={450} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
