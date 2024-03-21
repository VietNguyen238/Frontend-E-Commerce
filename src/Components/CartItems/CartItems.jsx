import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

export default function CartItems() {
    const { all_product, removeAProduct, addToCart, removeFromCart, cartItems, getTotalCartAmount } = useContext(ShopContext)
    return (
        <div className='my-[50px] mx-[100px]'>
            <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] py-[20px] text-[#454545] text-[18px] font-semibold">
                <p className="">Products</p>
                <p className="">Title</p>
                <p className="">Price</p>
                <p className="">Quanlity</p>
                <p className="">Total</p>
                <p className="">Remove</p>
            </div>
            <hr />
            { all_product.map((e, index) => {
                if (cartItems[e.id] > 0) {
                    return <div key={ index }>
                        <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] py-[20px] text-[#454545] text-[17px] font-medium">
                            <img src={ e.image } alt="" className='h-[80px]' />
                            <p className="">{ e.name }</p>
                            <p className="">${ e.new_price }</p>
                            <div className="flex justify-between items-center mr-[40px]">
                                <button onClick={ () => removeAProduct(e.id) } className='border border-solid border-[#ebebeb] h-[20px] w-[20px] pb-[3px] flex justify-center items-center rounded-[10px]'>
                                    -
                                </button>
                                <button className="w-[45px] h-[35px] border-[2px] border-solid border-[#ebebeb] bg-[#fff]">
                                    { cartItems[e.id] }
                                </button>
                                <button onClick={ () => addToCart(e.id) } className='border border-solid border-[#ebebeb] h-[20px] w-[20px] flex justify-center items-center rounded-[10px]'>
                                    +
                                </button>
                            </div>
                            <p className="">${ e.new_price * cartItems[e.id] }</p>
                            <img src={ remove_icon } onClick={ () => removeFromCart(e.id) } alt="" className='w-[15px] mx-[40px] cursor-pointer' />
                        </div>
                        <hr className='h-[3px] border-0 bg-[#e2e2e2]' />
                    </div>
                }
                return null
            }) }
            <div className="flex my-[100px]">
                <div className="flex flex-1 flex-col mr-[200px] gap-[40px]">
                    <h1 className="">Cart Totals</h1>
                    <div className="">
                        <div className="flex justify-between py-[15px]">
                            <p>Subtatal</p>
                            <p>${ getTotalCartAmount() }</p>
                        </div>
                        <hr />
                        <div className="flex justify-between py-[15px]">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="flex justify-between py-[15px]">
                            <h3 className='font-semibold'>Total</h3>
                            <h3 className='font-semibold'>${ getTotalCartAmount() }</h3>
                        </div>
                    </div>
                    <button className='w-[270px] h-[50px] rounded-[4px] outline-none border-none bg-[#ff4141] text-[16px] text-[#fff] font-semibold'>
                        PROCEED TO CHECKOUT
                    </button>
                </div>
                <div className="flex-1 font-medium text-[16px]">
                    <p className="text-[#555]">If you have a promo code, Enter it here</p>
                    <div className="w-[500px] mt-[15px] pl-[20px] h-[45px] bg-[#eaeaea]">
                        <input type="text" placeholder='Promo code' className="outline-none border-none bg-transparent text-[16px] w-[350px] h-[45px]" />
                        <button className='w-[130px] h-[45px] text-[16px] bg-black text-white cursor-pointer'>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
