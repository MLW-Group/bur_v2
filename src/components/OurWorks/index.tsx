import Image from 'next/image';
import { OurWorksContainer, Block } from './styled';
import { useContext, useState } from 'react';
import Preview from '@img/preview.jpg';
import Preview1 from '@img/preview1.webp';
import Preview2 from '@img/preview3.jpeg';
import Preview3 from '@img/preview4.jpeg';
import Preview4 from '@img/preview5.jpeg';
import { Text } from '../Text/styled';
import { AppContext } from '@/context/app-context';
export function OurWorks() {
	const [changeImg, setChangeImg] = useState<number[]>([]);
	const changeBlock = (id: number) => {
		setChangeImg([...changeImg, id]);
	};
	const { width } = useContext(AppContext);

	const dummyVideo = [
		{
			id: 0,
			src: 'https://www.youtube.com/embed/1nyvu92WZ_8?autoplay=1',
			img: Preview,
		},
		{
			id: 1,
			src: 'https://www.youtube.com/embed/SC5607DTZzI?autoplay=1',
			img: Preview1,
		},
		{
			id: 2,
			src: 'https://www.youtube.com/embed/UgRIFNg_k_E?autoplay=1',
			img: Preview2,
		},
		{
			id: 3,
			src: 'https://www.youtube.com/embed/zR7b5fRtrQ4?autoplay=1',
			img: Preview3,
		},
		{
			id: 4,
			src: 'https://www.youtube.com/embed/QUpEkQ3wKHs?autoplay=1',
			img: Preview4,
		},
	];
	return (
		<OurWorksContainer>
			<Text $size="XXL" $fontWeight="XXL" $transform="upper" $color="white" $textAlign="center">
				Наши работы
			</Text>
			<Block>
				{dummyVideo.map((el) => (
					<div key={el.id}>
						<div onClick={() => changeBlock(el.id)}>
							{changeImg.includes(el.id) ? (
								<iframe
									width="465"
									height="250"
									src={el.src}
									title="Бурение скважины"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								></iframe>
							) : (
								<div
									style={{
										position: 'relative',
										width: width && width < 530 ? 320 : 465,
										height: 250,
									}}
								>
									<Image
										loading="lazy"
										src={el.img}
										width={width && width < 530 ? 320 : 465}
										// layout="responsive"
										height={250}
										alt=""
										style={{
											objectFit: 'cover',
											position: 'relative',
											filter: 'brightness(0.8)',
										}}
									/>
									<div
										aria-label="Смотреть"
										title="Смотреть"
										style={{
											position: 'absolute',
											top: '50%',
											left: '50%',
											transform: 'translate(-50%, -50%)',
											display: 'flex',
											justifyContent: 'center',
											transition: '0.3s ease-in-out',
											cursor: 'pointer',
										}}
									>
										<svg height="50%" version="1.1" viewBox="0 0 68 48" width="50%">
											<path
												d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
												fill="#f00"
											></path>
											<path d="M 45,24 27,14 27,34" fill="#fff"></path>
										</svg>
									</div>
								</div>
							)}
						</div>
					</div>
				))}
			</Block>
		</OurWorksContainer>
	);
}
