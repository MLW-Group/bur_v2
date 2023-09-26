import styles from "@/styles/Home.module.css";
import Image from "next/image";
export default function Experiense() {
  const experiense = [
    {
      id: 0,
      src: "/circle1.png",
    },
    {
      id: 1,
      src: "/circle2.png",
    },
    {
      id: 2,
      src: "/circle3.png",
    },
    {
      id: 3,
      src: "/circle4.png",
    },
  ];
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: "url(/exp_back.jpg)",
        backgroundPosition: "50% 0%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "40vh",
      }}
    >
      <div className={styles.container}>
        <div className={styles.content} style={{ gap: 50 }}>
          <h1 style={{ color: "white" }}>Наш опыт</h1>
          <div className={styles.shape} />
        </div>
        <div className={styles.thrinagleRow}>
          {experiense.map((el) => (
            <div
              key={el.id}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
              }}
            >
              <div className={styles.thriangleNumber}>
                <Image src={el.src} alt="" width={350} height={300} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
