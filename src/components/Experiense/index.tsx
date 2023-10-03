import styles from '@/styles/Home.module.css';
import Image from 'next/image';
export default function Experiense() {
  const experiense = [
    {
      id: 0,
      src: '/circle1.png',
      alt: '11 лет опыта работы',
    },
    {
      id: 1,
      src: '/circle2.png',
      alt: '528 скважин пробурили',
    },
    {
      id: 2,
      src: '/circle3.png',
      alt: '8 единиц техники',
    },
    {
      id: 3,
      src: '/circle4.png',
      alt: '208 116 метров',
    },
  ];

  return (
    <section
      className={styles.wrapper}
      style={{
        backgroundImage: 'url(/exp_back.jpg)',
        backgroundPosition: '50% 0%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '40vh',
      }}>
      <div className={styles.container}>
        <div className={styles.content} style={{ gap: 50 }}>
          <h2 style={{ color: 'white' }}>Наш опыт</h2>
          <div className={styles.shape} />
        </div>
        <div className={styles.thrinagleRow}>
          {experiense.map((el) => (
            <div
              key={el.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                // width: "50%",
              }}>
              <div className={styles.thriangleNumber}>
                <Image src={el.src} alt={el.alt} width={300} height={250} loading="eager" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
