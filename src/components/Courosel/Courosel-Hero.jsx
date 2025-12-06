import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function ReviewCarousel() {
  const items = [
    {
      img: "./images/avatar.avif",
      text: "Lorem ipsum dolor sit amet.",
      name: "Marko Marković",
    },
    {
      img: "./images/avatar.avif",
      text: "Quisquam aliquid fuga id.",
      name: "Ana Anić",
    },
    {
      img: "./images/avatar.avif",
      text: "Vrlo profesionalno, top preporuka!",
      name: "Petar Petrović",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2500, // svake 2.5s prebaci slajd
        disableOnInteraction: false, // da ne stane kada klikneš strelice
      }}
      className="w-full h-full"
    >
      {items.map((item, i) => (
        <SwiperSlide key={i}>
          <div className=" w-full h-full flex flex-col justify-center items-center p-4 gap-5 rounded-xl">
            <img
              src={item.img}
              className="w-45 h-45 rounded-full object-cover"
            />
            <p className="text-3xl text-center text-black">{item.text}</p>
            <p className="text-xl text-black">{item.name}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
