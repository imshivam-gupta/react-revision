import React, { useReducer } from "react";

const reducer = (state,action) => {
    switch(action.type){
        case 'increment':
            return {count : state.count+1};
        case 'decrement':
            return {count: state.count-1};
    }
}

//pure functions
// 1. they should give smae output on prvidding same input varaible value each time
// 2. they dont use any global variable

// pure functions
// higher order componens
// useCallback hook
// useMemo hook
// API Calling
// Virtual Dom and batch update


const UseReducerHookDemo = () => {
    // const [count,setCount] = useState(0);
    // const 
    const [state,dispatch] = useReducer(reducer,{count :0});
    return(
    <div>
            <h1> Use Reducer Demo</h1>
            <p> Count {state.count}</p>
            <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>


    </div>)
}

export default UseReducerHookDemo;