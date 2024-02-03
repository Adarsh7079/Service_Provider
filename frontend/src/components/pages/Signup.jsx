import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate=useNavigate();
    const [FormData,setData]=useState({
       Full_Name:"", Mobile_Number:"",Password:"",User_Type:""
    });

    const handleInput=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setData((e)=>{
            return{...e,[name]:value};
        });
    };
    console.log(FormData);
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(FormData);
        let api='';
        if(FormData.User_Type=='Worker')
        {
            api=`http://localhost:4000/service/v1/admin/new`;
        }
        else if(FormData.User_Type=='User')
        {
            api=`http://localhost:4000/service/v1/users/new`
        }
        try{
            const response= await fetch(api,{
            method:"POST",
            headers:{
                'Content-Type':"application/json",
            },
            body:JSON.stringify(FormData)
        });
        console.log("response",response)
        navigate('/login')
        }
        catch(error){
            console.log("register error ",error)
        }

    }
  return (
    <div className=' w-full overflow-x-hidden'>
    <div className=' flex items-center justify-center mt-[120px] mb-[50px]   '>
        <form  onSubmit={handleSubmit}
        className=' w-[450px] flex flex-col gap-5 border-2 p-5 rounded-lg text-neutral-600  bg-white shadow-lg'>
            <div className=' underline text-4xl font-bold'>Signup</div>
            <label className=' flex flex-col font-semibold'>
                Full Name
                <input className=' border-2 border-gray-300 rounded-md h-[40px] px-2'
                type="text"
                id="Full_Name"
                name="Full_Name"
                value={FormData.Full_Name}
                onChange={handleInput}/>
            </label>
            <label className=' flex flex-col font-semibold'>
                Mobile_Number
                <input className=' border-2 border-gray-300 rounded-md h-[40px] px-2'
                type="Mobile_Number"
                id="Mobile_Number"
                name="Mobile_Number"
                value={FormData.Mobile_Number}
                onChange={handleInput}/>
            </label>
               <label className=' flex flex-col font-semibold'>
                    User Type
                    
                    <select 
                     id="User_Type"
                     name='User_Type'
                     value={FormData.User_Type}
                     onChange={handleInput}
                    className=' border-2 border-gray-300 rounded-md h-[40px] px-2 bg-white'>
                       
                        <option  onChange={handleInput} value="Worker">Worker</option>
                        <option value="User">Customer</option>
                    </select>
                </label>
           
            <label className=' flex flex-col font-semibold'>
                Password
                <input className=' border-2 border-gray-300 rounded-md h-[40px] px-2'
                type="text"
                id="Password"
                name="Password"
                value={FormData.Password}
                onChange={handleInput}/>
            </label>
            <Link to='/login' className=' text-blue-500 -mt-4 hover:text-blue-600 transition duration-300'>Already have an account?</Link>
             
            <button  className=' text-cyan-50 bg-red-500 h-[50px] rounded-md hover:bg-red-600 transition duration-300 font-bold text-[18px]'>Signup</button>
        </form>
    </div>
</div>
  )
}

export default Signup