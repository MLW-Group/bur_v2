import ModeratorTable from '@/components/Admin/ModeratorTable';
import Sidebar from '@/components/Admin/Sidebar';
import LayoutAdmin from '@/components/LayoutAdmin';
import LayoutAdminError from '@/components/LayoutAdminError';
import axios, { AxiosError } from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function ModeratorPage() {
	const cookieStore = await cookies();
	const token = cookieStore.get('accessToken')?.value;
	if (!token) {
		redirect('/admin');
	}
	try {
		const getModerators = await axios.get(`http://159.69.188.136:3500/api/v1/user`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return (
			<LayoutAdmin>
				<Sidebar />
				<div
					style={{
						padding: '10px 50px ',
					}}
				>
					<ModeratorTable moderators={getModerators.data.data} />
				</div>
			</LayoutAdmin>
		);
	} catch (error) {
		if (error instanceof AxiosError) {
			return <LayoutAdminError error={error.response?.status} />;
		}
	}
}
