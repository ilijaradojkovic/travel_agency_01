import React from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import HeroTitle from "../components/Hero-Title/HeroTitle";
import TravelGrid from "../components/Holiday-Row-Presentation/TravelGrid";
import FeatureSection from "../components/Hero/FeatureSection";
import CouroselHero from "../components/Courosel/Courosel-Hero";
import ReviewCarousel from "../components/Courosel/Courosel-Hero";
import Footer from "../components/Footer/Footer";
import MediterraneanSection from "../components/MediteranSection/MediteranSection";
import ContactSection from "../components/Contact/ContactUs";

export default function Home() {
  return (
    <div className="">
      <section
        className="
    h-[90vh]

  "
      >
        <div
          className=" bg-[url('./images/hero.jpg')]
    bg-cover 
    bg-center 
    bg-no-repeat
    flex 
    flex-col 
    items-center 
    justify-center
    pl-16 
    text-white
    gap-5
    w-full
    h-[80vh]
    relative"
        >
          <h5 className="text-5xl font-yellowtail">Come sith Us</h5>
          <h1 className="text-8xl font-semibold">Relax and Enjoy.</h1>
          <h5 className="text-2xl text-center w-[50%]">
            Experience peace, adventure, and bliss.
          </h5>

          <SearchBar />
        </div>
      </section>

      <section
        className="
      flex
      flex-col
      justify-center
      items-center
      w-full
      gap-30
      h-[150vh]
      "
      >
        <HeroTitle
          textColor={"black"}
          topTitle={"Choose Your"}
          mainTitle={"Perfect Holiday"}
          subTitle={"Make every moment unforgettable."}
        />
        <TravelGrid />
      </section>
      <section
        className="
    h-[80vh]
    flex flex-col justify-start items-center
    gap-5
    relative
    bg-fixed bg-center bg-cover
    pt-10
  "
        style={{ backgroundImage: "url('/images/cityExampleCover.jpg')" }}
      >
        <HeroTitle
          textColor={"white"}
          topTitle={"Go & Discover"}
          mainTitle={"Breathtaking Cities"}
          subTitle={"Wonders around every corner."}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <img
          src="/images/cityExample.jpg"
          className=" absolute w-[50%] h-[70%] bottom-[-10%]"
        />
      </section>
      <section
        className="
      h-[20vh]
      flex flex-row justify-center items-center
      mt-30
   
      "
      >
        <FeatureSection />
      </section>
      <section
        className="
    h-[60vh]
    flex flex-row justify-center items-center
    mt-[120px]
  bg-[#eeeeee]
    relative 
  "
      >
        <div className="w-[50%] h-full">
          <ReviewCarousel />
        </div>

        {/* Top left shell */}
        <img
          src="./images/sea-shell.png"
          className="absolute w-70  bottom-[-100px] left-10 "
        />

        {/* Bottom right polaroid */}
        <img
          src="./images/poloriod-picture.png"
          className="absolute w-70 bottom-[-400px] z-10 right-20 "
        />
      </section>

      <section className="h-[100vh]">
        <MediterraneanSection />
      </section>
      <section id="contact-section" className="h-[100vh]">
        <ContactSection />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
