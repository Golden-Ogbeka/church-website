import { Button } from '@/components/ui/button';
import { DM_Sans, Sora } from 'next/font/google';
import React from 'react'

const sora = Sora({ subsets: ["latin"] });
const dm = DM_Sans({ subsets: ["latin"] });

const Advert = () => {
    return (
        <section 
            aria-labelledby="advert-heading" 
            className="relative w-full min-h-screen flex flex-col justify-center items-center bg-black"
        >
            <div className="relative w-full h-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px]">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <img
                    src="/praise.png"
                    alt="A congregation worshipping together"
                    className="object-cover object-center w-full h-full"
                    loading="lazy"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center p-6 sm:p-8">
                    <div className="w-full max-w-4xl text-center text-white space-y-4">
                        <h2 
                            id="advert-heading" 
                            className={`text-2xl sm:text-3xl md:text-5xl font-bold leading-tight ${dm.className}`}
                        >
                            Worship with Us Every Sunday
                        </h2>
                        
                        <p className={`text-lg sm:text-xl md:text-2xl ${sora.className}`}>
                            Sundays - 9am to 12pm
                        </p>

                        <p 
                            className={`${sora.className} text-sm sm:text-base md:text-lg 
                                max-w-3xl mx-auto leading-relaxed text-gray-200 px-4 sm:px-6`}
                        >
                            With the Father’s House Mobile App, you can access the church on the go. 
                            Have access to daily devotionals, church events, announcements, and even 
                            stream services online. Listen to the church’s podcast anywhere, all in one place!
                        </p>

                        <div className="flex justify-center pt-5">
                            <Button 
                                className={`${sora.className} w-full max-w-[280px] sm:w-[280px] 
                                    h-12 sm:h-14 text-base sm:text-lg md:text-xl
                                    text-white bg-[#FF6634] hover:bg-[#ff835a] font-bold 
                                    transition-all duration-300`}
                            >
                                Get Directions
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Advert;
