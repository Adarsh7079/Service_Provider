import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { CgProfile } from "react-icons/cg";
import { GiShoppingCart } from "react-icons/gi";
import { CiShop } from "react-icons/ci";
import { RiArrowDropUpLine ,RiArrowDropDownLine} from "react-icons/ri";

const NavBar = (props) => {
  const isLogin=props.isLogin;
  const setLogin=props.setLogin;
  const [isShow,setShow]=useState(false);
  const[upArrow,setArrow]=useState(false);
  return (
    <div className='w-full fixed top-0 z-50 md:border-b-2 text-neutral-600 bg-gray-100' >
        {/* desktop */}
        <div className='px-[15%] py-2  '> 
           <div className='  hidden md:flex justify-between '>
              <div className=' flex gap-10 mt-2'> 
                <img src=""
                className=' w-[150px] h-[40px]'/>
              
              </div>
              <div className=' flex gap-10'>
                {/* become supplier  */}
                <Link to='/login' className=' flex h-[50px] items-center '>
                <CiShop  className=' w-[40px] h-[45px] p-2'/>
                 <a>Worker</a>
                </Link>

               <div>
                 {
                  isLogin ?(
                    <div>
                       {/* profile */}
                <div 
                onMouseEnter={() => setArrow(true)}
                onMouseLeave={() => setArrow(false)}
                className='h-[50px] flex  items-center transition duration-300 rounded-xl hover:bg-blue-600 px-5 hover:text-white'>
                <CgProfile 
                className=' w-[40px] h-[45px] p-2'/>
                <h1 className=' text-[15px] '>Profile</h1>
                {
                  upArrow ? (
                    <div className=' relative'>
                      <RiArrowDropUpLine  className=' w-[30px] h-[30px]' />
                     {
                      upArrow &&  <div className=' absolute mt-20'>adasd</div>
                     }
                    </div>
                  ):(<RiArrowDropDownLine className=' w-[30px] h-[30px]'/>)
                }
              
                </div>

                {/* add to cart  */}
                <div className='h-[50px] flex  items-center'>
                  <GiShoppingCart
                  className=' w-[40px] h-[45px] p-2 ' />
                  <h1 className=' text-[15px]'>Cart</h1>
                </div>
                    </div>
                  ):(
                    <Link to='/login' className=' hover:bg-blue-600 transition duration-300 bg-blue-500 w-[100px] rounded-md h-[40px] flex items-center justify-center text-white font-medium'>
                      Login
                    </Link>
                  )
                 }
               </div>
              </div>
           </div>
        </div>
        {/* mobileview */}
        <div className=' md:hidden '>
            <div className=' flex justify-between px-5 h-[20px]'>
              <div className="flex gap-5 h-[30px]">
                <div className="text-3xl  flex justify-center items-center" onClick={()=>setShow(!isShow)}> &#8801;</div>
                 <p className=" text-[22px] font-bold">Services</p>
              </div>
              <div className=' flex'>
                 {/* profile */}
                 <div 
                onMouseEnter={() => setArrow(true)}
                onMouseLeave={() => setArrow(false)}
                className='h-[30px] flex  gap-2 items-center transition duration-300 rounded-xl px-5 cursor-pointer '>
                <CgProfile 
                className=' w-[25px] h-[25px]'/>
                <h1 className=' text-[15px] '>Login</h1>
                </div>

                {/* add to cart  */}
                <div className='h-[30px] flex  items-center'>
                <GiShoppingCart
                 className=' w-[25px] h-[25px]  ' />
                
                </div>
              </div>
            </div>
           
        </div>
    </div>
  )
}

export default NavBar