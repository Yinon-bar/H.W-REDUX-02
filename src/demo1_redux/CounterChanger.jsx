import { useState } from "react"
import { useDispatch } from "react-redux"



export default function CounterChanger() {
    const [input, setInput] = useState(0)


    const dispatch = useDispatch()

    const add = () => {
        const action = { type: "ADD", payload: input }
        dispatch(action)
    }
    const subtract = () => {
        const action = { type: "SUBTRACT", payload: input }
        dispatch(action)
    }


    return (
        <div style={{ border: "2px solid red" }}>


            <input type="number" onChange={e => setInput(+e.target.value)} /> <br />

            <button onClick={add}>+</button>
            <button onClick={subtract}>-</button>

        </div>
    )
}



