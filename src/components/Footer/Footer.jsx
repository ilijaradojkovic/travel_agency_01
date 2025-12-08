export default function Footer() {
  return (
    <footer className="w-full bg-[#2a2a2a] text-white py-20 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* LOGO + INFO */}
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-bold text-yellow-400">setsail.</h1>
          <p className="text-gray-400">
            Lorem ipsum dolor sit ametco nsec te tuer adipiscing elitae
          </p>

          <div className="flex flex-col gap-4 text-gray-300 text-sm">
            <p className="flex items-center gap-2">
              <span>📧</span> setsail@example.com
            </p>
            <p className="flex items-center gap-2">
              <span>📞</span> 1 562 867 5309
            </p>
            <p className="flex items-center gap-2">
              <span>📍</span> Broadway & Morris St, New York
            </p>
          </div>
        </div>

        {/* RECENT POSTS */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Our Recent Posts</h2>

          <div className="flex flex-col gap-6 text-gray-300 text-sm">
            <div>
              <p>Visit Thailand, Bali And China</p>
              <p className="text-gray-500">September 7, 2016</p>
            </div>

            <div>
              <p>The Sound Of Our Jungle</p>
              <p className="text-gray-500">September 7, 2016</p>
            </div>

            <div>
              <p>New Year, New Resolutions!</p>
              <p className="text-gray-500">September 7, 2016</p>
            </div>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Subscribe to our Newsletter</h2>
          <p className="text-gray-400 mb-6">
            Etiam rhoncus. Maecenas temp us, tellus eget condimentum rho
          </p>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="   Name"
              className="w-full bg-[#3a3a3a] p-3 rounded text-white outline-none"
            />
            <input
              type="email"
              placeholder="   Email"
              className="w-full bg-[#3a3a3a] p-3 rounded text-white outline-none"
            />
            <button className="w-full bg-[#35D0CE] text-white font-bold py-3 rounded">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* INSTAGRAM */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Our Instagram</h2>
          <p className="text-gray-400">
            Aliquam lorem ante, dapibus inviver raqui feugiat a, tellus.
            Phasellus null
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-500 mt-16 text-sm">
        © 2018 Qode Interactive
      </div>
    </footer>
  );
}
