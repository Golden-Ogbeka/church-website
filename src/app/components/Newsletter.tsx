
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DM_Sans, Sora } from "next/font/google"
import React from 'react'

const dm = DM_Sans({ subsets: ["latin"] })
const sora = Sora({ subsets: ["latin"] });

const Newsletter = () => {
    return (
        <section
        className={`${dm.className} ${sora.className} relative w-full text-white py-12 px-4`}
        style={{
            backgroundImage: "url('/Rectangle 606.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}
        aria-label="Newsletter subscription section"
        >
            <div className="absolute inset-0 bg-[#2A46DA99]"></div>
            <div className="relative max-w-4xl mx-auto text-center">
                <h2 className={`${sora.className} text-3xl md:text-4xl font-semibold mb-4`}>
                Subscribe to our newsletter
                </h2>
                <p className={`${dm.className} text-sm md:text-xl mb-8 font-medium`}>
                    Don&apos;t worry! We promise not to spam you.
                </p>
                <form
                className="flex flex-col items-center justify-center gap-4 md:flex-row"
                aria-label="Newsletter subscription form"
                >
                    <div className="w-full md:w-2/3">
                        <label htmlFor="email" className="sr-only">
                        Email address
                        </label>
                        <Input
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        required
                        className={`${dm.className} w-full placeholder:text-white placeholder:text-xs placeholder:font-medium h-[60px] focus:outline-none focus:outline font-medium`}
                        />
                    </div>
                    <Button
                        type="submit"
                        className={`${sora.className} text-lg bg-[#FF6634] w-[231px] h-[60px] rounded hover:bg-orange-600 text-white font-bold px-8 py-3 transition-colors`}
                        aria-label="Subscribe to newsletter"
                    >
                        Subscribe
                    </Button>
                </form>
            </div>
        </section>
    )
}

export default Newsletter;
