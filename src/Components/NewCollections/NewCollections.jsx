import React from 'react'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'

export default function NewCollections() {
    return (
        <div className='flex flex-col items-center gap-[10px] mb-[100px]'>
            <h1 className="text-text text-[50px]">NEW COLLECTIONS</h1>
            <hr className='w-[200px] h-[6px] rounded-[10px] bg-[#252525]' />
            <div className="grid grid-cols-4 gap-[30px] mt-[50px]">
                { new_collection.map((item, i) => {
                    return <Item key={ i } id={ item.id } name={ item.name } image={ item.image } new_price={ item.new_price } old_price={ item.old_price } />
                }) }
            </div>
        </div>
    )
}
