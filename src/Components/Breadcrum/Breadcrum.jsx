import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'

export default function Breadcrum(props) {
    const { product } = props
    return (
        <div className="flex items-center mx-[100px] my-[30px] gap-[8px] text-[#5e5e5e] text-[16px] font-semibold capitalize">
            HOME <img src={ arrow_icon } alt="" />
            SHOP <img src={ arrow_icon } alt="" />
            { product.category }
            <img src={ arrow_icon } alt="" />
            { product.name }
        </div>
    )
}
