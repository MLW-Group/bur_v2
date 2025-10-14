import Link from 'next/link';
import styles from './style.module.css';
export default function NotFound() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.notFound}>
				<div className={styles.text}>
					<span className={styles.title}>404</span>
					<span className={styles.subtitle}>Ошибка! Страница не найдена!</span>
					<span className={styles.info}>
						Страница возможно была удалена или не существовала. <Link className={styles.link} href="/">Вернуться на главную</Link>
					</span>
				</div>
			</div>
		</div>
	);
}
