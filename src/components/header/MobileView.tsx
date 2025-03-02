import React, { useState } from "react";
// import Cancel from '@/assets/svgs/layout/cancel.svg'
import Link from 'next/link';
import { CancelOutlined, Menu } from "@mui/icons-material";

function MobileView() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
          {/* ======================= && •MOBILE MENU BUTTON• &&====================== */}
          <button className="lg:hidden block text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
                <CancelOutlined className="w-6 h-6 hover:text-orange-400" />
                ) : (
                <Menu className="w-6 h-6 hover:text-orange-400" />
            )}
          </button>
        {/* ======================= && •MOBILE MENU• &&====================== */}
        {isOpen && (
            <div className="md:hidden bg-white shadow-md absolute top-16 left-0 right-0 py-4 px-6 z-50">
            {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Giving", path: "/giving" },
                { name: "Events", path: "/events" },
                { name: "Resources", path: "/resources" },
                { name: "Find a Church", path: "/find-church" },
                { name: "Contact Us", path: "/contact" }
            ].map((item, index) => (
                <Link 
                key={index} 
                href={item.path} 
                className="block text-gray-800 py-2 hover:text-orange-500 transition"
                >
                {item.name}
                </Link>
            ))}
            <Link href="/login" className="block mt-3 bg-orange-600 text-white px-5 py-2 rounded-lg text-center shadow hover:bg-orange-700 transition">
                Log In
            </Link>
            </div>
        )}
    </div>
  )
}

export default MobileView