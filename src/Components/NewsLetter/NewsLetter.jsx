import React from 'react'

export default function NewsLetter() {
    return (
        <div className="w-[65%] h-[320px] flex flex-col justify-center items-center m-auto px-0 py-[140px] mb-[150px] bg-gradient-to-b from-violet-gradient to-white gap-[30px]">
            <h1 className="text-[#454545] font-semibold text-[55px]">Get Exclusive Offers On Your Email</h1>
            <p className="text-[#454545] text-[20px]">Subscribe to our newletter and stay updated</p>
            <div className="flex items-center justify-center bg-white w-[730px] h-[55px] rounded-[80px] border border-solid border-[#e3e3e3]">
                <input type="email" placeholder='Your email id' className='w-[500px] ml-[30px] border-none outline-none text-[#616161] text-[16px]' />
                <button className='w-[210px] h-[55px] rounded-[80px] bg-black text-white text-[16px] cursor-pointer'>Subscribe</button>
            </div>
        </div>
    )
}
