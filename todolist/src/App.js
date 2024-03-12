import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';
import UseStateHookDemo from './components/UseStateHookDemo';
import UseEffectHookDemo from './components/UseEffectHookDemo';
import UseReducerHookDemo from './components/useReducerHook';


/**
 * 
 * Mounting
 * Updating
 * Unmounting
 */

function App() {
  return (
    <div className="App">
      {/* {(2==2)?<h1>Hello</h1>:null} */}
      {/* <ParentComponent />
     */}
     {/* <UseStateHookDemo /> */}
     {/* <UseEffectHookDemo /> */}
     <UseReducerHookDemo />
    </div>
  );
}

export default App;
