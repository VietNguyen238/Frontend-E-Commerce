import React, { useState } from 'react'

export default function LoginSingup() {
    const [state, setState] = useState("Login")
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
    })

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const login = async () => {
        console.log("Login", formData)
        let responseData
        await fetch("http://localhost:4000/v1/user/login", {
            method: "POST",
            headers: {
                Accept: "application/form-data",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }).then((res) => res.json()).then((data) => responseData = data)

        if (responseData.success) {
            console.log("respondata", responseData)
            localStorage.setItem("auth-token", responseData.token)
            window.location.replace("/")
        } else {
            alert(responseData.errors)
        }
    }
    const signup = async () => {
        console.log("Sign", formData)
        let responseData
        await fetch("http://localhost:4000/v1/user/signup", {
            method: "POST",
            headers: {
                Accect: "application/form-data",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }).then((res) => res.json()).then((data) => responseData = data)
        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token)
            window.location.replace("/")
        } else {
            alert(responseData.errors)
        }
    }
    return (
        <>
            <div className=' bg-violet-gradient py-[100px] w-[100%]'>
                <div className="w-[580px] h-[600px] m-auto px-[40px] py-[60px] bg-white rounded-[10px]">
                    <h1 className="text-[30px] font-bold">{ state }</h1>
                    <div className="flex flex-col gap-[30px] mt-[30px]">
                        { state === "Sign Up" ? <input onChange={ changeHandler } name='username' value={ formData.username } type="text" placeholder='Your Name' className="h-[60px] w-[100%]  rounded-[4px] pl-[20px] outline-none text-[#5c5c5c] text-[18px] border border-solid border-[#c9c9c9]" /> : <></> }
                        <input type="email" onChange={ changeHandler } name='email' value={ formData.email } placeholder='Email Address' className="h-[60px] w-[100%]  rounded-[4px] pl-[20px] outline-none text-[#5c5c5c] text-[18px] border border-solid border-[#c9c9c9]" />
                        <input type="password" onChange={ changeHandler } name='password' value={ formData.password } placeholder='Password' className="h-[60px] w-[100%]  rounded-[4px] pl-[20px] outline-none text-[#5c5c5c] text-[18px] border border-solid border-[#c9c9c9]" />
                    </div>
                    <button onClick={ () => { state === "Login" ? login() : signup() } } className='w-[100%] rounded-[4px] h-[60px] text-white mt-[30px] border-none text-[28px] font-medium cursor-pointer bg-[#ff4141]'>
                        Continue
                    </button>
                    { state === "Sign Up" ? <p className="mt-[20px] text-[18px] font-medium text-[#5c5c5c]">
                        Already have an account? <span className="font-semibold text-[#ff4141] cursor-pointer" onClick={ () => setState("Login") }>Login here</span>
                    </p> : <p className="mt-[20px] text-[18px] font-medium text-[#5c5c5c]">
                        Crreaten an account? <span className="font-semibold text-[#ff4141] cursor-pointer" onClick={ () => setState("Sign Up") }>Click here</span>
                    </p> }
                    <div className="flex items-center mt-[15px] gap-[20px] text-[#5c5c5c] text-[18px] font-medium">
                        <input type="checkbox" name='' id='' />
                        <p className="">By continuing, i agree to the terms of use & privacy policy</p>
                    </div>
                </div>
            </div>
        </>
    )
}
