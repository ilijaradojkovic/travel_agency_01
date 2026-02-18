import React from "react";
import Footer from "../components/Footer/Footer";
import { HashLink as Link } from "react-router-hash-link";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero sekcija */}
      <section style={{ backgroundImage: "url('./images/about.jpg')" }} className="relative h-40 sm:h-[60vh] bg-cover bg-center flex items-center justify-center">
        <div className="bg-black/50 w-full h-full absolute top-0 left-0"></div>
        <h1 className="relative z-10 text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold text-center px-4">
          About Us
        </h1>
      </section>

      {/* Naša priča / Misija */}
      <section className="py-10 sm:py-20 px-4 sm:px-6 md:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 sm:gap-10">
          <img
            src="./images/team.jpg"
            alt="Our Story"
            className="w-full md:w-1/2 h-48 sm:h-80 object-cover text-black rounded-lg shadow-lg"
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4 text-black">
              Our Story
            </h2>
            <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
              We are a passionate travel agency dedicated to creating
              unforgettable experiences. From exotic beaches to mountain
              adventures, we craft personalized tours that you will cherish
              forever.
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              Our mission is to make travel easy, safe, and enjoyable for
              everyone. We believe in authentic experiences and strive to
              connect travelers with the heart of every destination.
            </p>
          </div>
        </div>
      </section>

      {/* Tim */}
      <section className="py-10 sm:py-20 px-4 sm:px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">Meet Our Team</h2>
          <p className="text-gray-600 mt-2 sm:mt-4 text-sm sm:text-base">
            Our friendly team is ready to guide you through your next adventure.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
          {/* Team Member */}
          <div className="flex flex-col items-center">
            <img
              src="./images/team1.jpg"
              alt="Team member"
              className="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full shadow-lg mb-3 sm:mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-black">Alice Johnson</h3>
            <p className="text-gray-600 text-sm sm:text-base">Travel Consultant</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="./images/team2.jpg"
              alt="Team member"
              className="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full shadow-lg mb-3 sm:mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-black">Mark Smith</h3>
            <p className="text-gray-600 text-sm sm:text-base">Tour Planner</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="./images/team3.avif"
              alt="Team member"
              className="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full shadow-lg mb-3 sm:mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-black">Sophia Lee</h3>
            <p className="text-gray-600 text-sm sm:text-base">Customer Support</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 sm:py-20 px-4 sm:px-6 md:px-20 bg-primary text-white text-center rounded-t-lg">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-4">
          Ready for Your Next Adventure?
        </h2>
        <p className="mb-6 sm:mb-8 text-sm sm:text-base">
          Contact us today and let us plan a journey you'll never forget.
        </p>

        <Link
          smooth
          to="/home#contact-section"
          className="inline-block bg-white text-primary font-semibold px-6 sm:px-8 py-2 sm:py-4 rounded-full shadow-lg hover:opacity-90 transition text-sm sm:text-base"
        >
          Contact Us
        </Link>
      </section>
      <Footer />
    </div>
  );
}
