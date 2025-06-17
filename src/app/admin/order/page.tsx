import OrderTable from '@/components/Admin/OrderTable';
import Sidebar from '@/components/Admin/Sidebar';
import LayoutAdmin from '@/components/LayoutAdmin';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function OrderPage() {
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
					padding: '10px 50px ',
				}}
			>
				<OrderTable />
			</div>
		</LayoutAdmin>
	);
}
