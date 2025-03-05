"use client"
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { DM_Sans } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const dm = DM_Sans({
    subsets: ["latin"],
})

const navLinks = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#about", label: "About Us", id: "about" },
    { href: "#giving", label: "Giving", id: "giving" },
    { href: "#events", label: "Events", id: "events" },
    { href: "#resources", label: "Resources", id: "resources" },
    { href: "#location", label: "Find A Church", id: "location" },
    { href: "#contact", label: "Contact Us", id: "contact" }
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("events"); // Default active link

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    }

    const handleLinkClick = (id: string) => {
        setActiveLink(id);
    }

    return (
        <header className="sticky top-0 z-50 border-b bg-white">
            <nav aria-label="Main Navigation">
                <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
                    {/* Logo */}
                    <Link href="/" aria-label="Go to Homepage">
                        <Image src="/event-pix 1.png" alt="Event Logo" width={161} height={90} />
                    </Link>

                    {/* Mobile Menu Icon (shown on screens below lg) */}
                    <button
                        className="cursor-pointer lg:hidden"
                        aria-label="Open Mobile Menu"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                        onClick={toggleMenu}
                    >
                        <Menu />
                    </button>

                    {/* Desktop Navigation (shown on lg and above) */}
                    <ul className={`text-l ml-20 hidden lg:flex items-center space-x-8 font-medium ${dm.className}`}>
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <Link 
                                    href={link.href} 
                                    aria-label={`Navigate to ${link.label} page`}
                                    onClick={() => handleLinkClick(link.id)}
                                    className={`relative pb-1 transition-all duration-300 ${
                                        activeLink === link.id 
                                        ? "text-[#FF6634] border-b-2 border-[#FF6634]" 
                                        : "hover:border-b-2 hover:border-gray-500"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="/login">
                                <Button className={`bg-[#FF6634] hover:bg-[#ff7f55] text-white w-[110px] h-[35px] ${dm.className} font-bold`}>
                                    Log In
                                </Button>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu (same links as desktop) */}
                <div
                    id="mobile-menu"
                    className={`fixed left-0 top-0 h-screen w-full flex-col justify-center bg-white text-xl transition-transform duration-500 ${isMenuOpen ? "flex animate-open-menu" : "hidden"}`}
                    aria-hidden={!isMenuOpen}
                >
                    <nav aria-label="Mobile Navigation" className="flex flex-col items-center py-16 font-bold">
                        {/* Close Icon */}
                        <button
                            onClick={toggleMenu}
                            className="absolute right-6 top-6 text-4xl"
                            aria-label="Close Mobile Menu"
                        >
                            &times;
                        </button>

                        {/* Navigation Links */}
                        <ul className="mt-8 flex flex-col items-center space-y-6">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <Link 
                                        href={link.href} 
                                        aria-label={`Navigate to ${link.label} page`} 
                                        onClick={() => {
                                            handleLinkClick(link.id);
                                            toggleMenu();
                                        }}
                                        className={`relative pb-1 transition-all duration-300 ${
                                            activeLink === link.id 
                                            ? "text-[#FF6634] border-b-2 border-[#FF6634]" 
                                            : "hover:border-b-2 hover:border-gray-500"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/login">
                                    <Button className={`bg-[#FF6634] hover:bg-[#ff7f55] text-white w-[110px] h-[35px] ${dm.className} font-bold`}>
                                        Log In
                                    </Button>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
