import React from "react";

const Newsletter = () => {
  return (
    <section
      className="relative flex flex-col justify-center items-center text-white py-[138px] px-6 md:px-16 lg:px-24 h-[421px]"
      style={{
        backgroundImage: "url('/background/section.png')",
        backgroundPosition: "center",
        backgroundSize: "1738px",
        backgroundRepeat: "no-repeat", 
        backgroundColor: "rgb(39, 1, 145)",
        backgroundBlendMode: "multiply", 
      }}
    >
      {/* ======================= && •HEADER• && ====================== */}
      <h2 className="text-[30px] md:text-[40px] font-bold text-center">
        Subscribe to our newsletter
      </h2>
      

      {/* ======================= && •FORM• && ====================== */}
      <form className="mt-6 max-w-[815px] flex flex-wrap md:flex-nowrap items-center gap-5 md:gap-0 w-full mb-5">
        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full md:w-[815px] h-[60px] p-3 text-lg text-white bg-transparent border-white border-[1.5px] md:rounded-r-none rounded-[5px] outline-none placeholder:text-white focus:border-gray-300 transition duration-300"
        />
        <button
          type="submit"
          className="w-full md:w-[231px] h-[60px] bg-[#FF6634] text-white font-bold md:rounded-l-none rounded-[5px] hover:bg-orange-600 transition"
        >
          Subscribe
        </button>
      </form>

      <p className="mt-2 text-sm md:text-base text-center mt-2">
        Don't worry! We promise not to spam you.
      </p>
    </section>
  );
};

export default Newsletter;
