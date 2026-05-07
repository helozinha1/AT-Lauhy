import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import dos estilos do Swiper (obrigatórios)
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import do seu CSS Module
import styles from './Banner.module.css';

// Import das imagens
import { banner2, banner1 } from '../../assets';

const listaBanners = [banner1, banner2];

export default function Banner() {
    return (
        <div className={styles.bannerContainer}>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                className={styles.bannerSwiper}>
                {listaBanners.map((imagem, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={imagem}
                            alt={`Banner institucional ${index + 1}`}
                            className={styles.bannerImage}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
