import React, { useState } from "react";
import Logo from '@/assets/brand/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import MobileView from "./MobileView";
import Desktop from "./Desktop";
import PopupModal from "@/common/Popup/PopupModal";
// import MobileMenu from './MobileMenu';

function Header() {
  

  return (
    <header className="bg-white shadow-md fixed w-full z-50 top-0 left-0 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6 ">
        <div className="flex justify-between items-center py-2">
          {/* ======================= && •LOGO• &&====================== */}
          <Link href='/'>
            <Image src={Logo} alt="Logo" className='h-[70px] w-[141px] mt-[-1rem] mr-[6rem]' />
          </Link>

          {/* ======================= && •DESKTOP NAVIGATION• &&====================== */}
          <Desktop />


          {/* ======================= && •LOGIN BUTTON• &&====================== */}
            <Link href="/login" className="bg-orange-600 text-white hidden lg:flex justify-center w-[12%] p-3 rounded-md shadow hover:bg-orange-700 transition ml-[9rem]">
              Log In
            </Link>

          {/* ======================= && •MOBILE MENU• &&====================== */}
          <MobileView />

        
        </div>
          {/* <PopupModal /> */}
      </div>

      
    </header>
  );
}

export default Header;
