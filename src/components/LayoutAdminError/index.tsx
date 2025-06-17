import Sidebar from '../Admin/Sidebar';
import LayoutAdmin from '../LayoutAdmin';

export default function LayoutAdminError({ error }: { error: number | undefined }) {
	return (
		<LayoutAdmin>
			<Sidebar />
			<div
				style={{
					background: 'white',
					display: 'flex',
					justifyContent: 'center',
					borderRadius: 10,
					alignItems: 'center',
					padding: 20,
					margin: '10px 50px',
					fontSize: 20,
				}}
			>
				Ошибка: {error}
			</div>
		</LayoutAdmin>
	);
}
