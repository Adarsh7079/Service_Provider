import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";

const workerdata=[
    {
        fullname:"Adarsh Paritosh ",
        mobileno:"7079429676",
        Experience:"2",
        addess:"Bihar Siwan"
    },
    {
        fullname:"Adarsh Paritosh ",
        mobileno:"7079429676",
        Experience:"2",
        addess:"Bihar Siwan"
    },
    {
        fullname:"Adarsh Paritosh ",
        mobileno:"7079429676",
        Experience:"2",
        addess:"Bihar Siwan"
    },  {
        fullname:"Adarsh Paritosh ",
        mobileno:"7079429676",
        Experience:"2",
        addess:"Bihar Siwan"
    }
]
const SearchUser = () => {
    const[useData,setData]=useState();
    const fetchData = async(e) => {
      
        try{
          
            const user= await fetch(`http://localhost:4000/service/v1/admin/all`,{
             method:"POST",
             headers:{
                 'Content-Type':"application/json",
             },
            
            });
            setData(user);
            console.log('user gt',user.user)
        }
        catch(error)
        {
            console.log("Login error ",error)
        }
      };

      useEffect(()=>{
        fetchData()
      },[])

      console.log("data",useData)
  return (
    <div className=' mt-20'>
        <div>
            <form className=' relative flex gap-2' >
                <CiSearch className=' absolute w-[30px] h-[30px] mt-2 mx-2 text-gray-400 ' />
                <input
                    type="serach"
                    id="serach"
                    className=' w-[450px] h-[40px] border-2 bg-[#f1f1f1]  border-gray-300 rounded-lg px-10 '
                />
            </form>
            <div>
                <label className=' flex flex-col font-semibold'>
                    User Type
                    <select className=' border-2 border-gray-300 rounded-md h-[40px] px-2 bg-white'>
                        <option  >---Filter Type---</option>
                        <option  onChange={() => setAdmin((prev) => !prev)} value="Worker"></option>
                        <option value="User">Plumber</option>
                    </select>
                </label>
            </div>
            <div className=' rounded-md mt-2 px-2 bg-white'>

                <div className=' border-b-2 border-gray-300 flex justify-between px-5 py-2'>
                    <div>Full Name</div>
                    <div>Mobile No</div>
                    <div>Experience</div>
                    <div>Address</div>
                </div>
                <div>
                   {
                    workerdata.map((data,index)=>{
                        return<div index={index}
                        className=' flex justify-between px-5 py-2'>
                            <div>{data.fullname}</div>
                            <div>{data.mobileno}</div>
                            <div>{data.Experience}</div>
                            <div>{data.addess}</div>
                           
                        </div>
                    })
                   }
                </div>
            </div>
        </div>
    </div>
  )
}   

export default SearchUser