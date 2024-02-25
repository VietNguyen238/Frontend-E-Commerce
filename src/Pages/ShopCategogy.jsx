import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import download_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

export default function ShopCategogy(props) {
    const { all_product } = useContext(ShopContext)
    return (
        <div className="flex flex-col">
            <img src={ props.banner } alt="" className='w-[82%] my-[30px] mx-auto block' />
            <div className="flex my-0 mx-[140px] justify-between items-center">
                <p>
                    <span className="font-semibold">Showing 1-12</span> out of 36 products
                </p>
                <div className="py-[8px] px-[20px] flex gap-1 cursor-pointer items-center rounded-[40px] border border-solid border-[#888]">
                    Sort by <img src={ download_icon } alt="" />
                </div>
            </div>
            <div className="mx-[140px] my-[20px] grid grid-cols-4 gap-y-[80px]">
                {
                    all_product.map((item, i) => {
                        if (props.category === item.category) {
                            return <Item key={ i } id={ item.id } name={ item.name } image={ item.image } old_price={ item.old_price } new_price={ item.new_price } />;
                        }
                        else {
                            return null;
                        }
                    })
                }
            </div>
            <div className="flex justify-center items-center cursor-pointer my-[150px] mx-auto w-[220px] h-[55px] rounded-[75px] text-[#787878] text-[18px] font-medium bg-[#ededed] ">
                Explore More
            </div>
        </div>
    )
}
