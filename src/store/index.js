import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./auth-slice"
import cartSlice from "./cart-slice"
import uiSlice from "./ui-slice"

const store = configureStore({
    reducer: {
        authReducer: authSlice.reducer,
        cartReducer: cartSlice.reducer,
        uiReducer: uiSlice.reducer
    }
})
    
export default store