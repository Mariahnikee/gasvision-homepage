import React from 'react'
import aboutusimg from '../images/aboutusimg.png'

function AboutUs() {
  return (
    <div className="bg-[#0e041d] text-azure px-14 py-3 mx-auto w-100  md:flex md:justify-between md:items-center md:gap-5">
      <div className="flex-1 mb-5 md:mb-0">
        <h2 className="text-4xl font-bold text-yellow-300 mb-2">
          "Easy and Safe Gas Management for All"
        </h2>
        <p className="text-white text-base mb-4">
          At GasVision, our mission is to make gas management effortless and secure.We've developed innovative technology that fits perfectly into your routine,so you can focus on what matters most--without the hassele of running out of ghas or worrying about safety.
        </p>
        <button className="bg-[#2f4e30] text-yellow-300 px-5 py-2 rounded hover:bg-green-700 transition">
          Read More
        </button>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <img src={aboutusimg} alt="about us" className="max-w-full max-h-80 md:h-auto" />
      </div>
    </div>
  )
}

export default AboutUs
