// /*

// one component is increaseing counter on click
// second  compoent is increasing counter on hover
// */

// import React,{ useState } from "react";

// // Component to click and increment counter
// function ClickIncrease(){
//     // Count State
//     const [count,setCount] = useState(0);
//     //

//     return(
//         <div>
//             <h1> Use State Demo</h1>
//             <p> Count {count}</p>
//             <button onClick={()=>setCount(count+1)}>Click</button>
//         </div>
//     )
// }

// // Component to hover and increment counter
// function HoverIncrease(){
//     // Count State
//     const [count,setCount] = useState(0);

//     return(
//         <div>
//             <h1> Use State Demo</h1>
//             <p> Count {count}</p>
//             <button onMouseOver={()=>setCount(count+1)}>Hover</button>
//         </div>
//     )
// }

// // collection of the components that is not following dry principle
// const LessGoodComp = () =>{
//     return(
//     <>
//         <ClickIncrease />
//         <HoverIncrease />
//     </>
// )}


// export default LessGoodComp;

// DRY PRINCIPLE
// DONT REPEAT YOURSELF

// CREATE COMPONENT THAT MAINTAINS CODE WITH SIMILAR LOGIC
// Higher Order Component
import React, { useState } from 'react';

const withCounter = (WrappedComponent) => {
    return function WithCounter(props) {
        const [count, setCount] = useState(0);

        const increaseCounter = () => {
            setCount(count + 1);
        };

        return (
            <WrappedComponent
                {...props}
                counter={count}
                increaseCounter={increaseCounter}
            />
        );
    };
};

const ClickCounter = ({ counter, increaseCounter }) => {
    return (
        <div>
            <h1> Use State Demo</h1>
            <p> Count {counter}</p>
            <button onClick={increaseCounter}>Click</button>
        </div>
    );
};

const HoverCounter = ({ counter, increaseCounter }) => {
    return (
        <div>
            <h1> Use State Demo</h1>
            <p> Count {counter}</p>
            <button onMouseOver={increaseCounter}>Hover</button>
        </div>
    );
};

const ClickCounterWithHOC = withCounter(ClickCounter);
const HoverCounterWithHOC = withCounter(HoverCounter);

const GoodCodedComp = () => {
    return (
        <>
            <ClickCounterWithHOC />
            <HoverCounterWithHOC />
        </>
    );
};

export default GoodCodedComp;
