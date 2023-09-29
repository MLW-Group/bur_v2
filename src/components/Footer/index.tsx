import styles from "@/styles/Home.module.css";
import Link from "next/link";
const Footer = () => {
    return (
        <div className={styles.wrapper} style={{position: 'relative', padding: '0'}}>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A4480d151a72d00333a038c77e2afeda04367115503eec14cb3708dd52b35a127&amp;source=constructor" width="100%" height="344" frameBorder="0"></iframe>
            <div className={styles.container} >
                <div className={styles.infoCompany}>
                    <h4>Контакты</h4>
                    <p>+7 904 974 60 60</p>
                    <Link href="mailto:Flooring-decor@mail.ru">Flooring-decor@mail.ru</Link>
                    <p>Челябинская область, г. Златоуст, ул. Карла Маркса, д.11</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;