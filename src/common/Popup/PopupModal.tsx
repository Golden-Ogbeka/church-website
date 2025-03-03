import { Cancel } from '@mui/icons-material';
import React, { useState } from 'react';
import PlayStore from '@/assets/svgs/layout/play-store.svg';
import Image from 'next/image';

function PopupModal() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="w-full bg-gray-100 p-3 flex sm:flex-row flex-col justify-start sm:justify-center items-start sm:items-center shadow-lg relative space-y-4 sm:space-y-0 sm:space-x-4">
      {/* =========&& •TEXT• &&======== */}
      <p className="text-gray-500 font-base sm:font-medium text-left sm:text-center">
        Download our Mobile App today!
      </p>

      {/* =========&& •BUTTONS• &&======== */}
      <div className="flex gap-3">
        <button className="flex items-center gap-2 bg-gray-300/60 text-gray-500 sm:font-sm font-base px-2 sm:px-3 py-1 rounded hover:bg-gray-300 transition">
          <Image src={PlayStore} alt="Playstore" className="w-3 h-3 sm:w-5 sm:h-5" />
          Playstore
        </button>
        <button className="flex items-center gap-2 bg-gray-300/60 text-gray-500 sm:font-sm font-base px-2 sm:px-3 py-1 rounded hover:bg-gray-300 transition">
          <Image src={PlayStore} alt="App Store" className="w-3 h-3 sm:w-5 sm:h-5" />
          App Store
        </button>
      </div>

      {/* =========&& •CLOSE BUTTON• &&======== */}
      <button
        onClick={() => setIsVisible(false)}
        className="text-gray-500 hover:text-orange-600 absolute top-3 right-3 sm:right-6"
      >
        <Cancel />
      </button>
    </div>
  );
}

export default PopupModal;