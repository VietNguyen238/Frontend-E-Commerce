import React, { useState, useContext } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

export default function Navbar() {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    return (
        <>
            <div className="fixed z-10 top-0 left-0 right-0 w-[100%] mt-0 p-0 block bg-white">
                <div className='flex justify-around p-3 shadow-[0_1px_3px_-2px_black]'>
                    <div className='flex items-center gap-3 cursor-pointer'>
                        <img src={ logo } alt='' className='' />
                        <p className='text-black font-semibold text-4xl'> SHOPPER </p>
                    </div>
                    <ul className='flex items-center list-none gap-12 text-gray-600 text-xl font-medium'>
                        <li onClick={ () => setMenu("shop") } className='cursor-pointer flex flex-col items-center font-medium gap-[4px]'>
                            <Link to='/'>Shop</Link>
                            { menu === "shop" ? <hr className='border-none w-[80%] h-[3px] rounded-lg bg-red-500' /> : <></> } </li>
                        <li onClick={ () => setMenu("mens") } className='cursor-pointer flex flex-col items-center font-medium gap-[4px]'>
                            <Link to='/mens'>Men</Link>
                            { menu === "mens" ? <hr className='border-none w-[80%] h-[3px] rounded-lg bg-red-500' /> : <></> } </li>
                        <li onClick={ () => setMenu("womens") } className='cursor-pointer flex flex-col items-center font-medium gap-[4px]'>
                            <Link to='/womens'>Women</Link>
                            { menu === "womens" ? <hr className='border-none w-[80%] h-[3px] rounded-lg bg-red-500' /> : <></> } </li>
                        <li onClick={ () => setMenu("kids") } className='cursor-pointer flex flex-col items-center font-medium gap-[4px]'>
                            <Link to='/kids'>Kids</Link>
                            { menu === "kids" ? <hr className='border-none w-[80%] h-[3px] rounded-lg bg-red-500' /> : <></> } </li>
                    </ul>
                    <div className='flex items-center gap-11'>
                        <button className='active:bg-slate-200 w-[147px] h-[48px] outline-none border border-gray-600 text-[24px] font-medium bg-white cursor-pointer rounded-[75px] items-center'>
                            <Link to='/login'>Login</Link>
                        </button>
                        <Link to='/cart'><img src={ cart_icon } alt='' className='' /></Link>
                        <div className="w-[22px] h-[22px] flex justify-center items-center mt-[-30px] ml-[-55px] rounded-2xl bg-red-500 text-white text-[14px]">
                            { getTotalCartItems() }
                        </div>
                    </div>
                </div>
            </div>
            <div className="block h-[90px]"></div>
        </>
    );
}
