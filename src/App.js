import React, {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"

import Auth from "./components/Auth"
import Layout from "./components/Layout"
import Notification from "./components/Notification"

import {sendCartData} from "./store/cart-actions"
import {fetchData} from "./store/cart-actions"

let isFirstRender = true;

function App() {
    const cart = useSelector(state => state.cartReducer)
    const notification = useSelector(state => state.uiReducer.notification)
    const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    useEffect(() => {
        if(isFirstRender) {
            isFirstRender = false
            return
        }

        if(cart.changed) dispatch(sendCartData(cart))

        // const sendRequest = async () => {
        //     dispatch(showNotification({
        //         open: true,
        //         type: "warning",
        //         message: "Sending request ..."
        //     }))

        //     const res = await fetch("https://shopping-cart-using-redux-default-rtdb.firebaseio.com/cartItems.json", {
        //         method: "PUT",
        //         body: JSON.stringify(cart)
        //     })

        //     const data = await res.json()

        //     dispatch(showNotification({
        //         open: true,
        //         type: "success",
        //         message: "Request sent to database successfully"
        //     }))
        // }

        // sendRequest().catch(e => (
        //     dispatch(showNotification({
        //         open: true,
        //         type: "error",
        //         message: "Sending request failed"
        //     }))
        // ))
    }, [cart, dispatch])

    return (
        <div className="App">
            {notification && (
                <Notification
                    type={notification.type}
                    message={notification.message}
                />
            )}

            {/*!isLoggedIn && <Auth />}
            {isLoggedIn && <Layout />*/}

            <Layout />
        </div>
    )
}

export default App