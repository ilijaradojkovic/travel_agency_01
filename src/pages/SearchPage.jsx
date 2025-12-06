import React from "react";
import SearchCard from "../components/SearchCard/SearchCard";

export default function SearchPage() {
  return (
    <div className="w-full h-[200vh] bg-amber-600 flex  flex-col items-center relative">
      <div class="relative w-full flex justify-center">
        <img
          src="./images/search.jpg"
          alt="Slika"
          class="w-full  object-cover rounded-lg"
        />

        <h1 class="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold">
          Tours Search Page
        </h1>
      </div>

      <div className=" w-1/2  min-h-[100vh] top-100 absolute  left-1/2 -translate-x-1/2 bg-zinc-800  ">
        <div className="bg-cyan-800 flex flex-row justify-start gap-10 h-20 items-center px-5">
          <div>
            <p className="uppercase font-bold">Date</p>
          </div>
          <div>
            <p className="uppercase font-bold">Price low to high</p>
          </div>
          <div>
            <p className="uppercase font-bold">Price high to low</p>
          </div>
          <div>
            <p className="uppercase font-bold">Name (a-z)</p>
          </div>
        </div>
        <div className="flex gap-10  items-start✅ p-15">
          <SearchCard />
          <SearchCard />
        </div>
      </div>
    </div>
  );
}
