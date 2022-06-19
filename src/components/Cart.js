import React from "react"
import {useSelector, useDispatch} from "react-redux"

import {setShowCart} from "../store/cart-slice"
import "./Cart.css"

const Cart = () => {
    const quantity = useSelector(state => state.cartReducer.totalQuantity)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setShowCart())
    }

    return (
        <div className="cartIcon">
            <h3 onClick={handleClick}>Cart: {quantity} Items</h3>
        </div>
    )
}

export default Cart