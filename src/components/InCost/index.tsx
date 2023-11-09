import { thrinagle } from '@/dummy/thriangle/thriangle';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Thriangle from '../../../public/thriangle.svg';
export default function InCost() {
  return (
    <section className={styles.wrapper} style={{ backgroundColor: '#2c2c2c' }}>
      <div className={`${styles.container}`}>
        <div className={styles.content} style={{ gap: 20, marginTop: 20 }}>
          <h2 style={{ color: 'white' }}>В стоимость бурения входит</h2>
          <div className={styles.shape} />
          <div className={styles.row}>
            <div className={styles.thrinagleRow}>
              {thrinagle.map((el) => (
                <article
                  key={el.number}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '50%',
                  }}>
                  <div className={styles.thriangleNumber}>
                    <Image loading="lazy" src={Thriangle} alt="" width={90} height={90} />
                    <div className={styles.number}>{el.number}</div>
                  </div>
                  <p className={styles.thriangleName}>{el.name}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
