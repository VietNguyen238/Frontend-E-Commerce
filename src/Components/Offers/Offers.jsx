import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'
export default function Offers() {
    return (
        <div className='w-[70%] h-[380px] flex m-auto py-0 px-[100px] mb-[100px] bg-gradient-to-b from-violet-gradient to-white'>
            <div className="flex-1 flex flex-col justify-center">
                <h1 className="font-semibold text-[65px] leading-[1.2] text-text">Exclusive</h1>
                <h1 className="font-semibold text-[65px] leading-[1.2] text-text">Offers for you</h1>
                <p className="font-semibold text-[20px] mt-[10px] text-text">ONLY ON BEST SELLERS PRODUCTS</p>
                <button className='w-[230px] h-[55px] rounded-[35px] bg-[#ff4141] border-none text-white text-[22px] font-medium mt-[30px] cursor-pointer'>Cheack Now</button>
            </div>
            <div className="pt-[30px] pr-[20px]">
                <img src={ exclusive_image } alt="" className='w-[240px]' />
            </div>
        </div>
    )
}
