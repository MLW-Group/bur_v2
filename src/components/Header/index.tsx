"use client";

import styles from "@/styles/Home.module.css";
import LogoBur from "@/public/logo.svg";
import Phone from "@/public/phone.svg";
import Image from "next/image";
import { LinkByCitySlug } from "@/dummy/links";

export default function Header({
  slug,
}: {
  slug: keyof typeof LinkByCitySlug;
}) {
  return (
    <div className={styles.header}>
      <div className={styles.headerCenter}>
        <div className={styles.logo}>
          <Image src={LogoBur} width={60} height={60} alt="Центр Бурения" />
          <p>Центр Бурения</p>
        </div>
        <div className={styles.cities}>
          {LinkByCitySlug[slug].map((el, idx) => (
            <div key={idx} className={styles.citiesRow}>
              <a title={el.title} href={el.url}>
                {el.name}
                {LinkByCitySlug[slug].length - 1 !== idx && ","}
              </a>
            </div>
          ))}
        </div>
        <div className={styles.phone}>
          <div className={styles.phoneColumn}>
            <a style={{ color: "#FFF" }} href={`tel:8(904) 974-60-60}>`}>
              8 (904) 974-60-60
            </a>
            <p>Звоните сейчас</p>
          </div>
          <Image src={Phone} width={60} height={60} alt="Телефон" />
        </div>
      </div>
    </div>
  );
}
