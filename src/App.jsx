
import './App.css'
import { Route, Routes } from 'react-router-dom';
import {Login,Signup , NavBar,Main, Footer ,Admin,User} from "./components/index"
import { useState } from 'react';

function App() {
  const [isLogin ,setLogin]=useState(false);
  return (
    <div className=' w-full '>
      <NavBar isLogin={isLogin} setLogin={setLogin}/>
      <Routes>
        {/* <Route path="/" element={ <Main/>}/> */}
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/" element={<User/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
