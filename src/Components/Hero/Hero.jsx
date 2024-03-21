import React from 'react'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
export default function Hero() {
    return (
        <div className="h-[700px] mb-[50px] flex bg-gradient-to-b from-violet-gradient to-white">
            <div className="flex-1 flex flex-col justify-center gap-5 pl-44 leading-[1.1]">
                <h2 className="text-[#090909] font-semibold text-2xl">NEW ARRIVALS ONLY</h2>
                <div className="">
                    <div className="flex items-center gap-5">
                        <p className="text-8xl text-text font-bold">new</p>
                        <img src={ hand_icon } alt="" className='w-[105px]' />
                    </div>
                    <p className="text-8xl text-text font-bold">collections</p>
                    <p className="text-8xl text-text font-bold">for everyone</p>
                </div>
                <div className="flex justify-center items-center gap-[15px] w-[310px] h-[70px] rounded-[75px] mt-[30px] bg-red-500 text-white font-medium text-[22px] cursor-pointer">
                    <div>Latest Collection</div>
                    <img src={ arrow_icon } alt="" />
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img src={ hero_image } alt="" className='w-[500px]' />
            </div>
        </div>
    )
}
