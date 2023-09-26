import styles from "@/styles/Home.module.css";
import { dummyVideo } from "@/dummy/video/video";
export default function Works() {
  return (
    <div className={styles.works}>
      <div className={`${styles.container}`}>
        <div className={styles.content} style={{ gap: 30 }}>
          <div className={styles.nameWorks}>
            <p>Наши работы</p>
          </div>
          <div className={styles.shape}></div>
          <div className={styles.video}>
            {dummyVideo.map((el) => (
              <div className={styles.videoChild} key={el.id}>
                <iframe
                  width="465"
                  height="250"
                  src={el.src}
                  title="Бурение скважины"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
