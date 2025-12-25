export default function Footer() {
  return (
<footer className="w-full bg-[#2a2a2a] text-white py-20 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 text-center">

    {/* LOGO + INFO */}
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-5xl font-bold text-primary">Atlas.</h1>

      <p className="text-gray-400 max-w-md">
        Atlas is a trusted travel agency offering carefully planned journeys and unforgettable travel experiences around the world.
      </p>

      <div className="flex flex-col gap-3 text-gray-300 text-sm">
        <p className="flex items-center justify-start gap-2">
          <span>📧</span> atlasagency@gmail.com
        </p>
        <p className="flex items-center justify-start gap-2">
          <span>📞</span> 011 513123
        </p>
        <p className="flex items-center justify-start gap-2">
          <span>📍</span> Makedonska 15a
        </p>
      </div>
    </div>

    {/* NEWSLETTER */}
    <div className="flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">
        Subscribe to our Newsletter
      </h2>

      <p className="text-gray-400 mb-6 max-w-md">
        Subscribe to our newsletter and stay updated with the latest travel deals, tips, and destinations.
      </p>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        <input
          type="text"
          placeholder="Name"
          className="w-full bg-[#3a3a3a] p-3 rounded text-white outline-none text-center"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-[#3a3a3a] p-3 rounded text-white outline-none text-center"
        />
        <button className="w-full bg-primary text-white font-bold py-3 rounded hover:opacity-90 transition">
          SUBSCRIBE
        </button>
      </div>
    </div>

  </div>

  {/* COPYRIGHT */}
  <div className="text-center text-gray-500 mt-16 text-sm">
    © 2018 Qode Interactive
  </div>
</footer>

  );
}
