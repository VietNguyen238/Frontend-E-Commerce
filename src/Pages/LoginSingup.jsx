import React from 'react'

export default function LoginSingup() {
    return (
        <>
            <div className=' bg-violet-gradient py-[100px] w-[100%]'>
                <div className="w-[580px] h-[600px] m-auto px-[40px] py-[60px] bg-white rounded-[10px]">
                    <h1 className="text-[30px] font-bold">Sign Up</h1>
                    <div className="flex flex-col gap-[30px] mt-[30px]">
                        <input type="text" placeholder='Your Name' className="h-[60px] w-[100%]  rounded-[4px] pl-[20px] outline-none text-[#5c5c5c] text-[18px] border border-solid border-[#c9c9c9]" />
                        <input type="email" placeholder='Email Address' className="h-[60px] w-[100%]  rounded-[4px] pl-[20px] outline-none text-[#5c5c5c] text-[18px] border border-solid border-[#c9c9c9]" />
                        <input type="password" placeholder='Password' className="h-[60px] w-[100%]  rounded-[4px] pl-[20px] outline-none text-[#5c5c5c] text-[18px] border border-solid border-[#c9c9c9]" />
                    </div>
                    <button className='w-[100%] rounded-[4px] h-[60px] text-white mt-[30px] border-none text-[28px] font-medium cursor-pointer bg-[#ff4141]'>Continue</button>
                    <p className="mt-[20px] text-[18px] font-medium text-[#5c5c5c]">
                        Already have an account? <span className="font-semibold text-[#ff4141]">Login here</span>
                    </p>
                    <div className="flex items-center mt-[15px] gap-[20px] text-[#5c5c5c] text-[18px] font-medium">
                        <input type="checkbox" name='' id='' />
                        <p className="">By continuing, i agree to the terms of use & privacy policy</p>
                    </div>
                </div>
            </div>
        </>
    )
}
