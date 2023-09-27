//@ts-nocheck
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useEffect, useRef } from "react";
const Modal =({setOpenModal, title = "Рассчитать стоимость"}: {setOpenModal: (value: boolean) => void, title?: string}) => {
      const ref = useRef()
    function useOutsideClick(ref) {
        useEffect(() => {
            function handleClickOutside(e: any) {
                if (ref.current && !ref.current.contains(e.target)) {
                    setOpenModal(false)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }
    useOutsideClick(ref)
    return (
        <div className={styles.modal}>
            <div className={styles.container}>
                <div className={styles.rowCenter}>
                <div className={styles.modalBody} ref={ref}>
                    <div className={styles.modalHeader}>
                        <p className={styles.close} onClick={() => setOpenModal(false)}>X</p>
                    </div>
                    <div className={styles.bodyModal}>
                        <h1>{title}</h1>
                        <p>Наш специалист свяжется с вами в течение 15 минут</p>
                        <input type="tel" placeholder="Телефон*"></input>
                        <button>Отправить</button>
                        <p className={styles.soglashenie}>
                            Нажимая на кнопку, вы принимаете
                            <Link href="/">Положение</Link>
                             и
                            <Link href="/">Согласие</Link>
                             на обработку персональных данных.
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Modal