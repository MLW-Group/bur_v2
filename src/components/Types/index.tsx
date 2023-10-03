import styles from '@/styles/Home.module.css';
import Image from 'next/image';
export default function Types() {
  const services = [
    {
      id: 0,
      name: 'Установка УРБ 2А2',
      img: '/types1.jpg',
    },
    {
      id: 1,
      name: 'Малогабаритная установка',
      img: '/types2.jpg',
    },
  ];
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content} style={{ gap: 50 }}>
          <h2>Виды буровых установок</h2>
          <div className={styles.shape} />
        </div>
        <div className={styles.servicesRow}>
          {services.map((el) => (
            <article key={el.id} className={styles.servicesBlock}>
              <p>{el.name}</p>
              <Image src={el.img} width={250} height={200} alt="" />
              <button>Подробнее</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
