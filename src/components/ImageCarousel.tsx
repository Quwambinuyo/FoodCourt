import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { imageData } from "../utils/data";
import "swiper/css/navigation";
import "swiper/css";
import "../index.css";

const ImageCarousel = () => {
  return (
    <div className="w-[100%] m-auto">
      <div className="mt-5">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          scrollbar={{ draggable: true }}
          className="mySwiper"
        >
          {imageData.map((item) => {
            const { imageSrc, name, id } = item;
            return (
              <SwiperSlide>
                <div key={id}>
                  <div
                    className="w-full rounded-xl overflow-hidden relative md:object-center"
                    style={{
                      backgroundImage: `url(${imageSrc})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "200px",
                    }}
                  >
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-black text-2xl font-bold  px-3 py-1 rounded capitalize">
                      {name}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageCarousel;
