import ModeratorTable from '@/components/Admin/ModeratorTable';
import Sidebar from '@/components/Admin/Sidebar';
import LayoutAdmin from '@/components/LayoutAdmin';
import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function ModeratorPage() {
	const cookieStore = await cookies();
	const token = cookieStore.get('accessToken')?.value;
	if (!token) {
		redirect('/admin');
	}
	return (
		<LayoutAdmin>
			<Sidebar />
			<div
				style={{
					// background: "white",
					padding: '10px 50px ',
				}}
			>
				<ModeratorTable />
			</div>
		</LayoutAdmin>
	);
}
