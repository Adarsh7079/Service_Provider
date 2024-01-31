import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate=useNavigate();
    const[isAdmin,setAdmin]=useState(false);
    const [FormData,setData]=useState({
        mobileno:"",password:""
    });
    const [backendData,setBackEndData]=useState([{}]);

    useEffect(()=>{
        fetch("http://localhost:4000/service/v1/users/login").then(response=>response.json()
        ).then(
            data=>{
                setBackEndData(data)
            }
        )
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

    
    const handleSubmit=(e)=>{
        e.preventDefault();
         if(isAdmin)
         {
            navigate('/admin')
         }
         else{
            navigate('/admin')
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
                    Mobileno
                    <input className=' border-2 border-gray-300 rounded-md h-[40px] px-2'
                    type="mobileno"
                    id="mobileno"
                    name="mobileno"
                    onChange={handleInput}
                    value={FormData.mobileno}
                   
                    />
                </label>
              
                <label className=' flex flex-col font-semibold'>
                    Password
                    <input className=' border-2 border-gray-300 rounded-md h-[40px] px-2'
                      type="text"
                      id="password"
                      name="password"
                      onChange={handleInput}
                      value={FormData.password}
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