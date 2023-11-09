//@ts-nocheck
import styles from "@/styles/Home.module.css";
import axios from "axios";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ModalReCall = ({
  setOpenModalRe,
}: {
  setOpenModalRe: (value: boolean) => void;
}) => {
  const [phone, setPhone] = useState("");
 

  const ref = useRef();
  function useOutsideClick(ref) {
    useEffect(() => {
      function handleClickOutside(e: any) {
        if (ref.current && !ref.current.contains(e.target)) {
          setOpenModalRe(false);
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
              <p className={styles.close} onClick={() => setOpenModalRe(false)}>
                X
              </p>
            </div>
            <div
              className={styles.bodyModal}
              style={{ marginTop: "15px", marginBottom: "20px" }}
            >
              <h2
                style={{
                  fontSize: 24,
                }}
              >
                Ваша заявка принята в работу.
              </h2>
              <h2
                style={{
                  fontSize: 22,
                  fontWeight: "normal",
                }}
              >
                В ближайшее время с вами свяжется наш специалист.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalReCall;
