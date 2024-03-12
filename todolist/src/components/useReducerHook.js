import React, { useReducer } from "react";

// var x = 0;
// const addToTotal = (x) =>{
//     return x+20;
// }
// const decrementToTotal = (x) =>{
//     x =  x-20;
// }
// x= addToTotal(x)

const reducer = (state,action) => {
    switch(action.type){
        case 'increment':
            return {count : state.count+1};
        case 'decrement':
            return {count: state.count-1};
    }
}

/**
 * 
 * are pure function implement shouldcomponentupdate inbuilt(bydefault)
like render only when diff aruments used
 */


//pure functions
// 1. they should give smae output on prvidding same input varaible value each time
// 2. they dont use any global variable


// useCallback hook
// useMemo hook
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