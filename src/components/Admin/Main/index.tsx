import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { YMaps, Placemark, Map, Clusterer } from '@pbe/react-yandex-maps';
import { Button, Input, Modal } from 'antd';
import { Text } from '@/components/Text/styled';
import { EditOutlined, DeleteFilled } from '@ant-design/icons';
import axios from 'axios';
import { AppContext } from '@/context/app-context';
import { useRouter } from 'next/navigation';
import TableMarks from '../TableMarks';

const Block = styled.div``;
type Marks = {
	id: string;
	name: string;
	description: string | null;
	latitude: number;
	longitude: number;
	markerColor: string;
}[];
export default function Main() {
	const colors = [
		{
			id: 0,
			color: '#ed4543',
		},
		{
			id: 1,
			color: '#1e98ff',
		},
		{
			id: 2,
			color: '#177bc9',
		},
		{
			id: 3,
			color: '#1bad03',
		},
		{
			id: 4,
			color: '#595959',
		},
		{
			id: 5,
			color: '#56db40',
		},
	];
	const [token, setToken] = useState<null | string>();
	const router = useRouter();
	const [marks, setMarks] = useState<Marks>([]);
	const [nameMark, setNameMark] = useState('');
	const [discMark, setDiscMark] = useState('');
	const [editingId, setEditingId] = useState<string | null>(null);
	const [openModal, setOpenModal] = useState(false);
	const [coords, setCoords] = useState<number[]>([]);
	const [error, setError] = useState('');
	const [color, setColor] = useState(colors[0].color);
	const [markLocation, setMarksLocation] = useState([55.177884, 59.668194, 13]);
	const getAllMarks = async () => {
		try {
			const { data } = await axios.get(`https://bur-api.macwel.app/api/v1/marker`, {
				headers: { Authorization: `Bearer ${token}` },
			});

			setMarks(data);
		} catch (error: any) {
			const errStatus = error.response.data.statusCode;
			setError(error.response.data.message);
			if (errStatus == 401) {
				localStorage.removeItem('Token');
				router.push('/admin');
			}
			if (errStatus === 403) {
				router.push('/admin/order');
			}
		}
	};

	useEffect(() => {
		const accessToken = localStorage.getItem('accessToken')! as string;
		setToken(accessToken);
		if (!accessToken) {
			router.push('/admin');
		}
	}, []);
	useEffect(() => {
		if (token) {
			getAllMarks();
		}
	}, [token]);

	const handleAddMark = async (event: any) => {
		setOpenModal(true);
		const clickedCoordinates = event.get('coords');
		setCoords([clickedCoordinates[0], clickedCoordinates[1]]);
	};

	const saveMark = async () => {
		try {
			const { data } = await axios.post(
				`https://bur-api.macwel.app/api/v1/marker/create`,
				{
					latitude: coords[0],
					longitude: coords[1],
					name: nameMark,
					description: discMark,
					markerColor: color,
				},
				{
					headers: { Authorization: `Bearer ${token}` },
				},
			);
			getAllMarks();
		} catch (error) {}
		setOpenModal(false);
	};

	const handlePlacemarkDrag = async (event: any, markId: string) => {
		const newCoords = event.get('target').geometry.getCoordinates();
		try {
			const { data } = await axios.post(
				`https://bur-api.macwel.app/api/v1/marker/update`,
				{
					id: markId,
					latitude: newCoords[0],
					longitude: newCoords[1],
				},
				{
					headers: { Authorization: `Bearer ${token}` },
				},
			);
			getAllMarks();
		} catch (error) {}
	};
	const saveEditedName = async () => {
		try {
			const { data } = await axios.post(
				`https://bur-api.macwel.app/api/v1/marker/update`,
				{
					id: editingId,
					name: nameMark,
					description: discMark,
				},
				{
					headers: { Authorization: `Bearer ${token}` },
				},
			);
			getAllMarks();
		} catch (error) {}
		setEditingId(null);
	};

	const cancelEditing = () => {
		setEditingId(null);
		setNameMark('');
	};

	const deleteMark = async (id: string) => {
		try {
			const { data } = await axios.post(
				`https://bur-api.macwel.app/api/v1/marker/delete`,
				{
					id,
				},
				{
					headers: { Authorization: `Bearer ${token}` },
				},
			);
			getAllMarks();
		} catch (error) {}
	};

	return (
		<Block>
			{!error ? (
				<div>
					<Modal
						open={openModal}
						centered
						title={'Добавить новую метку'}
						onCancel={() => setOpenModal(false)}
						footer={
							<>
								<Button onClick={() => setOpenModal(false)}>Cancel</Button>
								<Button className="bg-sky-500" type="primary" onClick={saveMark}>
									Save
								</Button>
							</>
						}
					>
						<Input
							style={{ marginTop: 10 }}
							onChange={(e) => setNameMark(e.target.value)}
							placeholder="Название метки"
						/>
						<Input
							style={{ marginTop: 10 }}
							onChange={(e) => setDiscMark(e.target.value)}
							placeholder="Описание метки"
						/>
						<div
							style={{
								display: 'flex',
								gap: 5,
								marginTop: 10,
							}}
						>
							Выберите цвет:
							{colors.map((el) => (
								<div
									style={{
										background: el.color,
										borderRadius: 6,
										width: 24,
										height: 24,
										cursor: 'pointer',
									}}
									onClick={() => setColor(el.color)}
								></div>
							))}
						</div>
						{color ? (
							<div
								style={{
									marginTop: 10,
									display: 'flex',
									gap: 10,
								}}
							>
								Выбранный цвет:
								<div
									style={{
										background: color,
										borderRadius: 6,
										width: 24,
										height: 24,
									}}
								></div>
							</div>
						) : null}
					</Modal>
					<YMaps
						query={{
							mode: 'debug',
							load: 'package.full',
							apikey: '1b78f20f-50a5-4e5e-b339-9603ad045d05',
						}}
					>
						<Map
							width={'100%'}
							state={{ center: [markLocation[0], markLocation[1]], zoom: markLocation[2] }}
							height={400}
							onClick={handleAddMark}
							defaultState={{ center: [markLocation[0], markLocation[1]], zoom: 15 }}
							// defaultState={{ center: [20.7715239, 28.38564], zoom: 15 }}
						>
							<Clusterer
								options={{
									preset: 'islands#invertedVioletClusterIcons',
									groupByCoordinates: false,
								}}
							>
								{marks.map((el, i) => (
									<Placemark
										key={i}
										defaultGeometry={[el.latitude, el.longitude]}
										options={{
											preset: 'islands#circleIcon',
											iconColor: el.markerColor || 'orange',
											hideIconOnBalloonOpen: false,
											openEmptyHint: true,
											draggable: false,
										}}
										onDragEnd={(event: any) => handlePlacemarkDrag(event, el.id)}
										properties={{
											hintContent: 'Название: ' + el.name + '<br/>' + 'Описание: ' + el.description,
										}}
									/>
								))}
							</Clusterer>
						</Map>
					</YMaps>
					<TableMarks
						marks={marks}
						deleteMark={deleteMark}
						getAllMarks={getAllMarks}
						token={token}
						setMarksLocation={setMarksLocation}
					/>
				</div>
			) : (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<p style={{ color: 'white', fontSize: 25, fontWeight: 700 }}>{error}</p>
				</div>
			)}
		</Block>
	);
}
