import React from 'react';
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../features/counter/counterSlice";

export function Counter() {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(increment())}>Incrémenter</button>
            <button onClick={() => dispatch(decrement())}>Décrémenter</button>
        </div>
    )
}