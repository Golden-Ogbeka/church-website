import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Desktop() {

  const pathname = usePathname();
  
  return (
    <div>
        {/* ======================= && •DESKTOP NAVIGATION• &&====================== */}
        <nav className="hidden lg:flex space-x-8 ">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Giving", path: "/giving" },
              { name: "Events", path: "/math-events" },
              { name: "Resources", path: "/resources" },
              { name: "Find a Church", path: "/find-church" },
              { name: "Contact Us", path: "/contact" }
            ].map((item, index) => (
              <Link 
                key={index} 
                href={item.path}
                // className="text-gray-800 relative group hover:text-[#ff6634] pb-2"
                className={`
                  text-gray-800 relative group hover:text-[#ff6634] pb-2
                  transition-all duration-200 ease-in-out
                  ${pathname === item.path 
                    ? 'bg-orange-50 text-orange-500 font-medium hover:text-[#ff6634]' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-orange-500'
                  }
                `}
              >
                {item.name}
                <span className = {`absolute bottom-0 left-0 w-full h-0.5 bg-[#ff6634] transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100 
                  ${pathname === item.path ? 'absolute bottom-0 left-0 w-full h-0.5 bg-[#ff6634] transform scale-x-0 transition-transform duration-200 scale-x-100': 'scale-x-0'}
                `}/>
              </Link>
            ))}
          </nav>
    </div>
  )
}

export default Desktop