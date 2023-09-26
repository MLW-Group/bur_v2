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
        {Array(star).map((el, i) => (
          <Image src={"/star.svg"} alt="star" width={24} height={24} key={i} />
        ))}
      </div>
    </div>
  );
};
