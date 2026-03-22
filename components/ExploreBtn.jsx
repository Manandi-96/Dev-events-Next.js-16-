'use client'
import Image from "next/image"

const exploreBtn = () => {
  return (
    <button type="button" className="bg-blue-500 text-white px-6 py-3 rounded-full mt-8 hover:bg-blue-600 transition-colors duration-300"
    onClick={()=>console.log('Click explore btn')}
    >
         <a href="#events">
            Explore Events
            <Image src="/icons/arrow-down.svg" alt="Arrow Down" width={16} height={16} className="inline-block ml-2" />
         </a>
        
        </button>
  )
}

export default exploreBtn