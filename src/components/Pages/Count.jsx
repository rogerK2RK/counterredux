import { useSelector } from "react-redux";
import { increment, decrement } from "../../features/counter/counterSlice";

export function Count() {
    const count = useSelector((state) => state.counter.value);

    return <h1>Count: {count}</h1>;
}