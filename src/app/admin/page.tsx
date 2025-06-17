import '../global.css';
import SignInForm from '@/components/SignInForm';
import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
	const cookieStore = await cookies();
	const token = cookieStore.get('accessToken')?.value;
	console.log('🚀 ~ AdminPage ~ token:', token);
	if (token) {
		const { data } = await axios.get(`https://bur-api.macwel.app/api/v1/user/me`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		if (data?.data) {
			redirect('/admin/order');
		}
	}

	return (
		<div
			style={{
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				background:
					'linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), url(/img/grid.png), black 50% / cover no-repeat;',
			}}
		>
			<div className={'container'} id="container">
				<SignInForm />
				<div className="overlay-container">
					<div className="overlay">
						<div className="overlay-panel overlay-right"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
