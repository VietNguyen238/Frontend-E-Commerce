import React from 'react'

export default function DescriptionBox() {
    return (
        <div className="my-[100px] mx-[100px]">
            <div className="flex">
                <div className="flex items-center justify-center text-[16px] font-semibold border-[#d0d0d0] w-[170px] h-[60px] border border-solid">
                    Descirption
                </div>
                <div className="flex items-center justify-center text-[16px] font-semibold border-[#d0d0d0] w-[170px] h-[60px] border border-solid  bg-[#fbfbfb] text-[#555]">
                    Reviews (122)
                </div>
            </div>
            <div className="flex flex-col gap-[25px] border border-solid border-[#d0d0d0] p-[48px] pb-[70px]">
                <p className="">
                    An e-commerce website is an online platform that facilitates the buying and selling of products services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility and the global reach they offer.
                </p>
                <p className="">
                    E-commerce websites typically display products or services along with detailed descriptions, images, prices and any available variations (e.g, sizes, colors). Each products usually has its own dedicated page with relevant information.
                </p>
            </div>
        </div>
    )
}
