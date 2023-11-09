"use client";
import YouTube from "react-youtube";
import { dummyVideo } from "@/dummy/video/video";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Image from "next/image";

export default function Works() {
  const [changeImg, setChangeImg] = useState<number[]>([]);
  const changeBlock = (id: number) => {
    setChangeImg([...changeImg, id]);
  };
  return (
    <div className={styles.works}>
      <div className={`${styles.container}`}>
        <div className={styles.content} style={{ gap: 30 }}>
          <div className={styles.nameWorks}>
            <h2>Наши работы</h2>
          </div>
          <div className={styles.shape}></div>
          <div className={styles.video}>
            {dummyVideo.map((el) => (
              <div className={styles.videoChild} key={el.id}>
                <div onClick={() => changeBlock(el.id)}>
                  {changeImg.includes(el.id) ? (
                    <iframe
                      width="465"
                      height="250"
                      src={el.src}
                      title="Бурение скважины"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                  ) : (
                    <div
                      style={{
                        position: "relative",
                        width: 465,
                        height: 250,
                      }}
                    >
                      <Image
                        loading="lazy"
                        src={el.img}
                        width={465}
                        height={250}
                        alt=""
                        style={{
                          objectFit: "cover",
                          position: "relative",
                          filter: "brightness(0.8)",
                        }}
                      />
                      <div
                        className={styles.buttonYT}
                        aria-label="Смотреть"
                        title="Смотреть"
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <svg
                          height="50%"
                          version="1.1"
                          viewBox="0 0 68 48"
                          width="50%"
                        >
                          <path
                            d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                            fill="#f00"
                          ></path>
                          <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                        </svg>
                      </div>
                      {/* <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          background: "red",
                          width: 80,
                          height: 50,
                          border
                        }}
                      >
                        11
                      </div> */}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
