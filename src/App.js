import React from 'react';
import './App.css';
import NewClass from './components/classCounterState';
import HookExp from './components/HookCounter';
import HookExp2 from './components/HookCounter2';
import ObjHookExp from './components/objHook';
import HookExpArr from './components/HookWithArray';
import HookUseEffectExp from './components/UseEffectExp';
import HookMouse from './components/HookMouse';
import DataFetch from './components/Fetching';
import ComponentC from './components/ComponenetC';

export const UserContext=React.createContext()
export const UserContext2=React.createContext()

function App() {
  return (
    <div className="App">
    {/* <NewClass /> */}
    {/* <HookExp/> */}
    {/* <HookExp2/> */}
    {/* <ObjHookExp/> */}
    {/* <HookExpArr/> */}
    {/* <HookUseEffectExp/> */}
   {/* <HookMouse/> */}
   {/* <DataFetch/> */}

   <UserContext.Provider value={"Gorav"}>
    <UserContext2.Provider value={"Lund"}>
    <ComponentC/>
    </UserContext2.Provider>
    </UserContext.Provider>
  
    </div>
  );
}

export default App;
