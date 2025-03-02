import React from 'react'
import ReusableButton from './ReusableB'

function NavigationButtons() {
  return (
    <div>
        {/* ======================= && •NAVIGATION BUTTONS• && ====================== */}
        <div className="flex justify-between w-[100%] mx-auto mt-10">
            <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-sm hover:bg-orange-500 hover:text-white transition w-[160px] sm:w-[240px]">
            Previous Event
            </button>
            <ReusableButton onClick={() => console.log("Next Event")}>
                Next Event
            </ReusableButton>
        </div>
    </div>
  )
}

export default NavigationButtons