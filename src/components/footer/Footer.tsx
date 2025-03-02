import React from "react";
import Image from 'next/image';
import InstagramIcon from '@/assets/svgs/social/instagram.svg';
import FacebookIcon from '@/assets/svgs/social/facebook.svg';
import YoutubeIcon from '@/assets/svgs/social/youtube.svg';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <footer className="bg-black text-white ">
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:flex w-[100%] mx-auto justify-between flex-wrap gap-6 py-12 px-6 md:px-14 lg:px-18">
        {/* ============== LOGO & DESCRIPTION ============== */}
        <div className="w-[300px]">
          <img src="/logo/logo.png" alt="The Father's House" className="w-[180px] mb-4" />
          <p className="text-sm leading-relaxed opacity-80">
            The Father's House strongly believes in the Missions assignment of the New Testament Church
            and also impacting life in her immediate community through provision and meeting of some
            basic needs of life as well as putting in place some empowerment programmes and activities.
          </p>
          {/* APP DOWNLOAD BUTTONS */}
          <div className="mt-6">
            <p className="text-sm mb-3 text-yellow-400 ">NOW AVAILABLE ON</p>
            <div className="flex gap-4">
              <a href="#" className="transition-transform hover:scale-105">
                <img src="/download/playstore.png" alt="Google Play" className="h-[35px] object-cover" />
              </a>
              <a href="#" className="transition-transform hover:scale-105">
                <img src="/download/Vector.png" alt="App Store" className="h-[35px] object-cover" />
              </a>
            </div>
          </div>
        </div>

        {/* ============== ABOUT ============== */}
        <div>
          <h3 className="font-bold text-lg mb-4">About</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Welcome</a></li>
            <li><a href="#" className="hover:underline">Vision</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Our History</a></li>
            <li><a href="#" className="hover:underline">Our Pastors</a></li>
          </ul>
        </div>

        {/* ============== CONNECT & MEDIA ============== */}
        <div>
          <h3 className="font-bold text-lg mb-4">Connect</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Locations</a></li>
            <li><a href="#" className="hover:underline">Father's Menu</a></li>
            <li><a href="#" className="hover:underline">Get Our App</a></li>
            <li><a href="#" className="hover:underline">Join Online</a></li>
          </ul>
        </div>

        {/* ============== MEDIA ============== */}
        <div>
          <h3 className="font-bold text-lg mb-4">Media</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Join Online</a></li>
            <li><a href="#" className="hover:underline">Sermons</a></li>
            <li><a href="#" className="hover:underline">Our Gallery</a></li>
          </ul>
        </div>

        {/* ============== CONTACT ============== */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <ul className="space-y-3 ">
            <li className="flex items-center gap-2 text-sm">
              <LocationOnIcon className="text-sm" />
              90, Ojodu Akute Road, Ajayi Farms Bus-Stop
            </li>
            <li className="flex items-center gap-2 text-sm">
              <EmailIcon className="text-sm" />
              churchadmin@thfconline.net
            </li>
            <li className="flex items-center gap-2 text-sm">
              <PhoneIcon className="text-sm" />
              +234 805 669 9920
            </li>
          </ul>

          

          {/* ============== LOGIN & SIGNUP BUTTONS ============== */}
          <div className="mt-6 flex gap-3">
            <a href="#" className="w-[110px] h-[35px] flex items-center justify-center bg-[#FF6634] text-white rounded-md hover:bg-opacity-90 transition-colors">
              Log in
            </a>
            <a href="#" className="w-[110px] h-[35px] flex items-center justify-center bg-[#FF6634] text-white rounded-md hover:bg-opacity-90 transition-colors">
              Sign up
            </a>
          </div>
        </div>
        
      </div>

      {/* ============== SOCIAL ICONS ============== */}
          <div className="flex gap-6 mt-6 sm:justify-center justify-start">
            <a href="#" className="text-sm hover:text-gray-400 transition-colors">
              {/* <FacebookIcon />   */}
              <Image src={FacebookIcon} alt="Instagram" width={24} height={24} />

            </a>
            <a href="#" className="text-2xl hover:text-gray-400 transition-colors">
            <Image src="/logo/ion_social-twitter.png" alt="Instagram" width={24} height={24} />
              {/* <YoutubeIcon /> */}
            </a>
            <a href="#" className="text-2xl hover:text-gray-400 transition-colors">
              {/* <InstagramIcon /> */}
              <Image src={InstagramIcon} alt="Instagram" width={24} height={24} />
            </a>
            <a href="#" className="text-2xl hover:text-gray-400 transition-colors">
              {/* <YoutubeIcon /> */}
              <Image src={YoutubeIcon} alt="Instagram" width={24} height={24} />
            </a>
          </div>

      {/* ============== COPYRIGHT SECTION ============== */}
      {/* border-t border-gray-700  */}
      <div className="mt-8 p-4 text-center text-sm bg-[#272727] flex justify-center items-center">
        © 2023 The Father's House Church
      </div>
    </footer>
  );
};

export default Footer;