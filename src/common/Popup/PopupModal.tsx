import { Cancel } from '@mui/icons-material';
import React, { useState } from 'react';
import PlayStore from '@/assets/svgs/layout/play-store.svg';
import Image from 'next/image';


function PopupModal() {

  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;
  return (
    <div className="w-full bg-gray-100 p-3 flex justify-center items-center shadow-lg relative space-x-4">
      <p className="text-gray-500 font-medium">Download our Mobile App today!</p>

      <div className="flex gap-3">
        <button className="flex items-center gap-2 bg-gray-300/60 text-gray-500 px-3 py-1 rounded hover:bg-gray-300 transition">
          <Image src={PlayStore} alt="Playstore" className="w-5 h-5" />
          Playstore
        </button>
        <button className="flex items-center gap-2 bg-gray-300/60 text-gray-500 px-3 py-1 rounded hover:bg-gray-300 transition">
          <Image src={PlayStore} alt="App Store" className="w-5 h-5" />
          App Store
        </button>
      </div>

      <button onClick={() => setIsVisible(false)} className="text-gray-500 hover:text-orange-600 right-6 absolute">
        <Cancel  />
      </button>
    </div>
  )
}

export default PopupModal