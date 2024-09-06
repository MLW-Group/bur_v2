'use client';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';
import { MainBottom } from '@/components/MainBottom';
import { MarqueeBlock } from '@/components/Marquee';
import { Offer } from '@/components/Offer';
import { Order } from '@/components/Order';
import { Receive } from '@/components/Receive';
import { SliderPage } from '@/components/SliderPage';
import { UnderHeader } from '@/components/UnderHeader';
import styled from 'styled-components';
import { AppContext } from '../../context/app-context';
import Resize from '@/hooks/resize';
import { useContext, useState } from 'react';
import Modal from '@/components/Modal';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LinkByCitySlug } from '@/dummy/links';
import ModalRe from '@/components/ModalRe';
import { InCost } from '@/components/InCost';
import { OurWorks } from '@/components/OurWorks';
import { Calculator } from '@/components/Calculator';
import { Cities } from '@/dummy/cities';

const Block = styled.div`
	width: 100vw;
	background-image: linear-gradient(rgba(1, 2, 2, 0.2) 0%, rgba(255, 255, 255, 0) 100%), url('/img/grid.png'),
		linear-gradient(rgba(1, 2, 2, 0.25) 0%, rgba(1, 2, 2, 0.25) 100%),
		linear-gradient(0deg, rgba(1, 2, 2, 1) 0%, rgba(1, 2, 2, 1) 16%, rgba(0, 0, 0, 0) 43%, rgba(255, 255, 255, 0) 100%),
		url('/img/back1.webp');
	// background-repeat: round;
	background-size: contain;
	@media (max-width: 1500px) {
		background-size: auto, 1322px, auto, auto, auto, cover;
	}
	// background-attachment: scroll, scroll, scroll, scroll, scroll;
	// padding-top: 0px;
	background-color: rgba(0, 0, 0, 0.6);
	background-blend-mode: multiply;
`;

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }): Promise<Metadata> {
//   return {
//     authors: {
//       name: "MLW Studio",
//       url: "https://t.me/kit1736",
//     },
//     creator: "MLW Studio, @kit1736",
//     ...meta[params.slug],
//   };
// }

// export async function generateStaticParams() {
//   return shoes.map((shoe: any) => ({
//     slug: shoe,
//   }));
// }
const shoes = [
	'ekb',
	'aramil',
	'bakal',
	'beryozovsky',
	'chebarkul',
	'kamensk',
	'katav-ivanovsk',
	'minyar',
	'sim',
	'miass',
	'polevskoy',
	'satka',
	'sysertskiy-region',
	'verkhnyaya-pyshma',
	'yuryuzan',
	'zlatoust',
	'kusa',
	'karabash',
	'ust-katav',
];
export default function Home({ params }: { params: { slug: keyof typeof LinkByCitySlug } }) {
	const { width } = Resize();
	const [openModal, setOpenModal] = useState(false);
	const [openModalRe, setOpenModalRe] = useState(false);
	const [typeModal, setTypeModal] = useState(null);
	const [paramsModal, setParamsModal] = useState(undefined);
	// if (!shoes.includes(params.slug)) return notFound();
	return (
		<AppContext.Provider
			value={{
				width,
				modal: { openModal, setOpenModal },
				typeModal,
				setTypeModal,
				paramsModal,
				setParamsModal,
				slug: params.slug,
			}}
		>
			<Block>
				<Header />
				<UnderHeader />
				<Main />
				<MainBottom />
				<Calculator />
				<SliderPage />
				<Offer />
				<Receive />
				<InCost />
				<OurWorks />
				<Order />
				{/* <MarqueeBlock /> */}
				<Footer />
				{openModal && <Modal setOpenModal={setOpenModal} setOpenModalRe={setOpenModalRe} />}
				{openModalRe && <ModalRe setOpenModalRe={setOpenModalRe} />}
			</Block>
		</AppContext.Provider>
	);
}
