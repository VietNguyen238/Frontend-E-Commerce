import React, { useContext } from 'react'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

export default function ProductDisplay(props) {
    const { product } = props
    const { addToCart } = useContext(ShopContext)
    return (
        <div className='flex my-0 mx-[100px]'>
            <div className="flex gap-[17px]">
                <div className="flex flex-col gap-[16px]">
                    <img src={ product.image } alt="" className="h-[135px] w-[165px] object-cover" />
                    <img src={ product.image } alt="" className="h-[135px] w-[165px] object-cover" />
                    <img src={ product.image } alt="" className="h-[135px] w-[165px] object-cover" />
                    <img src={ product.image } alt="" className="h-[135px] w-[165px] object-cover" />
                </div>
                <div className="">
                    <img src={ product.image } alt="" className="w-[700px] h-[590px] object-cover" />
                </div>
            </div>
            <div className="ml-[70px] flex flex-col">
                <h1 className="text-[#3d3d3d] font-bold text-[40px]">{ product.name }</h1>
                <div className="flex items-center mt-[13px] gap-[5px] text-[16px] text-[#1c1c1c]">
                    <img src={ star_icon } alt="" />
                    <img src={ star_icon } alt="" />
                    <img src={ star_icon } alt="" />
                    <img src={ star_icon } alt="" />
                    <img src={ star_dull_icon } alt="" />
                    <p>(120)</p>
                </div>
                <div className="flex mb-[20px] mt-0 gap-[30px] text-[24px] font-bold">
                    <div className="text-[#818181] line-through">
                        ${ product.old_price }
                    </div>
                    <div className="text-[#ff4141]">
                        ${ product.new_price }
                    </div>
                </div>
                <div>
                    A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves worn as an undershirt or outer garment
                </div>
                <div className="">
                    <h1 className="mt-[30px] font-semibold text-[20px] text-[#656565]">Select Size</h1>
                    <div className="flex gap-[20px] my-[20px]">
                        <div className="py-[10px] px-[20px] bg-[#fbfbfb] border border-solid border-[#ebebeb] rounded-[4px] cursor-pointer">S</div>
                        <div className="py-[10px] px-[20px] bg-[#fbfbfb] border border-solid border-[#ebebeb] rounded-[4px] cursor-pointer">M</div>
                        <div className="py-[10px] px-[20px] bg-[#fbfbfb] border border-solid border-[#ebebeb] rounded-[4px] cursor-pointer">L</div>
                        <div className="py-[10px] px-[20px] bg-[#fbfbfb] border border-solid border-[#ebebeb] rounded-[4px] cursor-pointer">XL</div>
                        <div className="py-[10px] px-[20px] bg-[#fbfbfb] border border-solid border-[#ebebeb] rounded-[4px] cursor-pointer">XXL</div>
                    </div>
                </div>
                <button onClick={ () => addToCart(product.id) } className="py-[14px] px-[30px] w-[200px] text-[16px] font-semibold text-white bg-[#ff4141] mb-[30px] mt-[10px] rounded-[4px] outline-none border-none cursor-pointer">ADD TO CARD</button>
                <p className="mt-[10px]"><span className='font-semibold'>Category: </span>Women, T-Shirt, Crop Top </p>
                <p className="mt-[10px]"><span className='font-semibold'>Tags: </span>Modern, Latest</p>
            </div>
        </div>
    )
}
