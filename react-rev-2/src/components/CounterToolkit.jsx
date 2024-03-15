import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux-toolkit/slices/counterSlice";

function CounterToolkit(props) {
    const counter = useSelector((state) => state.counter.counter);
    const dispatch = useDispatch();

    const inc = () => {
        dispatch(increment());
    };

    const dec = () => {
        dispatch(decrement());
    };


    return (
        <div>
            <h1>Counter Reducer Example</h1>
            <div>
                <div>
                    <button onClick={dec}>-1</button>
                </div>
                Counter: {counter}
                <div>
                    <button onClick={inc}>+1</button>
                </div>

            </div>
        </div>
    );
}




export default CounterToolkit;
// export de;