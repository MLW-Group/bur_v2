'use client';

import Image from 'next/image';
import Logo from '@svg/logo.svg';
import { Link } from '@/components/Link/styled';
import { Text } from '@/components/Text/styled';
import { usePathname, useRouter } from 'next/navigation';
import styles from './index.module.css';
import { useEffect, useState } from 'react';
import { deleteCookie, getCookie } from 'cookies-next/client';
import axios from 'axios';
export default function Sidebar() {
	const pathname = usePathname();
	const router = useRouter();
	const [role, setRole] = useState('');
	const token = getCookie('accessToken');

	const getCurrentUser = async () => {
		try {
			const { data } = await axios.get(`https://bur-api.macwel.app/api/v1/user/me`, {
				headers: { Authorization: `Bearer ${token}` },
			});
			setRole(data.data.role);
		} catch (error) {
			if (error) {
				router.push('/admin');
			}
		}
	};
	useEffect(() => {
		getCurrentUser();
	}, []);
	const checkRole = role === 'ADMIN';
	const logout = async () => {
		try {
			const { data } = await axios.post(`https://bur-api.macwel.app/api/v1/auth/logout`, {
				headers: { Authorization: `Bearer ${token}` },
			});
			if (data.success) {
				deleteCookie('accessToken');
				router.push('/admin');
			}
		} catch (error) {
			console.log('🚀 ~ logout ~ error:', error);
		}
	};
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
					<Text
						onClick={logout}
						style={{ cursor: 'pointer' }}
						$size="XXL"
						$transform="upper"
						$color="orange"
						$fontWeight="XL"
					>
						Выход
					</Text>
				</div>
			</div>
		</div>
	);
}
