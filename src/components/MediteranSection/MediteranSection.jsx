import HeroTitle from "../Hero-Title/HeroTitle";

export default function MediterraneanSection() {
  const cards = [
    {
      img: "/images/mediteran-section/valencia.jpg",
      title: "Valencia",
      price: "$1990",
      badge: "50% Off",
      link: "/valencia",
    },
    {
      img: "/images/mediteran-section/maldives.jpg",
      title: "Maldives",
      price: "$2300",
      badge: "Special Offer",
      link: "/maldives",
    },
    {
      img: "/images/mediteran-section/italy.jpg",
      title: "Italy Tour",
      price: "$2560",
      badge: null,
      link: "/italy",
    },
  ];

  return (
    <div className="py-10 sm:py-20 flex flex-col items-center text-center px-4">
        <HeroTitle mainTitle={"World Tour"} topTitle={"The Unforgettable"} subTitle={"Travel the world, explore diverse cultures, and create unforgettable memories on every continent"} textColor={"#2a2a2a"} />

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10 mt-10 sm:mt-16 w-full max-w-6xl mx-auto">
        {cards.map((c, idx) => (
          <a
            key={idx}
            href={c.link}
            className="relative group overflow-hidden rounded-md block cursor-pointer"
          >
            {/* IMAGE */}
            <img
              src={c.img}
              alt={c.title}
              className="w-full h-40 sm:h-64 md:h-[500px] object-cover rounded-md 
                         transition-transform duration-500 group-hover:scale-110"
            />

            {/* DARK OVERLAY */}
            <div
              className="absolute inset-0 bg-black/20 
                         group-hover:bg-black/40 transition-all duration-500"
            ></div>

            {/* BADGE */}
            {c.badge && (
              <div className="absolute top-2 sm:top-4 right-0 bg-teal-400 text-white px-3 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm font-semibold rounded-l-md">
                {c.badge}
              </div>
            )}

            {/* TITLE + PRICE */}
            <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 text-left text-white drop-shadow-xl">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{c.title}</h3>
              <p className="text-sm sm:text-base md:text-lg">{c.price}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
