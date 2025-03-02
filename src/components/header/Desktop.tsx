import React from 'react'
import Link from 'next/link';

function Desktop() {
  return (
    <div>
        {/* ======================= && •DESKTOP NAVIGATION• &&====================== */}
        <nav className="hidden lg:flex space-x-8 ">
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
                className="text-gray-800 relative group hover:text-[#ff6634] pb-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff6634] transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100"/>
              </Link>
            ))}
          </nav>
    </div>
  )
}

export default Desktop