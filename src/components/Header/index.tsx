import styles from "@/styles/Home.module.css";
import { cities } from "@/dummy/cities/cities";
import LogoBur from "../../../public/logo.svg";
import Phone from "../../../public/phone.svg";
import Image from "next/image";
export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerCenter}>
        <div className={styles.logo}>
          <Image src={LogoBur} width={60} height={60} alt={""}></Image>
          <p>Центр Бурения</p>
        </div>
        <div className={styles.cities}>
          {cities.map((el) => (
            <div key={el.id} className={styles.citiesRow}>
              <a href="">{el.name}, </a>
            </div>
          ))}
        </div>
        <div className={styles.phone}>
          <div className={styles.phoneColumn}>
            <p>8(904) 974-60-60</p>
            <p>Звоните сейчас</p>
          </div>
          <Image src={Phone} width={60} height={60} alt={""} />
        </div>
      </div>
    </div>
  );
}
