import Main from '@/components/Admin/Main';
import { cookies } from 'next/headers';
import Sidebar from '@/components/Admin/Sidebar';
import axios from 'axios';
import { redirect } from 'next/navigation';
import LayoutAdmin from '@/components/LayoutAdmin';

export default async function AdminPage() {
	const cookieStore = await cookies();
	const token = cookieStore.get('accessToken')?.value;
	if (!token) redirect('/admin');

	const getMarks = await axios.get(`https://bur-api.macwel.app/api/v1/marker`, {
		headers: { Authorization: `Bearer ${token}` },
	});
	return (
		<LayoutAdmin>
			<Sidebar />
			<Main marksData={getMarks.data} />
		</LayoutAdmin>
	);
}
