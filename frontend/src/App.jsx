
import './App.css'
import { Route, Routes } from 'react-router-dom';
import {Login,Signup , NavBar,Main, Footer ,Admin,User} from "./components/index"
import { createContext, useReducer, useState } from 'react';
import Logout from './components/pages/Logout';
import {initialstate,reducer} from "../src/reducer/UseReducer"



export const UserContext=createContext();


const Routing=()=>{
  return(
    <Routes>
    <Route path="/" element={ <Main/>}/>
    <Route path="/admin" element={<Admin/>}/>
    <Route path="/user" element={<User/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/logout" element={<Logout/>}/>
  </Routes>
  )
}
function App() {

  //context api
  const [state,dispatch]=useReducer(reducer,initialstate)

  const [isLogin ,setLogin]=useState(false);
  return (
    <div className=' w-full '>
     <UserContext.Provider value={{state,dispatch}}>
     <NavBar isLogin={isLogin} setLogin={setLogin}/>
      <Routing/>
      <Footer/>
     </UserContext.Provider>
    </div>
  )
}

export default App
