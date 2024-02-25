import React from 'react'

export default function LoginSingup() {
    return (
        <div className='h-[80vh] bg-[#fce3fe] pt-[100px] w-[100%]'>
            <div className="w-[580px] h-[600px] m-auto py-[40px] px-[60px] bg-white">
                <h1 className="my-[20px] mx-0">Sign Up</h1>
                <div className="flex flex-col gap-[30px] mt-[30px]">
                    <input type="text" placeholder='Your Name' className="h-[72px] w-[100%] pl-[20px] outline-none text-[#5c5c5c] text-[18px] border border-solid border-[#c9c9c9]" />
                    <input type="email" placeholder='Email Address' className="h-[72px] w-[100%] pl-[20px] outline-none text-[#5c5c5c] text-[18px] border border-solid border-[#c9c9c9]" />
                    <input type="password" placeholder='Password' className="h-[72px] w-[100%] pl-[20px] outline-none text-[#5c5c5c] text-[18px] border border-solid border-[#c9c9c9]" />
                </div>
                <button className='w-[580px] h-[72px] text-white mt-[30px] border-none text-[24px] font-medium cursor-pointer bg-[#ff4141]'>Continue</button>
                <p className="mt-[20px] text-[18px] font-medium text-[#5c5c5c]">
                    Already have an account? <span className="font-semibold text-[#ff4141]">Login here</span>
                </p>
                <div className="flex items-center mt-[25px] gap-[20px] text-[#5c5c5c] text-[18px] font-medium">
                    <input type="checkbox" name='' id='' />
                    <p className="">By continuing, i agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    )
}
