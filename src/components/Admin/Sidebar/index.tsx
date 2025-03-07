import Image from 'next/image';
import Logo from '@svg/logo.svg';
import { Link } from '@/components/Link/styled';
import { Text } from '@/components/Text/styled';
import { usePathname } from 'next/navigation';
import styles from './index.module.css';
import { useEffect, useState } from 'react';
export default function Sidebar() {
	const pathname = usePathname();
	const [role, setRole] = useState('');
	useEffect(() => {
		const getRole = localStorage.getItem('role')! as string;
		setRole(getRole);
		// if (!role) {
		//   return router.push("/admin");
		// }
		// if (role !== "ADMIN") {
		//   return router.push("/admin/order");
		// }
	}, []);
	const checkRole = role === 'ADMIN';
	return (
		<div>
			<div
				style={{
					width: '100%',
					padding: '10px 50px',
					display: 'flex',
					alignItems: 'center',
					gap: 10,
				}}
			>
				<div className={styles.container}>
					{/* <Link $size="L" href="/">
              <Image src={Logo} width={60} height={60} alt="Logo" />
            </Link> */}
					<Link $size="XXL" href="/" $transform="upper" $color="orange" $fontWeight="XL">
						Главная
					</Link>
					{checkRole ? (
						<Link
							$size="XXL"
							className={!pathname.includes('/admin/panel') ? styles.link : styles.linkActive}
							href="/admin/panel"
							$transform="upper"
							$color="orange"
							$fontWeight="XL"
						>
							Карта
						</Link>
					) : null}
					<Link
						$size="XXL"
						className={!pathname.includes('/admin/order') ? styles.link : styles.linkActive}
						href="/admin/order"
						$transform="upper"
						$color="orange"
						$fontWeight="XL"
					>
						Заявки
					</Link>
					{checkRole ? (
						<Link
							$size="XXL"
							className={!pathname.includes('/admin/moderator') ? styles.link : styles.linkActive}
							href="/admin/moderator"
							$transform="upper"
							$color="orange"
							$fontWeight="XL"
						>
							Модераторы
						</Link>
					) : null}
				</div>
			</div>
		</div>
	);
}
