//@ts-nocheck
import styles from "@/styles/Home.module.css";
import axios from "axios";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Modal = ({
  setOpenModal,
  title = "Рассчитать стоимость",
}: {
  setOpenModal: (value: boolean) => void;
  title?: string;
}) => {
  const [phone, setPhone] = useState("");
  const sendForm = async () => {
    if (process.env.NODE_ENV !== "development") {
      ym(94753079, "reachGoal", "modalPhone1");
    }
    await axios.post(`/api`, {
      phone,
    });
    if (process.env.NODE_ENV !== "development") {
      ym(94753079, "reachGoal", "modalPhone2");
    }
    setOpenModal(false);
  };
  const ref = useRef();
  function useOutsideClick(ref) {
    useEffect(() => {
      function handleClickOutside(e: any) {
        if (ref.current && !ref.current.contains(e.target)) {
          setOpenModal(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideClick(ref);
  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <div className={styles.rowCenter}>
          <div className={styles.modalBody} ref={ref}>
            <div className={styles.modalHeader}>
              <p className={styles.close} onClick={() => setOpenModal(false)}>
                X
              </p>
            </div>
            <div className={styles.bodyModal}>
              <h2>{title}</h2>
              <p>Наш специалист свяжется с вами в течение 15 минут</p>
              <input
                type="tel"
                placeholder="Телефон*"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPhone(e.target.value)
                }
              ></input>

              <button onClick={sendForm}>Отправить</button>
              <p className={styles.soglashenie}>
                Нажимая на кнопку, вы принимаете
                <Link href="/">Положение</Link>и<Link href="/">Согласие</Link>
                на обработку персональных данных.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
