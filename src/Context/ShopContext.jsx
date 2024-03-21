import React, { createContext, useEffect, useState } from 'react'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [all_product, setAll_product] = useState([])
    const [cartItems, setCartItems] = useState(getDefaultCart())

    useEffect(() => {
        fetch('http://localhost:4000/v1/product/allproducts').then((response) => response.json()).then((data) => setAll_product(data))
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/v1/purchase/getcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: ""
            }).then((response) => response.json()).then((data) => setCartItems(data))
        }
    }, [])

    const addToCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))



        if (localStorage.getItem('auth-token')) {
            await fetch('http://localhost:4000/v1/purchase/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({ "itemId": itemId })
            }).then((response) => response.json()).then((data) => console.log(data))

        }
    }

    const removeAProduct = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (localStorage.getItem('auth-token')) {
            await fetch('http://localhost:4000/v1/purchase/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    "auth-token": `${localStorage.getItem('auth-token')}`,
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({ 'itemId': itemId })
            }).then((response) => response.json()).then((data) => console.log(data))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - prev }))

    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmount
    }

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item]
            }
        }
        return totalItem
    }

    const contextValue = { all_product, cartItems, addToCart, removeAProduct, removeFromCart, getTotalCartAmount, getTotalCartItems }

    return (
        <ShopContext.Provider value={ contextValue }>
            { props.children }
        </ShopContext.Provider>
    )
}

export default ShopContextProvider