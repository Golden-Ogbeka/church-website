"use client"
import { DM_Sans } from 'next/font/google'
import Image from 'next/image'
import React, { useState } from 'react'

const dm = DM_Sans({
    subsets: ["latin"],
})

const AppBanner = () => {
    const [visible, setVisible] = useState(true)
    const [isClosing, setIsClosing] = useState(false)

    const handleClose = () => {
        setIsClosing(true)
        setTimeout(() => {
        setVisible(false)
        }, 300)
    }

    if (!visible) return null

    return (
        <section
        className={`relative bg-[#F6F6F6] 
            md:h-[48px] h-auto 
            flex flex-col md:flex-row 
            items-center justify-between 
            px-4 py-2 
            transition-opacity duration-300 
            ${isClosing ? "opacity-0" : "opacity-100"}`}
        aria-label="App banner"
        role="region"
        >
            <div className="flex flex-col md:flex-row items-center justify-center w-full md:space-x-5 space-y-2 md:space-y-0">
                <h3 className={`text-[#6F6F6F] ${dm.className} font-bold text-sm md:text-base`}>
                Download our Mobile App today!
                </h3>
                <div className="flex items-center space-x-0 md:space-x-5">
                    <Image
                        src="/Playstore.png"
                        alt="Download on the Google Play Store"
                        width={118.3}
                        height={29.79}
                        className="cursor-pointer"
                    />
                    <Image
                        src="/Appstore.png"
                        alt="Download on the Apple App Store"
                        width={118.3}
                        height={29.79}
                        className="cursor-pointer"
                    />
                </div>
            </div>
            <button
                type="button"
                aria-label="Close banner"
                className="absolute top-1 right-1 md:static md:mt-0 bg-[#D9D9D9] w-[26.91px] h-[26.29px] rounded-full 
                        text-center flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={handleClose}
            >
                <span aria-hidden="true">×</span>
            </button>
        </section>
    )
}

export default AppBanner
