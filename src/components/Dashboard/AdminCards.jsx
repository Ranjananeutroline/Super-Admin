import React from 'react'
import user from "../../assets/card_user.png";
import appointment from "../../assets/card_appointment.png";
import request from "../../assets/card_request.png";
import ok from "../../assets/card_ok.png";
import arrow from "../../assets/card_arrow.png";
import icon_ok from "../../assets/icons-ok.svg";
import "./Dashboard.css";



const AdminCards = () => {
  return (
    <div className="flex flex-wrap justify-between cards-div">
    <div
      className="bg-gradient-to-b from-[#D5FEC7] to-[#F5F5F5]
       h-[80px] w-[150px] rounded-[10px] border p-4 flex flex-col gap-1 cards-box "
    >
      {/* <div>
        {" "}
        <h3 className="text-[16px] mb-2 font-[400] card-title">Companies</h3>
      </div>
      <div className="flex justify-between p-img">
        <p className="text-[22px] text-[#1C19CC]">250</p>
        <img src={user} className="mr-2 h-[28px] w-[28px] " />
      </div>

      <div className="flex items-center gap-1 justify-end mt-3 see-all">
        <p className="see-change">See all Companies</p>
        <img src={arrow} className="h-[12px] w-[12px] " />
        
      </div> */}
    </div>

    <div
      className="bg-gradient-to-b from-[#C7F1FE]  to-[#F5F5F5]
      h-[80px] w-[150px] rounded-[10px] border p-4 flex flex-col gap-1 md:mt-0 cards-box  "
    >
      {/* <div>
        {" "}
        <h3 className="text-[16px] mb-2 font-[400] card-title">Registration Requests</h3>
      </div>
      <div className="flex justify-between p-img">
        <p className="text-[22px] text-[#1C19CC]">250</p>
        <img src={appointment} className="mr-2  h-[28px] w-[28px] " />
      </div>

      <div className="flex items-center gap-1 justify-end mt-3 see-all">
        <p className="see-change">See all Requests</p>
        <img src={arrow} className="h-[12px] w-[12px]" />
      </div> */}
    </div>

    <div
      className="bg-gradient-to-b from-[#E6C7FE]  to-[#F5F5F5]
      h-[80px] w-[150px] rounded-[10px] border p-4 flex flex-col gap-1 md:mt-0 cards-box "
    >
      {/* <div>
        {" "}
        <h3 className="text-[16px] mb-2 font-[400] card-title">Users</h3>
      </div>
      <div className="flex justify-between p-img">
        <p className="text-[22px] text-[#1C19CC]">250</p>
        <img src={request} className="mr-2  h-[28px] w-[28px] " />
      </div>

      <div className="flex items-center gap-1 justify-end mt-3 see-all">
        <p className="see-change">See all</p>
        
        <img src={arrow} className="h-[12px] w-[12px] " />
      </div> */}
    </div>

    <div
      className="bg-gradient-to-b from-[#fec7da]  to-[#F5F5F5]
      h-[80px] w-[150px] rounded-[10px] border p-4 flex flex-col gap-1 md:mt-0 cards-box "
    >
      {/* <div>
        {" "}
        <h3 className="text-[16px] mb-2 font-[400] card-title">Users</h3>
      </div>
      <div className="flex justify-between p-img">
        <p className="text-[22px] text-[#1C19CC]">250</p>
        <img src={request} className="mr-2  h-[28px] w-[28px] " />
      </div>

      <div className="flex items-center gap-1 justify-end mt-3 see-all">
        <p className="see-change">See all</p>
        <img src={arrow} className="h-[12px] w-[12px] " />
      </div> */}
    </div>

    <div
      className="bg-gradient-to-b from-[#f1fec7]  to-[#F5F5F5]
      h-[80px] w-[150px] rounded-[10px] border p-4 flex flex-col gap-1 md:mt-0 cards-box "
    >
      {/* <div>
        {" "}
        <h3 className="text-[16px] mb-2 font-[400] card-title">Users</h3>
      </div>
      <div className="flex justify-between p-img">
        <p className="text-[22px] text-[#1C19CC]">250</p>
        <img src={request} className="mr-2  h-[28px] w-[28px] " />
      </div>

      <div className="flex items-center gap-1 justify-end mt-3 see-all">
        <p className="see-change">See all</p>
        <img src={arrow} className="h-[12px] w-[12px] " />
      </div> */}
    </div>

   
    
   
  </div>
  )
}

export default AdminCards