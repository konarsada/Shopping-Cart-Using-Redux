import {showNotification} from "./ui-slice"
import {replaceData} from "./cart-slice"

export const fetchData = () => {
    return async (dispatch, getState) => {
        const fetchHandler = async () => {
            const res = await fetch("https://shopping-cart-react-redux-default-rtdb.firebaseio.com/cartItem.json")
            const data = await res.json()
            
            return data
        }

        try {
            const cartData = await fetchHandler()
            dispatch(replaceData(cartData))
        }
        catch(error) {
            dispatch(showNotification({
                open: true,
                type: "error",
                message: "Sending request to fetch data failed"
            }))
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(showNotification({
            open: true,
            type: "warning",
            message: "Sending request ..."
        }))

        const sendRequest = async () => {
            const res = await fetch("https://shopping-cart-react-redux-default-rtdb.firebaseio.com/cartItem.json", {
                method: "PUT",
                body: JSON.stringify(cart)
            })

            const data = await res.json()

            dispatch(showNotification({
                open: true,
                type: "success",
                message: "Request sent to database successfully"
            }))
        }

        try {
            await sendRequest()
        }
        catch(error) {
            dispatch(showNotification({
                open: true,
                type: "error",
                message: "Sending request failed"
            }))
        }
    }
}