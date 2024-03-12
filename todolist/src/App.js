import logo from './logo.svg';
import './App.css';
import ParentComponent from './components/ParentComponent';
import UseStateHookDemo from './components/UseStateHookDemo';
import UseEffectHookDemo from './components/UseEffectHookDemo';
import UseReducerHookDemo from './components/useReducerHook';
import ApiDataExample from './components/ApiDataExample';
// import LessGoodComp from './components/HigherOrderComponent';
import GoodCodedComp from './components/HigherOrderComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
/**
 * 
 * Mounting
 * Updating
 * Unmounting
 */

function App() {
  const [userRole,setUserRole] = useState("admin");
  return (
    
    <div>

      <nav>
        <ul>
          <li>
            <a href="/stateHooks/UseState">UseState</a>
          </li>
          <li>
            <a href="/stateHooks/UseReducer">UseReducer</a>
          </li>
          <li>
            <a href="/useEffect">UseEffect</a>
          </li>
          <li>
            <a href="/admin">Admin</a>
          </li>
          <li>
            <a href="/apiData">Higher Order Component</a>
          </li>
          <li>
            <a href="/hoc">HigherOrderComponent</a>
          </li>
        </ul>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path='/stateHooks'>
            <Route path="UseState" element={<UseStateHookDemo />} />
            <Route path="UseReducer" element={<UseReducerHookDemo />} />
          </Route>
          <Route path='/useEffect' element={<UseEffectHookDemo />} />
          {/* Create Admin Route */}
          {userRole==="admin" && <Route path='/admin' element={<ParentComponent />} /> }
          <Route path='/apiData' element={<ApiDataExample />} />
          <Route path='/hoc' element={<GoodCodedComp />} />
          </Routes>
          
        </BrowserRouter>
     


    </div>
    
  );
}

export default App;
