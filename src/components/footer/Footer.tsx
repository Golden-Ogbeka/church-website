import React from "react";
import FooterSection from "./Footer_Sections/FooterSection";
import FooterContact from "./Footer_Sections/FooterContact";
import FooterSocial from "./Footer_Sections/FooterSocial";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:flex w-[100%] mx-auto justify-between flex-wrap gap-6 py-12 px-6 md:px-14 lg:px-18">
        
        {/* ============== LOGO & DESCRIPTION ============== */}
        <div className="w-[300px]">
          <img src="/logo/logo.png" alt="The Father's House" className="w-[180px] mb-4" />
          <p className="text-sm leading-relaxed opacity-80">
            The Father's House strongly believes in the Missions assignment of the New Testament Church
            and also impacting life in her immediate community through provision and meeting of some
            basic needs of life as well as putting in place some empowerment programmes and activities.
          </p>

          {/* ============== APP DOWNLOAD BUTTONS ============== */}
          <div className="mt-6">
            <p className="text-sm mb-3 text-yellow-400">NOW AVAILABLE ON</p>
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

        {/* ============== FOOTER SECTIONS ============== */}
        <FooterSection
          title="About"
          links={[
            { name: "Welcome", url: "/welcome" },
            { name: "Vision", url: "/vision" },
            { name: "About Us", url: "/about" },
            { name: "Our History", url: "/history" },
            { name: "Our Pastors", url: "/pastors" },
          ]}
        />

        <FooterSection
          title="Connect"
          links={[
            { name: "Locations", url: "/locations" },
            { name: "Father's Menu", url: "/menu" },
            { name: "Get Our App", url: "/app" },
            { name: "Join Online", url: "/online" },
          ]}
        />

        <FooterSection title="Media" 
          links={[{name:"Join Online", url: "#"}, {name:"Sermons", url: "#"}, {name:"Our Gallery", url: "#"}

          ]} />

        <div>

          <FooterContact />
          
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

      <FooterSocial />

      {/* ============== COPYRIGHT SECTION ============== */}
      <div className="mt-8 p-4 text-center text-sm bg-[#272727] flex justify-center items-center">
        © 2023 The Father's House Church
      </div>
    </footer>
  );
};

export default Footer;
