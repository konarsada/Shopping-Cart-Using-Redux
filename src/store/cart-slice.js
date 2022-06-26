import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false,
        changed: false
    },
    reducers: {
        addToCart(state, action) {
            state.changed = true
            const newItem = action.payload

            // to check if item is aready available
            const existingItem = state.itemsList.find(item => item.id === newItem.id)

            if(existingItem) {
                existingItem.quantity += 1
                existingItem.totalPrice += newItem.price
            }
            else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                })

                state.totalQuantity += 1
            }
        },
        removeFromCart(state, action) {
            state.changed = true
            const id = action.payload

            const existingItem = state.itemsList.find(item => item.id === id)

            if(existingItem.quantity === 1) {
                state.itemsList = state.itemsList.filter(item => item.id !== id)
                state.totalQuantity -= 1
            }
            else if(existingItem.quantity > 1) {
                existingItem.quantity -= 1
                existingItem.totalPrice -= existingItem.price
            }
        },
        replaceData(state, action) {
            state.totalQuantity = action.payload.totalQuantity
            state.itemsList = action.payload.itemsList

            if(!state.itemsList) {
                state.itemsList = []
                state.totalQuantity = 0
            }
        },
        setShowCart(state) {
            state.showCart = !state.showCart
        }
    }
})

export const {
    addToCart,
    removeFromCart,
    replaceData,
    setShowCart
} = cartSlice.actions

export default cartSlice