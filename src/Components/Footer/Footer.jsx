import React from 'react'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatshapp_icon from '../Assets/whatsapp_icon.png'
export default function Footer() {
    return (
        <div className='flex flex-col justify-center items-center gap-[50px]'>
            <div className="flex items-center gap-[20px]">
                <img src={ footer_logo } alt="" />
                <p className="text-[38px] text-[#383838] mt-[15px] font-bold">SHOPPER</p>
            </div>
            <ul className='flex gap-[50px] text-[#252525] text-[20px] list-none'>
                <li className="cursor-pointer">Company</li>
                <li className="cursor-pointer">Products</li>
                <li className="cursor-pointer">Offices</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contact</li>
            </ul>
            <div className="flex gap-[20px]">
                <div className="p-[8px] pb-[6px] bg-[#fbfbfb] border border-solid cursor-pointer rounded-[3px] border-[#ebebeb]">
                    <img src={ instagram_icon } alt="" />
                </div>
                <div className="p-[8px] pb-[6px] bg-[#fbfbfb] border border-solid cursor-pointer rounded-[3px] border-[#ebebeb]">
                    <img src={ pintester_icon } alt="" />
                </div>
                <div className="p-[8px] pb-[6px] bg-[#fbfbfb] border border-solid cursor-pointer rounded-[3px] border-[#ebebeb]">
                    <img src={ whatshapp_icon } alt="" />
                </div>
            </div>
            <div className="flex gap-[30px] flex-col items-center w-[100%] mb-[30px] text-[#1a1a1a] text-[20px]">
                <hr className='w-[80%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7]' />
                <p className="">Copyrright @ 2024 - All Right Reserved.</p>
            </div>
        </div>
    )
}
