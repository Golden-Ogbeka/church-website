import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import { DM_Sans, Sora } from 'next/font/google';
import { Button } from '@/components/ui/button';

const sora = Sora({ subsets: ["latin"] });
const dm = DM_Sans({ subsets: ["latin"] });

const Footer = () => {
    return (
        <footer role="contentinfo" className="bg-black text-white py-8 px-4">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
                {/* Top section with logo and description */}
                    <div className="flex flex-col lg:flex-row justify-between gap-8">
                        <div className="lg:w-1/3">
                            <div className="mb-4">
                                <Image
                                    src="/white-logo 1.png"
                                    alt="The Father&apos;s House Logo"
                                    width={251}
                                    height={138}
                                    className="object-contain"
                                />
                            </div>
                                <p className={`${dm.className} font-normal text-sm leading-relaxed`}>
                                The Father&apos;s House strongly believes in the lifetime enjoyment of
                                the love found in the presence of God. We welcome you to our place
                                of worship and prayer, ensuring that you receive meaningful
                                sermons, empowering resources, and activities.
                                </p>

                            <div className="mt-8">
                                <h4 className={`${sora.className} font-bold text-sm text-[#FFC107]`}>NOW AVAILABLE ON</h4>
                                <div className="flex items-center mt-4 gap-4">
                                    <Image
                                    src="/google_store.png"
                                    alt="Google Play Store"
                                    width={120}
                                    height={40}
                                    className="object-contain"
                                    />
                                    <Image
                                    src="/app_store.png"
                                    alt="Apple App Store"
                                    width={120}
                                    height={40}
                                    className="object-contain"
                                    />
                                </div>
                            </div>
                    </div>

                    {/* Right side (Links) */}
                    <div className="flex flex-col lg:flex-row lg:justify-end lg:gap-12 w-full lg:w-2/3 gap-8">
                        {/* Column 1 */}
                        <div>
                            <h3 className={`${sora.className} text-lg font-semibold mb-2`}>About</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#welcome" className={`${dm.className} font-medium text-sm`}>
                                        Welcome
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#vision" className={`${dm.className} font-medium text-sm`}>
                                        Vision
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#about" className={`${dm.className} font-medium text-sm`}>
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#history" className={`${dm.className} font-medium text-sm`}>
                                        Our History
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#pastors" className={`${dm.className} font-medium text-sm`}>
                                        Our Pastors
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <h3 className={`${sora.className} text-lg font-semibold mb-2`}>Connect</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#location" className={`${dm.className} font-medium text-sm`}>
                                        Locations
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#fathers" className={`${dm.className} font-medium text-sm`}>
                                        Father&apos;s Menu
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#app" className={`${dm.className} font-medium text-sm`}>
                                        Get Our App
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#online" className={`${dm.className} font-medium text-sm`}>
                                        Join Online
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div>
                            <h3 className={`${sora.className} text-lg font-semibold mb-2`}>Media</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="#online" className={`${dm.className} font-medium text-sm`}>
                                        Join Online
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#sermons" className={`${dm.className} font-medium text-sm`}>
                                        Sermons
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#gallery" className={`${dm.className} font-medium text-sm`}>
                                        Our Gallery
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4 */}
                        <div>
                            <h3 className={`${sora.className} text-lg font-semibold mb-2`}>Contact</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="https://www.google.com/maps/place/Your+Location"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline flex items-center gap-2"
                                    >
                                        <Image
                                        src="/location.png"
                                        alt="Location Icon"
                                        width={14}
                                        height={18}
                                        className="object-contain"
                                        />
                                        90, Ojodu Akute Road, Ajayi Farms Bus-Stop.
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:churchadmin@tfhconline.ne"
                                        className="hover:underline flex items-center gap-2"
                                    >
                                        <Image
                                        src="/mail.png"
                                        alt="Mail Icon"
                                        width={14}
                                        height={18}
                                        className="object-contain"
                                        />
                                        churchadmin@tfhconline.ne
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="tel:+2348056699920"
                                        className="hover:underline flex items-center gap-2"
                                    >
                                        <Image
                                        src="/phone.png"
                                        alt="Phone Icon"
                                        width={14}
                                        height={18}
                                        className="object-contain"
                                        />
                                        +234 805 669 9920
                                    </a>
                                </li>
                            </ul>
                            <div className="mt-9">
                                <h3 className={`${sora.className} font-semibold text-base mt4 mb-2`}>Have an Account</h3>
                                <div className="flex gap-10">
                                    <Button
                                        type="button"
                                        className={`${dm.className} font-bold text-sm bg-[#FF6634] hover:bg-[#FF6634] w-[110px] h-9`}
                                    >
                                        Login
                                    </Button>
                                    <Button
                                        type="button"
                                        className={`${dm.className} font-bold text-sm bg-[#FF6634] hover:bg-[#FF6634] w-[110px] h-9`}
                                    >
                                        Sign Up
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                {/* Bottom section (copyright & social) */}
                <div className="border-t border-gray-700 pt-4 flex flex-col lg:flex-row lg:justify-between items-center">
                    <p className={`${sora.className} text-sm font-normal mb-2`}>
                        © 2023 Designed by Fortrex Studios
                    </p>
                    <div className="flex items-center gap-4 mt-4 lg:mt-0">
                        <a
                        href="https://www.facebook.com/yourpage"
                        aria-label="Facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition-colors"
                        >
                            <Image src="/facebook.png" alt="Facebook" width={26} height={26} />
                        </a>
                        <a
                        href="https://twitter.com/yourpage"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition-colors"
                        >
                            <Image src="/twitter.png" alt="Twitter" width={26} height={26} />
                        </a>
                        <a
                        href="https://instagram.com/yourpage"
                        aria-label="Instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition-colors"
                        >
                            <Image src="/instagram.png" alt="Instagram" width={26} height={26} />
                        </a>
                        <a
                        href="https://youtube.com/yourchannel"
                        aria-label="YouTube"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition-colors"
                        >
                            <Image src="/youtube.png" alt="YouTube" width={26} height={26} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
