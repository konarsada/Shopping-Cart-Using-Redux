import React from "react"
import {useSelector} from "react-redux"

import CartItem from "./CartItem"
import "./Cart.css"

const CartItems = () => {
    const cartItems = useSelector(state => state.cartReducer.itemsList)

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        <CartItem
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            total={item.totalPrice}
                            quantity={item.quantity}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CartItems