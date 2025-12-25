export default function FeatureSection() {
  const items = [
    {
      img: "/icons/restaurants.png",
      title: "Restaurants",
      desc: "Aenean commodo ligula eget dolor. Lorem ipsum"
    },
    {
      img: "/icons/sightseeing.png",
      title: "Sightseeing",
      desc: "Aenean commodo ligula eget dolor. Lorem ipsum"
    },
    {
      img: "/icons/shops.png",
      title: "Shops & Boutiques",
      desc: "Aenean commodo ligula eget dolor. Lorem ipsum"
    },
    {
      img: "/icons/stay.png",
      title: "Where to Stay",
      desc: "Aenean commodo ligula eget dolor. Lorem ipsum"
    }
  ];

  return (
    <section className="w-full py-20 md:mt-30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 place-items-center">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center gap-4">
            <img
              src={item.img}
              alt={item.title}
              className="w-20 h-20 transition-transform duration-300 cursor-pointer hover:-translate-y-2"
            />
            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed w-[70%]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
    
  );
}
