
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const CarouselComponentVideo = ({ images }) => {
    console.log(images);


    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

            {images.map((image, index) => (

                <SwiperSlide key={index}>
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
