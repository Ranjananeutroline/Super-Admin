import React from 'react'
import user from "../../assets/card_user.png";
import appointment from "../../assets/card_appointment.png";
import request from "../../assets/card_request.png";
import ok from "../../assets/card_ok.png";
import arrow from "../../assets/card_arrow.png";
import icon_ok from "../../assets/icons-ok.svg";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaUserClock } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import "./Dashboard.css";



const AdminCards = () => {
  return (
    <div className="flex flex-wrap justify-between admin-cards-div">
   

   <div
      className="bg-gradient-to-b from-[#f1eaf88a]  to-[#ffffff]
      h-[130px] w-[230px] rounded-[10px] border p-4 flex flex-col gap-1 md:mt-0 cards-box shadow-sm "
    >
      <div className='flex justify-between'>
        <h3 className="text-[18px] mb-[5px]  card-title font-sans  ">Registration</h3>
        <div>      
      <span class=" text-[#912bbcc4] text-[11.5px] inline-flex items-center px-[4px] py-[3px] rounded-md bg-[#f4dff5] dark:text-blue-300">
        <svg class="w-[8px] h-[9px] me-[4px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
        </svg>
        9.5%
      </span>
    </div>
      </div>
      <div className="flex justify-between p-img mt-2">
        <p className="text-[18px] text-[#3572EF]">25</p>
        {/* <img src={ok} className="mr-2  h-[22px] w-[22px] " /> */}
        <IoIosCheckmarkCircle style={{color:"skyblue", height:"23px", width:"23px"}}/>
      </div>

      <div className="flex items-center gap-1 justify-end mt-1 see-all">
        <p className="see-change font-sans">See all</p>
      </div>
    </div>

    <div
      className="bg-gradient-to-b from-[#f1eaf88a]  to-[#ffffff]
      h-[130px] w-[230px] rounded-[10px] border p-4 flex flex-col gap-1 md:mt-0 cards-box shadow-sm "
    >
      <div className='flex justify-between'>
        <h3 className="text-[18px] mb-[5px]  card-title font-sans ">Appointment</h3>
        <div>      
      <span class=" text-[#912bbcc4] text-[11.5px] inline-flex items-center px-[4px] py-[3px] rounded-md bg-[#f4dff5] dark:text-blue-300">
        <svg class="w-[8px] h-[9px] me-[4px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
        </svg>
        9.5%
      </span>
    </div>
      </div>
      <div className="flex justify-between p-img mt-1">
        <p className="text-[18px] text-[#3572EF]">410</p>
        {/* <img src={appointment} className="mr-2  h-[22px] w-[22px]" /> */}
        <FaUserClock style={{color:"skyblue", height:"23px", width:"23px"}}/>
      </div>

      <div className="flex items-center gap-1 justify-end mt-2 see-all">
        <p className="see-change font-sans">See all</p>
      </div>
    </div>

    <div
      className="bg-gradient-to-b from-[#f1eaf88a]  to-[#ffffff]
      h-[130px] w-[230px] rounded-[10px] border p-4 flex flex-col gap-1 md:mt-0 cards-box shadow-sm "
    >
      <div className='flex justify-between'>
        <h3 className="text-[18px] mb-[5px]  card-title font-sans ">Service</h3>
        <div>      
      <span class=" text-[#912bbcc4] text-[11.5px] inline-flex items-center px-[4px] py-[3px] rounded-md bg-[#f4dff5] dark:text-blue-300">
        <svg class="w-[8px] h-[9px] me-[4px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
        </svg>
        9.5%
      </span>
    </div>
      </div>
      <div className="flex justify-between p-img mt-1">
        <p className="text-[18px] text-[#3572EF]">12</p>
        {/* <img src={request} className="mr-2  h-[22px] w-[22px]" /> */}
        <MdMiscellaneousServices style={{color:"skyblue", height:"23px", width:"23px"}}/>
      </div>

      <div className="flex items-center gap-1 justify-end mt-2 see-all">
        <p className="see-change font-sans">See all</p>
      </div>
    </div>
    <div
      className="bg-gradient-to-b from-[#f1eaf88a]  to-[#ffffff]
      h-[130px] w-[230px] rounded-[10px] border p-4 flex flex-col gap-1 md:mt-0 cards-box shadow-sm "
    >
      <div className='flex justify-between'>
        <h3 className="text-[18px] mb-[5px]  card-title font-sans ">User</h3>
        <div>      
      <span class=" text-[#912bbcc4] text-[11.5px] inline-flex items-center px-[4px] py-[3px] rounded-md bg-[#f4dff5] dark:text-blue-300">
        <svg class="w-[8px] h-[9px] me-[4px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
        </svg>
        9.5%
      </span>
    </div>
      </div>
      <div className="flex justify-between p-img mt-1">
        <p className="text-[18px] text-[#3572EF]">250</p>
        {/* <img src={user} className="mr-2  h-[22px] w-[22px]" /> */}
        <FaUser style={{color:"skyblue", height:"20px", width:"20px"}}/>
      </div>

      <div className="flex items-center gap-1 justify-end mt-2 see-all">
        <p className="see-change font-sans">See all</p>
      </div>
    </div>
   
    
   
  </div>
  )
}

export default AdminCards