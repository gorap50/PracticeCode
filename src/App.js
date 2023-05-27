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
import UseReducer from './components/UseReducer';
import ClickCounter from './components/ClickCounter(HOC)';
import HoverCount from './components/HoverCount';
import UpdatedCompo from './components/WithCounterHOC';
import ClickCounter2 from './components/ClickCounter2';

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

   {/* <UserContext.Provider value={"Gorav"}>
    <UserContext2.Provider value={"Lund"}>
    <ComponentC/>
    </UserContext2.Provider>
    </UserContext.Provider> */}

    {/* <UseReducer/> */}
    {/* <ClickCounter/>
    <HoverCount/>
    <UpdatedCompo/> */}

    <ClickCounter2/>
    </div>
  );
}

export default App;
