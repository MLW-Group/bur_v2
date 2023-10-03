import styles from '@/styles/Home.module.css';
import { tooltips } from '@/dummy/sqhema';

const Sqhema = () => {
  return (
    <section
      className={styles.wrapper}
      style={{
        backgroundImage:
          'url(https://m-files.cdnvideo.ru/lpfile/d/d/0/dd04481bd8d766c9d182c33bd35528ab.jpg)',
      }}>
      <div className={styles.container}>
        <div className={styles.content} style={{ gap: 50 }}>
          <h2>Cхема работы</h2>
          <div className={styles.shape} />
          <div className={styles.row}>
            {tooltips.map((tolltip, i) => (
              <div className={styles.tooltip} key={i}>
                <h3>{tolltip.number}</h3>
                <p>{tolltip.text}</p>
              </div>
            ))}
          </div>
          <div className={styles.rowCenter}>
            <input type="tel" placeholder="Телефон*" />
            <button>Записаться на замер</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Sqhema;
