import Main from '@/components/Admin/Main';
import { cookies } from 'next/headers';
import Sidebar from '@/components/Admin/Sidebar';
import axios, { AxiosError } from 'axios';
import { redirect } from 'next/navigation';
import LayoutAdmin from '@/components/LayoutAdmin';
import LayoutAdminError from '@/components/LayoutAdminError';

export default async function AdminPage() {
	const cookieStore = await cookies();
	const token = cookieStore.get('accessToken')?.value;
	if (!token) redirect('/admin');

	try {
		const getMarks = await axios.get(`http://159.69.188.136:3500/api/v1/marker`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return (
			<LayoutAdmin>
				<Sidebar />
				<Main marksData={getMarks.data} />
			</LayoutAdmin>
		);
	} catch (error) {
		if (error instanceof AxiosError) {
			return <LayoutAdminError error={error.response?.status} />;
		}
	}
}
