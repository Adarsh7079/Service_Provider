import React, { useState,useEffect } from "react";
import axios from 'axios';

const Admin = () => {
const [data,setData]=useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/service/v1/admin/me`, {
        withCredentials: true,
      })
      .then((res) => {
        setData(res.data.service);
        
      })
      .catch((e) => {
        console.log(e.response);
      });
  },[]);
  console.log(data)
  
  return (
    <div className=" mt-32 px-[15%]">
      <div className=" flex justify-between">
        <img
        src="data:image/jpeg;base64,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"
          alt="image"
          className=" w-[200px] h-[200px] rounded-full border-2"
        />
        <div className=" w-[100px] bg-green-400 h-[40px] rounded-md flex text-gray-100 font-medium text-xl items-center justify-center">
          Edit
        </div>
      </div>
      <div className=" flex flex-col gap-10 mt-20 mb-20">
        <div className=" flex justify-between">
          <div className=" flex flex-col font-medium">
            <div>
            
              Full Name <span className=" text-red-500">*</span>
            </div>
            <input
              className=" px-2 h-[40px] outline-none rounded-md  border-2 border-gray-200"
              value="ada"
              readonly="readonly"
            />
          </div>

          <div className=" flex flex-col font-medium">
            <div>
            
              Mobile Number <span className=" text-red-500">*</span>
            </div>
            <input
              className=" px-2 h-[40px] outline-none rounded-md  border-2 border-gray-200"
              value="asdasd"
              readonly="readonly"
            />
          </div>

          <div className=" flex flex-col font-medium">
            <div>
            
            Aadhaar Number <span className=" text-red-500">*</span>
            </div>
            <input
              className=" px-2 h-[40px] outline-none rounded-md  border-2 border-gray-200"
              value="asdasd"
              readonly="readonly"
            />
          </div>
        </div>

        <div className=" flex justify-between">
          <div className=" flex flex-col font-medium">
            <div>
            
              Job Type <span className=" text-red-500">*</span>
            </div>
            <input
              className=" px-2 h-[40px] outline-none rounded-md  border-2 border-gray-200"
              value="asdasd"
              readonly="readonly"
            />
          </div>

          <div className=" flex flex-col font-medium">
            <div>
            
              Work Experience <span className=" text-red-500">*</span>
            </div>
            <input
              className=" px-2 h-[40px] outline-none rounded-md  border-2 border-gray-200"
              value="asdasd"
              readonly="readonly"
            />
          </div>

          <div className=" flex flex-col font-medium">
            <div>
            
              Age <span className=" text-red-500">*</span>
            </div>
            <input
              className=" px-2 h-[40px] outline-none rounded-md  border-2 border-gray-200"
              value="asdasd"
              readonly="readonly"
            />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Admin;
