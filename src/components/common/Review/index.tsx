//@ts-nocheck
import styles from "@/styles/Home.module.css";
import Image from "next/image";
export const Review = ({
  text,
  name,
  star,
}: {
  text: string;
  name: string;
  star: number;
}) => {
  return (
    <div className={styles.review}>
      <p>{text}</p>
      <div className={styles.infoReviewer}>
        <p>{name}</p>
        <div className={styles.starContainer}>
          {[...Array(star).keys()].map((el, i) => (
            <Image
              loading="lazy"
              src={"/star.svg"}
              alt="star"
              width={24}
              height={24}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
