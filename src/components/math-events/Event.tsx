import React from "react";
import Image from "next/image"; 
import Link from "next/link";
import EventForm from "./EventForm";

function Events() {
  return (
    <section className="py-12 px-6 md:px-16 lg:px-24 bg-[#FEF6F0]">


     
      {/* ======================= && •EVENTS IMAGE• && ====================== */}
      <div className="relative mb-8">
          <Image
            src="/background/mens_fellowship.jpeg"
            alt="The Unlimited Man Conference"
            width={1221}
            height={658}
            className="w-[1221px] h-[608px] object-cover object-[center_top] rounded-lg shadow-lg rounded-lg overflow-hidden"
          />
      </div>

                     

         {/* ======================= && •EVENTS HEADER• && ====================== */}
        <div className="mb-8 mt-5">
          
          <div className="flex justify-between">
            <h2 className="text-lg sm:text-[40px] font-bold text-[#002F72]">
              The Unlimited Man Conference
            </h2>

            
            <Link
              href="/registration"
              className="bg-red-600 text-white flex justify-center items-center text-center w-[291px] h-[57px] rounded-md"
            >
              This event requires registration
            </Link>
            
          </div>

          <p className="text-gray-900 text-sm sm:text-2xl mt-2">
            Sunday, 19th June, 2022 | 10am
          </p>
        </div>

        {/* ======================= && •EVENTS DETAILS• && ====================== */}
        <div className="line-height-[31.25]">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Id lectus est integer nam faucibus dictum et sapien tellus. Nam feugiat nam ut auctor a. Velit mus nisl commodo mi tortor. Eget nunc neque urna adipiscing. Ut mattis senectus egestas a. Vitae orci aliquet sed amet amet. Feugiat ullamcorper aliquam adipiscing adipiscing porttitor nisl netus et libero. Purus rutrum interdum curabitur odio et aliquam amet ornare. Tortor malesuada risus nisl odio molestie.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-4">
            Eleifend tempus interdum mauris suspendisse. Nec ornare mauris volutpat ornare malesuada. Tortor aliquet pellentesque cursus facilisi mi erat vitae. Id gravida egestas commodo ac. Tempus faucibus leo at luctus malesuada eget. Lectus nunc quis diam viverra maecenas nisi. Quis arcu at massa malesuada duis imperdiet. Egestas morbi nibh orci pellentesque in. Sem morbi ut accumsan turpis consectetur quis elit sed. Ut elementum accumsan quam in. Pellentesque amet tortor diam sollicitudin. Sagittis blandit et ut tincidunt purus.
          </p>
        </div>
     
        {/* ======================= && •EVENTS FORM• && ====================== */}
        <EventForm />

        
    </section>
  );
}

export default Events;
