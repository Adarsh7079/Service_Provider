import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [FormData,setData]=useState({
       fullname:"", mobileno:"",password:"",usertype:""
    });

    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setData((e)=>{
            return{...e,[name]:value};
        });
    };
    console.log(FormData);
    const handleSubmit=()=>{
        console.log(FormData);
    }
  return (
    <div className=' w-full overflow-x-hidden'>
    <div className=' flex items-center justify-center mt-[120px] mb-[50px]   '>
        <form className=' w-[450px] flex flex-col gap-5 border-2 p-5 rounded-lg text-neutral-600  bg-white shadow-lg'>
            <div className=' underline text-4xl font-bold'>Signup</div>
            <label className=' flex flex-col font-semibold'>
                Full Name
                <input className=' border-2 border-gray-300 rounded-md h-[40px] px-2'
                type="text"
                id="fullname"
                name="fullname"
                value={FormData.fullname}
                onChange={handleInput}/>
            </label>
            <label className=' flex flex-col font-semibold'>
                Mobileno
                <input className=' border-2 border-gray-300 rounded-md h-[40px] px-2'
                type="mobileno"
                id="mobileno"
                name="mobileno"
                value={FormData.mobileno}
                onChange={handleInput}/>
            </label>
               <label className=' flex flex-col font-semibold'>
                    User Type
                    <select 
                     id="usertype"
                     name='usertype'
                     value={FormData.usertype}
                     onChange={handleInput}
                    className=' border-2 border-gray-300 rounded-md h-[40px] px-2 bg-white'>
                        <option  >---Select Type---</option>
                        <option  onChange={handleInput} value="Worker">Worker</option>
                        <option value="User">Customer</option>
                    </select>
                </label>
           
            <label className=' flex flex-col font-semibold'>
                Password
                <input className=' border-2 border-gray-300 rounded-md h-[40px] px-2'
                type="text"
                id="password"
                name="password"
                value={FormData.password}
                onChange={handleInput}/>
            </label>
            <Link to='/login' className=' text-blue-500 -mt-4 hover:text-blue-600 transition duration-300'>Already have an account?</Link>
             
            <button className=' text-cyan-50 bg-red-500 h-[50px] rounded-md hover:bg-red-600 transition duration-300 font-bold text-[18px]'>Signup</button>
        </form>
    </div>
</div>
  )
}

export default Signup