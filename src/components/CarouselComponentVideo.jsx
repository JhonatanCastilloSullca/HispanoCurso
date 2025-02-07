import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const CarouselComponentVideo = ({ images }) => {
    const swiperRef = useRef(null);

    const handleSlideChange = () => {
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            video.pause();
        });
    };

    useEffect(() => {
        const swiper = swiperRef.current.swiper;
        swiper.on('slideChange', handleSlideChange);

        return () => {
            swiper.off('slideChange', handleSlideChange);
        };
    }, []);

    return (
        <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            ref={swiperRef}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <video
                        className="object-cover img-instructor rounded-md h-full"
                        src={image.imagen}
                        controls
                        loop
                    >
                    </video>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CarouselComponentVideo;
