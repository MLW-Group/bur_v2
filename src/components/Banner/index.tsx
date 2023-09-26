import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { dummyBannerLeft, dummyBannerRight } from "@/dummy/banner/banner";
export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerOpacity}>
        <div
          style={{
            maxWidth: "55%",
            textAlign: "center",
          }}
        >
          <span
            style={{
              fontSize: 56,
              fontWeight: 600,
            }}
          >
            Бурение скважин под ключ <br />с гарантией по договору
          </span>
          <span
            style={{
              fontSize: 40,
              borderBottom: "1.5px solid #fbcf00",
              fontWeight: 500,
              // margin: 10,
            }}
          >
            {" "}
            от 1000 руб/м.
          </span>
          <div className={styles.columnBanner}>
            <div
              style={{
                display: "flex",
                minWidth: "30%",
                minHeight: "25vh",
                justifyContent: "space-around",
                flexDirection: "column",
              }}
            >
              {dummyBannerLeft.map((el) => (
                <div
                  key={el.name}
                  style={{
                    flexDirection: "row",
                    // background: "red",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Image src={el.img} width={45} height={45} alt="" />
                  <span style={{ marginLeft: 10, fontSize: 22 }}>
                    {el.name}
                  </span>
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                width: "40%",
                minHeight: "25vh",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              {dummyBannerRight.map((el) => (
                <div
                  key={el.name}
                  style={{
                    // background: "red",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Image src={el.img} width={45} height={45} alt="" />
                  <span style={{ fontSize: 22 }}>{el.name}</span>
                </div>
              ))}
            </div>
          </div>
          <span style={{ fontSize: 20 }}>
            Ответьте на 3 вопроса и узнайте стоимость бурения скважины.
          </span>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                opacity: 1,
                background: "black",
                // height: "60px",
                // width: "40%",
                padding: "10px 20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ fontSize: 20 }}>
                Рассрочка и кредитование без переплат <br /> до двух лет
              </p>
            </div>
          </div>
          <button
            style={{
              marginTop: 10,
              letterSpacing: 1,
              padding: "10px 30px",
              borderRadius: 6,
              border: "none",
              fontWeight: 600,
              background:
                "linear-gradient(180deg,rgba(255,235,59,1),rgba(249,168,37,1))",
              cursor: "pointer",
            }}
          >
            УЗНАТЬ ПОДРОБНЕЕ
          </button>
          <div style={{ marginTop: 10, marginBottom: 10 }}>
            <p>+ Получите гарантированный подарок</p>
          </div>
          <button
            style={{
              marginTop: 10,
              letterSpacing: 1,
              padding: "15px 40px",
              borderRadius: 6,
              border: "none",
              fontWeight: 600,
              background:
                "linear-gradient(180deg,rgba(255,235,59,1),rgba(249,168,37,1))",
              cursor: "pointer",
            }}
          >
            УЗНАЙТЕ СТОИМОСТЬ ВАШЕЙ СКВАЖИНЫ
          </button>
        </div>
      </div>
    </div>
  );
}
