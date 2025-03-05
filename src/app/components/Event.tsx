import { Button } from '@/components/ui/button';
import { DM_Sans, Sora } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
import Registration from './Registration';

const sora = Sora({
    subsets: ["latin"]
});

const dm = DM_Sans({
    subsets: ["latin"],
});

const Event = () => {
    return (
        <section className="bg-[#ffede7] py-8">
            <div className="container mx-auto px-4">
                <div className="flex justify-center">
                    <Image 
                        src="/event_banner.png" 
                        alt="Event_Banner" 
                        width={1221} 
                        height={658} 
                        className="mx-auto" 
                    />
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-8">
                    <div className="mb-4 md:mb-0 text-center md:text-left">
                        <h2 className={`text-[#002f72] text-4xl ${sora.className} font-bold`}>
                            The Unlimited Man Conference
                        </h2>
                        <p className={`${dm.className} font-medium text-2xl mt-2`}>
                            Sunday, 19th June, 2022 | 10am
                        </p>
                    </div>
                    <div>
                        <Button className="bg-[#E10000] hover:bg-[#E10000] p-7">
                            <p className={`${dm.className} font-medium text-base`}>
                                This event require registration
                            </p>
                        </Button>
                    </div>
                </div> <br />
                <div className={`${dm.className} font-normal text-base md:text-2xl text-[#00040B]`}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Id lectus est integer nam faucibus dictum et sapien tellus. Nam feugiat nam ut auctor a. Velit mus nisl commodo mi tortor. Eget nunc neque urna adipiscing. Ut mattis senectus egestas a. Vitae orci aliquet sed amet amet. Feugiat ullamcorper aliquam adipiscing adipiscing porttitor nisl netus et libero. Purus rutrum interdum curabitur odio et aliquam amet ornare. Tortor malesuada risus nisl odio molestie. 
                    </p>
                    <br />
                    <p>
                        Eleifend tempus interdum mauris suspendisse. Nec ornare mauris volutpat ornare malesuada. Tortor aliquet pellentesque cursus facilisi mi erat vitae. Id gravida egestas commodo ac. Tempus faucibus leo at luctus malesuada eget. Lectus nunc quis diam viverra maecenas nisi. Quis arcu at massa malesuada duis imperdiet. Egestas morbi nibh orci pellentesque in. Sem morbi ut accumsan turpis consectetur quis elit sed. Ut elementum accumsan quam in. Pellentesque amet tortor diam sollicitudin. Sagittis blandit et ut tincidunt purus.
                    </p>
                </div>
            </div>

            <Registration />
        </section>
    );
};

export default Event;
