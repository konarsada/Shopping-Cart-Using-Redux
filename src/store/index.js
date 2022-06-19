import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./auth-slice"
import cartSlice from "./cart-slice"

const store = configureStore({
    reducer: {
        authReducer: authSlice.reducer,
        cartReducer: cartSlice.reducer
    }
})
    
export default store