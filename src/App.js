import React from "react"
import {useSelector, useDispatch} from "react-redux"

import {increment, decrement, addNum} from "./store"

function App() {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Counter App</h1>
            <h2>{counter}</h2>

            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>

            <button onClick={() => dispatch(addNum(10))}>Add 10</button>
        </div>
    )
}

export default App