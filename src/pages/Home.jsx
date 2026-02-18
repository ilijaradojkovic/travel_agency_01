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
      {/* Hero Section */}
      <section className="min-h-[60vh] sm:h-[90vh]">
        <div
          className="bg-[url('./images/hero.jpg')] 
    bg-cover 
    bg-center 
    bg-no-repeat
    flex 
    flex-col 
    items-center 
    justify-center
    text-white
    gap-2 sm:gap-5
    w-full
    min-h-[60vh] sm:h-[80vh]
    relative
    px-4 sm:px-6"
        >
          <h5 className="text-2xl sm:text-4xl lg:text-5xl font-yellowtail">Come sith Us</h5>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold">Relax and Enjoy.</h1>
          <h5 className="text-sm sm:text-base md:text-lg lg:text-2xl text-center w-[90%] sm:w-[80%] md:w-[60%]">
            Experience peace, adventure, and bliss.
          </h5>

          <div className="w-full mt-4">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Choose Holiday Section */}
      <section
        className="
      flex
      flex-col
      justify-center
      items-center
      w-full
      gap-8 sm:gap-12 lg:gap-30
      min-h-auto py-10 sm:py-20
      sm:h-[300vh]
      md:h-[300vh]
      lg:h-[150vh]
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

      {/* Cities Section */}
      <section
        className="
    min-h-[60vh] sm:h-[80vh]
    flex flex-col justify-start items-center
    gap-4 sm:gap-5
    relative
    bg-fixed bg-center bg-cover
    pt-6 sm:pt-10
    px-4
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
          className="absolute w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] h-auto sm:h-[50%] lg:h-[70%] bottom-[-5%] sm:bottom-[-5%] lg:bottom-[-10%] object-cover"
        />
      </section>

      {/* Features Section */}
      <section
        className="
      min-h-auto py-10 sm:py-20
      flex flex-row justify-center items-center
      mt-8 sm:mt-30
      md:h-[40vh]
      lg:h-[20vh]
      px-4
      "
      >
        <FeatureSection />
      </section>

      {/* Reviews Section */}
      <section
        className="
    min-h-[70vh] sm:h-[60vh]
    flex flex-col sm:flex-row justify-center items-center
    mt-10 sm:mt-[120px]
    bg-[#eeeeee]
    relative 
    px-4
  "
      >
        <div className="w-full sm:w-[50%] h-full">
          <ReviewCarousel />
        </div>

        {/* Top left shell */}
        <img
          src="./images/sea-shell.png"
          className="hidden sm:block absolute w-40 md:w-70 bottom-[-100px] left-4 md:left-10"
        />

        {/* Bottom right polaroid */}
        <img
          src="./images/poloriod-picture.png"
          className="hidden sm:block absolute w-32 md:w-40 lg:w-70 bottom-[-400px] z-10 right-4 md:right-10 md:right-20"
        />
      </section>

      {/* Mediterranean Section */}
      <section className="min-h-[100vh] sm:h-[100vh]">
        <MediterraneanSection />
      </section>

      {/* Contact Section */}
      <section className="min-h-[100vh] sm:h-[100vh]">
        <ContactSection />
      </section>

      {/* Footer Section */}
      <section>
        <Footer />
      </section>
    </div>
  );
}
