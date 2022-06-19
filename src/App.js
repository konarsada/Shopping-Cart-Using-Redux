import React from "react";
import {useSelector} from "react-redux"

import Auth from "./components/Auth";
import Layout from "./components/Layout";

function App() {
    const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn)

    const cartItems = useSelector(state => state.cartReducer.itemsList)
    console.log(cartItems)
    
    return (
        <div className="App">
            {!isLoggedIn && <Auth />}
            {isLoggedIn && <Layout />}
        </div>
    )
}

export default App