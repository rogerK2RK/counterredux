import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../features/counter/counter";

export function Count() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter</h1>
            <p>Valeur : { count }</p>
            <button onClick={() => dispatch(increment())}>Incrémenter</button>
            <button onClick={() => dispatch(decrement())}>Décrémenter</button>
        </div>
    )
}