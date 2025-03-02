import Link from "next/link";
import React from "react";

function WorshipWithUs() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-16 px-6 md:px-16 lg:px-24 w-full h-[650px] flex items-center justify-center"
      style={{ backgroundImage: "url('/background/worshipWithUs.jpeg')" }}
    >
      {/* ======================= && •OVERLAY• && ====================== */}
      <div className="absolute inset-0 bg-black/90"></div>

      {/* ======================= && •CONTENT• && ====================== */}
      <div className="relative z-10 text-center max-w-[752px] w-full mx-auto flex flex-col justify-center items-center">
       
        <h2 className="text-3xl sm:text-4xl font-normal leading-[51px] mb-4">
          Worship with Us Every Sunday
        </h2>

         {/* ======================= && •EVENT-TIMING• && ====================== */}
        <p className="font-sora font-normal text-xl sm:text-2xl leading-[24px] tracking-[-1.1%] mb-6">
          Sundays - 9am to 12pm
        </p>

         {/* ======================= && •DESCRIPTION• && ====================== */}
        <p className="font-dm-sans font-normal text-lg sm:text-xl leading-[26px] tracking-[0%] text-center mb-8">
          With the Father&apos;s House Mobile App, you can access the church on the go. Have access to daily devotional, church events, announcements, and even stream services online and listen to the church&apos;s podcast on the go. All in one place!
        </p>

         {/* ======================= && •Link• && ====================== */}
        <div className="">
          <Link className="bg-[#FF6634] text-white text-lg font-bold hover:bg-orange-600 transition w-[280px] h-[60px] flex justify-center text-center items-center rounded-md" href={"/directions"}>
            Get Directions
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WorshipWithUs;