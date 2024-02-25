import React from 'react'

export default function Item(props) {
    return (
        <div className='w-[300px] hover:scale-[1.05] duration-[0.6s]'>
            <img src={ props.image } alt="" />
            <p className="mx-0 my-[6px]">{ props.name }</p>
            <div className="flex gap-5">
                <div className="text-[18px] font-semibold text-[#374151]">${ props.new_price }</div>
                <div className="text-[18px] font-medium text-[#8c8c8c] line-through">${ props.old_price }</div>
            </div>
        </div>
    )
}
