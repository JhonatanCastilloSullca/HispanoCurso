import React, { useState } from "react";

const CarouselComponentVideo = ({ images }) => {
    console.log(images);
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div id="default-carousel" className="relative w-full h-full" data-carousel="slide">
            <div className="relative overflow-hidden rounded-lg h-full">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`hidden duration-700 ease-in-out`}
                        data-carousel-item
                    >
                        <img
                            src={image.image}
                            alt={`Slide ${index + 1}`}
                            className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        />
                    </div>
                ))}
            </div>

            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-gray-500"
                            }`}
                        aria-current={index === currentSlide ? "true" : "false"}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => handleSlideChange(index)} // Cambiar slide
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default CarouselComponentVideo;
