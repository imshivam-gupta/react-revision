import React from "react";
const ChildComponent = (props) => {
    console.log(props);
    // Props are immutable
    // props.name = "Surya";
    return(
        <div>
            <p onClick={props.parentCall}> Hello {props.name}</p>
        </div>
    )
}

ChildComponent.defaultProps = {
    name: "Default Name"
}



const ParentComponent = () => {
    const fun = () =>{
        console.log("Parent Function");
    }
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent />
        <ChildComponent name="Surya" parentCall={fun}/>
    </div>
  );
}

export default ParentComponent;