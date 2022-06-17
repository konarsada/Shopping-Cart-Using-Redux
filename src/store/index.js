import {createStore} from "redux"

export function increment() {
    return {
        type: "INCREMENT"
    }
}

export function decrement() {
    return {
        type: "DECREMENT"
    }
}

export function addNum(num) {
    return {
        type: "ADDNUM",
        payload: num
    }
}

function reducer(state = {counter: 0}, action) {
    switch(action.type) {
        case "INCREMENT":
            return {...state, counter: state.counter + 1}
        
        case "DECREMENT":
            return {...state, counter: state.counter - 1}
        
        case "ADDNUM":
            return {
                ...state,
                counter: state.counter + action.payload
            }
        
        default:
            return state
    }
}

const store = createStore(reducer)

store.subscribe(() => {
    console.log(store.getState())
})

export default store