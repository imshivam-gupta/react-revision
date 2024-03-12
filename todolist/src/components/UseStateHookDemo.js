import React, { useState } from "react";

const UseStateHookDemo = () => {
    const [count,setCount] = useState(0);

    return(
        <div>
            <h1> Use State Demo</h1>
            <p> Count {count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    )
}

export default UseStateHookDemo;