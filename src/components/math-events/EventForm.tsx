import NavigationButtons from "@/common/Buttons/Navigation";
import ReusableButton from "@/common/Buttons/ReusableB";
import React from "react";

function EventForm() {
  function handleClick(): void {
    console.log("Submit Form");
  }

  return (
    <section className="bg-[#FEF6F0] py-12 px-6 sm:px-16 px-3 text-blue-900">
      {/* ======================= && •FORM HEADER• && ====================== */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#002F72] mb-6">
        Register for the event
      </h2>

      {/* ======================= && •FORM FIELDS• && ====================== */}
      <form className="sm:max-w-3xl w-full  mx-auto bg-transparent shadow-lg  p-8 rounded-lg">
        <div className="grid grid-cols-1 gap-4 ">
          {[
            "Full Name",
            "Email Address",
            "Phone Number",
            "House Address",
            "Landmark",
            "Sex",
            "Marital Status",
            "Occupation",
            "Date of Birth",
            "How did you hear about us?",
          ].map((placeholder, index) => (
            <input
              key={index}
              type="text"
              placeholder={placeholder}
              className="border border-[#0D57BE]/40 px-4 py-2 rounded-sm focus:ring-2 focus:ring-orange-500 placeholder-[#0D57BE] focus:outline-none shadow-lg h-[49px] font-light w-[100%]"
            />
          ))}
        </div>

        {/* ======================= && •SUBMIT BUTTON• && ====================== */}
        <div className="mt-6 text-center">
          <ReusableButton onClick={handleClick}>
            Submit
          </ReusableButton>
        </div>
      </form>

      {/* ======================= && •NAVIGATION BUTTONS• && ====================== */}
      <div className="mt-[6rem]">
        <NavigationButtons />
      </div>
    </section>
  );
}

export default EventForm;
