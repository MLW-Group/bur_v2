
import { LinkByCitySlug } from '@/dummy/links';
import LogoBur from '@/public/logo.svg';
import Phone from '@/public/phone.svg';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Header({ slug }: { slug: keyof typeof LinkByCitySlug }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerCenter}>
        <div className={styles.logo}>
          <Image src={LogoBur} width={60} height={60} alt="Центр Бурения" />
          <p>Центр Бурения</p>
        </div>
        <div className={styles.cities}>
          {LinkByCitySlug[slug].map((el, idx) => (
            <div key={idx} className={styles.citiesRow}>
              <Link title={el.title} href={el.url}>
                {el.name}
                {LinkByCitySlug[slug].length - 1 !== idx && ','}
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.phone}>
          <div className={styles.phoneColumn}>
            <Link style={{ color: '#FFF' }} href={`tel:8(904) 974-60-60}>`}>
              8 (904) 974-60-60
            </Link>
            <p>Звоните сейчас</p>
          </div>
          <Image src={Phone} width={60} height={60} alt="Телефон" />
        </div>
      </div>
    </header>
  );
}
