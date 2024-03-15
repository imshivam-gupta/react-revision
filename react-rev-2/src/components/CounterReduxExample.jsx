import { useDispatch, useSelector } from "react-redux";
import * as ActionTypes from "../store/actions/counterActions";

function CounterReduxExample(props) {
    const counter = useSelector((state) => state.counter.counter);
    const dispatch = useDispatch();


    const increment = () => {
        dispatch({ type: ActionTypes.INCREMENT });
    };

    const decrement = () => {
        dispatch({ type: ActionTypes.DECREMENT });
    };

    const increment_by = (value) => {
        dispatch({ type: ActionTypes.INCREMENT_BY, payload: value });
    }
    return (
        <div>
            <h1>Counter Reducer Example</h1>
            <div>
                <div>
                    <button onClick={decrement}>-1</button>
                </div>
                Counter: {counter}
                <div>
                    <button onClick={increment}>+1</button>
                </div>

                <form onSubmit={(e) => {
                    e.preventDefault();
                    increment_by(parseInt(e.target[0].value));
                }
                }>
                    <input type="number" />
                    <button type="submit">Add</button>
                </form>

            </div>
        </div>
    );
}




export default CounterReduxExample;
// export de;