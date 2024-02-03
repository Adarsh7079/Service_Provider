import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
    const navigate=useNavigate();
    const[isAdmin,setAdmin]=useState(false);
    const [FormData,setData]=useState({
        Mobile_Number:"",Password:""
    });
    const [backendData,setBackEndData]=useState([{}]);

    useEffect(()=>{
       
    },[])
    const handleInput=(e)=>{
        e.preventDefault();
        const name=e.target.name;
        const value=e.target.value;
        setData((e)=>{
            return{...e,[name]:value};
        });
    };
    console.log(FormData);

    
    const handleSubmit=async(e)=>{
      
        e.preventDefault();
        try{
          
           const user= await fetch(`http://localhost:4000/service/v1/users/login`,{
            method:"POST",
            headers:{
                'Content-Type':"application/json",
            },
            body:JSON.stringify(FormData)
       });

      
        const worker= await fetch(`http://localhost:4000/service/v1/admin/login`,{
            method:"POST",
            headers:{
                'Content-Type':"application/json",
            },
            body:JSON.stringify(FormData)
        });
        

        if(!user || !worker)
        {
            console.log("error hai ");
        }
        else
        {
        if(user.status==200 && worker.status==404)
        {
            
            navigate('/user')
        }
        else if(worker.status==200 && user.status==404){
            navigate('/admin')
        }

        }
        }
        catch(error){
            console.log("Login error ",error)
        }
        
    }
   
  return (
    <div className=' w-full overflow-x-hidden'>
        <div className=' flex items-center justify-center mt-[130px] mb-[100px]   '>
            <form
             onSubmit={handleSubmit}
             className=' w-[400px] flex flex-col gap-5 border-2 p-5 rounded-lg text-neutral-600 bg-white shadow-lg'>
                <div className=' underline text-4xl font-bold'>Login</div>
              
                <label className=' flex flex-col font-semibold'>
                    Mobile_Number
                    <input className=' border-2 border-gray-300 rounded-md h-[40px] px-2'
                    type="Mobile_Number"
                    id="Mobile_Number"
                    name="Mobile_Number"
                    onChange={handleInput}
                    value={FormData.Mobile_Number}
                   
                    />
                </label>
              
                <label className=' flex flex-col font-semibold'>
                    Password
                    <input className=' border-2 border-gray-300 rounded-md h-[40px] px-2'
                      type="text"
                      id="Password"
                      name="Password"
                      onChange={handleInput}
                      value={FormData.Password}
                     />
                </label>
                <Link to='/signup' className=' text-blue-500 -mt-4 hover:text-blue-600 transition duration-300'>Don't have an account?</Link>
                <button   className=' text-cyan-50 bg-red-500 h-[50px] rounded-md hover:bg-red-600 transition duration-300 font-bold text-[18px]'>Login</button>
            </form>
        </div>
        <Outlet/>
    </div>
  )
 
}

export default Login