import React, { useState } from "react";
import Link from 'next/link';
import { CancelOutlined, Menu } from "@mui/icons-material";
import { usePathname } from 'next/navigation';

function MobileView() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Giving", path: "/giving" },
    { name: "Events", path: "/math-events" },
    { name: "Resources", path: "/resources" },
    { name: "Find a Church", path: "/find-church" },
    { name: "Contact Us", path: "/contact" }
  ];

  return (
    <div className="relative">
      <button 
        className="lg:hidden block text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <CancelOutlined className="w-6 h-6 text-orange-500" />
        ) : (
          <Menu className="w-6 h-6 hover:text-orange-500" />
        )}
      </button>

      <div 
        className={`
          fixed top-0 right-0 h-screen w-[280px] bg-white shadow-2xl z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 flex justify-end">
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <CancelOutlined className="w-6 h-6 text-orange-500" />
            </button>
          </div>

          <nav className="px-6 flex-1">
            {menuItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`
                  block py-3 px-4 rounded-lg mb-2
                  transition-all duration-200 ease-in-out
                  ${pathname === item.path 
                    ? 'bg-orange-50 text-orange-500 font-medium' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-orange-500'
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="p-6 border-t border-gray-100">
            <Link 
              href="/login" 
              onClick={() => setIsOpen(false)}
              className="
                block w-full text-center bg-orange-500 text-white 
                px-6 py-3 rounded-lg font-medium
                transform transition-all duration-200
                hover:bg-orange-600 hover:shadow-lg
                active:scale-95
              "
            >
              Log In
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

export default MobileView;