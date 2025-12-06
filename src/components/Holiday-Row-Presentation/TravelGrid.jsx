import React from "react";
import TravelGridElement from "./TravelGridElement";

const spainDestinations = [
  { name: "Tenarrife", rating: 5.0, review: "Good", price: 1740, img: "/images/spain/tenarife.jpg" },
  { name: "Madrid", rating: 7.0, review: "Superb", price: 1100, img: "/images/spain/madrid.jpg" },
  { name: "Barcelona", rating: 5.3, review: "Good", price: 840, img: "/images/spain/barcelona.jpg" },
];

const greeceDestinations = [
  { name: "Thasos", rating: 5.0, review: "Good", price: 1740, img: "/images/greece/thasos.jpg" },
  { name: "Skiathos", rating: 7.0, review: "Superb", price: 1100, img: "/images/greece/skiathos.jpg" },
  { name: "Rhodes", rating: 5.3, review: "Good", price: 840, img: "/images/greece/rhodes.jpg" },
];

const italyDestinations = [
  { name: "Sicily", rating: 5.0, review: "Good", price: 1740, img: "/images/italy/sicily.jpg" },
  { name: "Toscana", rating: 7.0, review: "Superb", price: 1100, img: "/images/italy/toscana.jpg" },
  { name: "Sardinia", rating: 5.3, review: "Good", price: 840, img: "/images/italy/sardinia.jpg" },
];


export default function TravelGrid() {
  return (
    <div className="flex flex-col items-center gap-10 w-full justify-center ">
      <TravelGridElement title="Spain" titleImage="/images/spain/spain.svg" destinations={spainDestinations}/>
      <TravelGridElement title="Greece" titleImage="/images/greece/greece.png" destinations={greeceDestinations} reverse={true}/>
      <TravelGridElement title="Italy" titleImage="/images/italy/italy.jpg" destinations={italyDestinations}/>

    </div>
  );
}
