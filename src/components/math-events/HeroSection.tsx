import React from "react";
import EventHeader from '@/assets/backgrounds/event-header.webp';
import Image from 'next/image';

function Hero() {
  return (
    <section className="relative h-[406px] flex items-center justify-center text-white ">
      <Image
        src={EventHeader}
        alt="Event Header Background"
        className="absolute inset-0 w-full h-[405px] object-cover "
      />
      <div className="absolute inset-0 bg-black/20 "></div>

      {/* =========&& •CONTENT• &&======== */}
      <div className="relative z-10 text-center px-6 md:px-10 mt-20">
        <h1 className="text-3xl md:text-5xl font-bold uppercase">Father's House Events</h1>
        <p className="text-lg md:text-xl mt-2">Our mandate is to raise stars</p>
      </div>
    </section>
  );
}

export default Hero;