
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CarouselComponentVideo = ({ images }) => {
    console.log(images);


    return (
        <Swiper className="mySwiper">
            {images.map((image, index) => (
                <SwiperSlide>
                    <video
                        class="object-cover img-instructor rounded-md h-full"
                        src={image.imagen}
                        autoPlay
                        loop
                        muted
                    >
                    </video>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CarouselComponentVideo;
