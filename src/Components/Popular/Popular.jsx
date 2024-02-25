import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item';
export default function Popular() {
    return (
        <div className="flex flex-col items-center gap-[10px] h-[90vh]">
            <h1 className="text-text text-[50px]">POPULAR IN WOMEN</h1>
            <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]' />
            <div className="mt-[5px] flex gap-[30px]">
                { data_product.map(function (item, i) {
                    return <Item key={ i } id={ item.id } name={ item.name } image={ item.image } new_price={ item.new_price } old_price={ item.old_price } />;
                })
                }</div>
        </div>
    )
}