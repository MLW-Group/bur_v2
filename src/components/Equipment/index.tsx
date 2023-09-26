import styles from "@/styles/Home.module.css";
import Image from "next/image";
export default function Equipment() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Применяем насосное оборудование</h1>
        </div>
        <div className={styles.EqCol}>
          <div className={styles.EqRow}>
            <div style={{ minWidth: "20%" }}>
              <Image src={"/omni.jpg"} width={150} height={100} alt="" />
            </div>
            <p>
              Польский завод Omnigena начал свою деятельность в 1974 году.
              Изготовление глубинных насосов является одним из основных
              направлений его деятельности. С тех пор предприятие накопило
              уникальный опыт в производстве и разработке насосной техники.
            </p>
          </div>
          <div className={styles.EqRow}>
            <div style={{ minWidth: "20%" }}>
              <Image src={"/nasos.jpg"} width={150} height={100} alt="" />
              <p style={{ fontSize: 20, color: "red", marginTop: 10 }}>
                Гарантия - 3 года.
              </p>
            </div>
            <p>
              {"    "}
              Надёжность насосов, подтверждается 46 летним опытом эксплуатации,
              а так же применяемых в конструкции комплектующих. Так, рабочие
              колеса изготавливаются из высокопрочного, износостойкого пластика
              норил, который используют передовые производители насосного
              оборудования. Насосы так же комплектуются электрическим кабелем,
              допущенным к контакту с питьевой водой, в отличии от дешёвых
              аналогов. Конденсаторная коробка, устанавливается на поверхности,
              что повышает ремонтопригодность, при выходе из строя, и не требует
              извлечение насоса из скважины.
            </p>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img src={"/text.png"} alt="" />
            <img src={"/text1.png"} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
