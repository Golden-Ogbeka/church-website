import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { DM_Sans, Sora } from 'next/font/google';
import React from 'react';

const sora = Sora({
    subsets: ["latin"],
});

const dm = DM_Sans({
    subsets: ["latin"],
});

const Registration = () => {
    return (
        <section className="mt-20 px-4">
            <h2
                className={`${sora.className} text-[#002F72] text-2xl font-bold text-center mb-8`}
            >
                Register for the event
            </h2>
            <form className="flex flex-col items-center gap-4">
                <Input
                type="text"
                placeholder="Full Name"
                required
                aria-label="Full Name"
                className={`w-full max-w-[500px] h-12 bg-white border border-[#0D57BE] placeholder:text-[#002F72] ${dm.className} placeholder:font-normal text-[#002F72] font-normal sm:text-2xl rounded outline-none`}
                />
                <Input
                type="tel"
                placeholder="Phone Number"
                required
                aria-label="Phone Number"
                className={`w-full max-w-[500px] h-12 bg-white border border-[#0D57BE] placeholder:text-[#002F72] ${dm.className} placeholder:font-normal text-[#002F72] font-normal sm:text-2xl rounded outline-none`}
                />
                <Input
                type="text"
                placeholder="House Address"
                required
                aria-label="House Address"
                className={`w-full max-w-[500px] h-12 bg-white border border-[#0D57BE] placeholder:text-[#002F72] ${dm.className} placeholder:font-normal text-[#002F72] font-normal sm:text-2xl rounded outline-none`}
                />
                <Input
                type="text"
                placeholder="Landmark"
                required
                aria-label="Landmark"
                className={`w-full max-w-[500px] h-12 bg-white border border-[#0D57BE] placeholder:text-[#002F72] ${dm.className} placeholder:font-normal text-[#002F72] font-normal sm:text-2xl rounded outline-none`}
                />
                <Select>
                <SelectTrigger
                    className={`w-full max-w-[500px] h-12 bg-white border border-[#0D57BE] text-[#002F72] ${dm.className} font-normal rounded outline-none`}
                    aria-label="Sex"
                >
                    <SelectValue
                    placeholder="Sex"
                    className={`${dm.className} text-[#002F72] font-normal`}
                    />
                </SelectTrigger>
                <SelectContent
                    className={`w-full max-w-[500px] border border-[#0D57BE] text-[#002F72] ${dm.className} font-normal rounded outline-none`}
                >
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                </SelectContent>
                </Select>
                <Input
                type="text"
                placeholder="Marital Status"
                required
                aria-label="Marital Status"
                className={`w-full max-w-[500px] h-12 bg-white border border-[#0D57BE] placeholder:text-[#002F72] ${dm.className} placeholder:font-normal text-[#002F72] font-normal sm:text-2xl rounded outline-none`}
                />
                <Input
                type="text"
                placeholder="Occupation"
                required
                aria-label="Occupation"
                className={`w-full max-w-[500px] h-12 bg-white border border-[#0D57BE] placeholder:text-[#002F72] ${dm.className} placeholder:font-normal text-[#002F72] font-normal sm:text-2xl rounded outline-none`}
                />
                <Input
                type="date"
                placeholder="Date of Birth"
                required
                aria-label="Date of Birth"
                className={`w-full max-w-[500px] h-12 bg-white border border-[#0D57BE] placeholder:text-[#002F72] ${dm.className} placeholder:font-normal text-[#002F72] font-normal sm:text-2xl rounded outline-none`}
                />
                <Select>
                <SelectTrigger
                    className={`w-full max-w-[500px] h-12 bg-white border border-[#0D57BE] text-[#002F72] ${dm.className} font-normal rounded outline-none`}
                    aria-label="How did you hear about us?"
                >
                    <SelectValue
                    placeholder="How did you hear about us?"
                    className={`${dm.className} text-[#002F72] font-normal`}
                    />
                </SelectTrigger>
                <SelectContent
                    className={`w-full max-w-[500px] border border-[#0D57BE] text-[#002F72] ${dm.className} font-normal rounded outline-none`}
                >
                    <SelectItem value="socialMedia">Social Media</SelectItem>
                    <SelectItem value="friendReferral">
                    Friend / Family Referral
                    </SelectItem>
                    <SelectItem value="searchEngine">Search Engine</SelectItem>
                    <SelectItem value="advertisement">Advertisement</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                </SelectContent>
                </Select>
                <Button className={`bg-[#FF6634] w-[313px] max-w-[500px] h-[60px] mt-4 rounded p-6 hover:bg-[#FF6634] text-base font-bold  ${sora.className}`}>
                Submit
                </Button>
            </form>
            <div className="mt-20 flex flex-col md:flex-row gap-4 items-center justify-between">
                <Button 
                    aria-label="Previous Event"
                    className={`bg-white w-full max-w-[280px] h-[60px] rounded p-6 hover:bg-gray-100 border border-[#FF6634] text-base font-bold text-center text-[#FF6634] ${sora.className}`}
                >
                    Previous Event
                </Button>
                <Button 
                    aria-label="Next Event"
                    className={`bg-[#FF6634] w-full max-w-[280px] h-[60px] rounded p-6 hover:bg-white border border-[#FF6634] text-base font-bold text-center text-white ${sora.className}`}
                >
                    Next Event
                </Button>
            </div>
        </section>
    );
};

export default Registration;
