import React from "react";

export default function ContactSection() {
  return (
    <div className="w-full min-h-screen  flex items-center justify-center p-8">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <h1 className="text-6xl font-serif text-primary mb-4">
            Get in Touch
          </h1>
          <p className="text-2xl text-primary mb-6 font-medium">
            I'd like to hear from you!
          </p>
          <p className="text-gray-700 mb-6 max-w-xs">
            If you have any inquiries or just want to say hi, please use the
            contact form!
          </p>

          {/* Email */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xl">✉️</span>
            <a
              href="mailto:yukakudo.dearialce@gmail.com"
              className="text-primary hover:underline"
            >
              yukakudo.dearialce@gmail.com
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl">
            <span>👍</span>
            <span>⚫</span>
            <span>⚫</span>
            <span>⚫</span>
            <span>⚫</span>
            <span>⚫</span>
          </div>
        </div>

        {/* Right Side Form */}
        <form className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border text-black border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border text-black border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <input
            type="email"
            placeholder="Email *"
            className="border text-black border-gray-300 p-2 rounded focus:outline-none focus:ring-1 focus:ring-primary"
            required
          />

          <textarea
            placeholder="Message"
            rows="5"
            className="border text-black border-gray-300 p-2 rounded resize-none focus:outline-none focus:ring-1 focus:ring-primary"
          />

          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded cursor-pointer transition w-28"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
