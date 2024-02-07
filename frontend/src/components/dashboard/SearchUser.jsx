import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import axios from 'axios';

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
    const[userData,setData]=useState([]);
    // const fetchData = async(e) => {
      
    //     try{
          
    //         const user= await fetch(`http://localhost:4000/service/v1/admin/all`,{
    //          method:"POST",
    //          headers:{
    //              'Content-Type':"application/json",
    //          },
            
    //         });
    //         setData(user);
    //         console.log('user gt',user.user)
    //     }
    //     catch(error)
    //     {
    //         console.log("Login error ",error)
    //     }
    //   };

      useEffect(() => {
        axios
          .get(`http://localhost:4000/service/v1/admin/all`, {
            withCredentials: true,
          })
          .then((res) => {
            setData(res.data.user);
            workerdata(setData)
            
          })
          .catch((e) => {
            console.log(e)
          });
      },[]);
      console.log("data",userData)
  return (
    <div className=' mt-20 w-full '>
        <div className='h-screen'>
            <form className=' relative flex gap-2 ' >
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
                    <div className='w-[150px]'>Full Name</div>
                    <div className='w-[150px]'>Mobile No</div>
                    <div className='w-[150px]'>Experience</div>
                    <div className='w-[150px]'>Address</div>
                </div>
                <div>
                {
                    userData.length===0 ? (<div className=' flex justify-center mt-10 text-[3rem]'>Data Not Found</div>):(
                      <div>
                          {userData.map((data, index) => {
                            return (
                              <div key={index} className='flex justify-between px-5 py-2'>
                                <div className='w-[150px]'>{data.Full_Name}</div>
                                <div className='w-[150px]'>{data.Mobile_Number}</div>
                                <div className='w-[150px]'>{data.Work_Experience}</div>
                                <div className='w-[150px]'>{data.Address}</div>
                              </div>
                            );
                          })}
                      </div>
                    )
                }
                </div>
            </div>
        </div>
    </div>
  )
}   

export default SearchUser