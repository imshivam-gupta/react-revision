// it is used for handling side effects

// on componet load -> fetch data from server
// on component load -> add event listener

// on compounet mounting and updatiion


// interview problem
/*
- explain lifecycle methoids and how can we use this moder fucntional components

*/
import React, { useState, useEffect } from 'react';

const UseEffectHookDemo = () => {
    const [count,setCount] = useState(0);

    useEffect(() => {
        console.log(count);
        console.log("useEffect");        
    },[count]);



    useEffect(()=>{
        console.log(count);
    },[count]);




    return(
        <div>
        <h1> Use State Demo</h1>
        <p> Count {count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
    )
}

export default UseEffectHookDemo;