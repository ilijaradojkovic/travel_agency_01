import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function ReviewCarousel() {
const items = [
  {
    img: "./images/avatar.avif",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    name: "Marko Marković",
  },
  {
    img: "./images/avatar.avif",
    text: "Quisquam aliquid fuga id, sed do eiusmod tempor incididunt.",
    name: "Ana Anić",
  },
  {
    img: "./images/avatar.avif",
    text: "Vrlo profesionalno, top preporuka!",
    name: "Petar Petrović",
  },
  {
    img: "./images/avatar.avif",
    text: "Fantastično iskustvo, sve je bilo savršeno organizovano.",
    name: "Jovana Jovanović",
  },
  {
    img: "./images/avatar.avif",
    text: "Putovanje koje ću dugo pamtiti, preporučujem svima.",
    name: "Marko Stojanović",
  },
  {
    img: "./images/avatar.avif",
    text: "Odlična agencija, sve je prošlo glatko i profesionalno.",
    name: "Ivana Ilić",
  },
  {
    img: "./images/avatar.avif",
    text: "Svaka preporuka, fantastična usluga i prelepe destinacije.",
    name: "Nikola Nikolić",
  },
  {
    img: "./images/avatar.avif",
    text: "Predivno iskustvo, sigurno ću opet putovati sa njima.",
    name: "Maja Majić",
  },
  {
    img: "./images/avatar.avif",
    text: "Organizacija na visokom nivou, sve pohvale timu.",
    name: "Filip Filipović",
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
          <div className="w-full h-full flex flex-col justify-center items-center p-2 sm:p-4 gap-3 sm:gap-5 rounded-xl">
            <img
              src={item.img}
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-45 md:h-45 rounded-full object-cover"
            />
            <p className="text-lg sm:text-2xl md:text-3xl text-center text-black px-2">{item.text}</p>
            <p className="text-base sm:text-lg md:text-xl text-black">{item.name}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
