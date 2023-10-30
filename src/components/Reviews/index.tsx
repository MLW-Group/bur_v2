'use client';
//@ts-nocheck
import { reviews } from '@/dummy/reviews';
import styles from '@/styles/Home.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Review } from '../common/Review';
const Reviews = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content} style={{ gap: 50 }}>
          <h2>Отзывы</h2>
          <div className={styles.rowCenter}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                320: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                980: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              navigation
              pagination={{ clickable: true }}
              onSwiper={(swiper: any) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}>
              {reviews.map((review, i) => (
                <SwiperSlide key={i}>
                  <Review text={review.text} name={review.name} star={review.star} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Reviews;
