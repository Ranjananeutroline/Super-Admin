import React, { useState, useEffect } from "react";
import vector from "../../assets/Vector.png";
import circle from "../../assets/circle.png";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./css/Upcoming.css";
import bell from "../../assets/bell.svg";
import accepted from "../../assets/accepted.svg";
import tick2 from "../../assets/tick2.svg";
import Detail from "../AppointmentDetail/Detail";
import AcceptTick from "../../assets/AcceptTick.svg";
import Reschedule from "../../assets/Reschedule.svg";
import Delete from "../../assets/delete.svg";
import { IoIosNotifications } from 'react-icons/io';
import { useDispatch, useSelector } from "react-redux";
import { getAllAppointments } from "../../redux/actions/appointmentAction.js";
import {confirmAppointmentRequestHere} from "../../redux/actions/appointmentAction.js"
import "./Today.css";


const closeIcon = (
  <svg
    width="28"
    height="28"
    viewBox="0 10 20 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.3331 21.3331L15.9999 15.9999M15.9999 15.9999L10.6665 10.6665M15.9999 15.9999L21.3332 10.6665M15.9999 15.9999L10.6665 21.3332"
      stroke="black"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const closeIcon2 = (
  <svg
    width="11"
    height="11"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.6666 11.6666L6.33335 6.33335M6.33335 6.33335L1 1M6.33335 6.33335L11.6667 1M6.33335 6.33335L1 11.6667"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
function Total() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAppointments());
  }, [dispatch]);

  const allAppointments = useSelector((state) => state?.appointment?.appointment);
  console.log(allAppointments);

  const formattedData = Array.isArray(allAppointments)
  ? allAppointments.map((item, index) => ({
    id: index + 1, // Assuming you want to assign IDs starting from 1
    name: item.fullname,
    email: item.email,
    contact: item.phonenumber, // Convert the number to a string
    date: item.date,
    services: "Legal Consultant", // You can set this value as needed
    time: item.time,
    duration: "30 Min", // You can set this value as needed
    color: "yellow", // You can set this value as needed
    status: item.isRequestPending ? "Pending" : "Completed", // Adjust the logic as needed
    reminder: "Notify", // You can set this value as needed
    notified: false, // You can set this value as needed
  }))
  : [];
  
  const [data, setData] = useState(formattedData);
console.log(data);
  
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const onOpenModal = () => {
    setOpen(true);
  };
  const onCloseModal = () => {
    setOpen(false);
  };
  const onOpenModal2 = () => {
    setOpen2(true);
  };
  const onCloseModal2 = () => {
    setOpen2(false);
  };
  const onOpenDetailModal = (id) => {
    console.log(id);
    setSelectedItemId(id);
    setDetailOpen(true);
  };
  const onCloseDetailModal = () => {
    setDetailOpen(false);
  };
  const handleNotifyClick = (itemId) => {
    // Find the item in the data array and update its notified state
    const updatedData = data.map((item) => {
      if (item.id === itemId) {
        return { ...item, notified: true };
      }
      return item;
    });

    // Update the data array with the updatedData
    setData(updatedData);
  };
  const handleCommit = (commitId) => {
    const updateStatus = data.map((item) => {
      if (item.id === commitId) {
        return {
          ...item,
          status: "Accepted",
          color: "green",
        };
      }
      return item;
    });
    setData(updateStatus);
  };
  const handleDelete = (itemId) => {
    const updatedData = data.filter((item) => item.id !== itemId);

    setData(updatedData);
  };
  const handleAcceptBookAppointmentRequest = ()=>{
    dispatch(confirmAppointmentRequestHere())
  }
  

  return (
    <>
    <div className="border w-full">
      <table className="w-full h-full comp-table">
        <thead className="bg-[#E2F2FA] text-center">
          <tr className="h-[50px] text-[12px] md:text-[16px]">
          <th className=" font-normal w-[5%] comp-th hide-id">ID</th>
            <th className="font-normal  w-[18%] comp-th">Name</th>
            <th className="font-normal w-[10%] comp-th">Services</th>
            <th className="font-normal w-[12%] comp-th hide-data">Contact</th>
            <th className=" font-normal w-[10%] comp-th hide-data">Time</th>
            <th className="font-normal w-[15%] comp-th">Date</th>
            <th className=" font-normal w-[12%] comp-th">Status</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr
              key={item.id}
              className="h-[45px] text-[11px] md:text-[16px] md:h-[50px]"
            >
              <td className="text-center w-[5%] md:w-[3%] hide-id">{item.id}</td>
              <td className="text-center w-[25%] md:w-[20%]">
                <button
                 
                  onClick={() => onOpenDetailModal(item.id)}
                >
                  {item.name}
                </button>
              </td>
              <td className="text-center w-[20%] md:w-[15%]">
                {item.services}
              </td>
              <td className="text-center w-[20%] md:w-[15%] hide-data">
                {item.contact}
              </td>
              <td className="text-center  w-[15%] md:w-[10%] text-[#0038FF] hide-data">
                {item.time}
              </td>
              <td className="text-center w-[15%] md:w-[10%] text-[#00AA3A] item-d">
                 {/* {item.date}  */}
                 {new Date(item.date).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                })} 
              </td>
              <td className="text-center  w-[10%] md:w-[10%]">
                <div className="md:flex md:justify-evenly  md:items-center  ">
                  <div className="flex justify-center items-centers">
                    {item.status === "Pending" ? (
                      <img className="w-2" src={circle} alt="yellow"></img>
                    ) : (
                      <img className="w-2" src={accepted} alt="green"></img>
                    )}
                  </div>
                  <div className="hidden md:block">{item.status}</div>
                </div>
              </td>
              
              
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        open={open2}
        onClose={onCloseModal2}
        closeIcon={closeIcon}
        classNames={{
          overlay: "customOverlay",
          modal: "customModal2",
          closeButton: "customButton",
        }}
        center
      >
        <div className="bg-[white] w-[full] md:w-[300px]">
          <div className=" h-[50px] flex flex-col items-center justify-center bg-[#aabef5]">
            <p className=" w-full text-center text-[#1a1a1a] text-[17px] font-sans tracking-[1.3px] font-[400]">
              Reschedule
            </p>
            <div className=" w-full relative">
              <img
                src={tick2}
                className="w-[30px] h-[30px] absolute bottom-[-30px]  left-1/2 transform -translate-x-1/2"
                alt=""
              />
            </div>
          </div>

          <div className="m-4  p-2 text-[16px] text-center">
            Reschedule message has been sent. Thanks
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-[#7f9ff5] hover:bg-[#95AEF4] text-[16px] text-white font-[500] px-[18px] py-[5px] mb-4 rounded-[5px] shadow-md "
              onClick={onCloseModal2}
            >
              Ok
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        open={detailOpen}
        onClose={onCloseDetailModal}
        closeIcon={closeIcon2}
        classNames={{
          overlay: "customOverlay",
          modal: "customModal3",
          closeButton: "customButton2",
        }}
        center
      >
        {selectedItemId !== null && (
          <>
            <div className="h-[50px] relative flex justify-center items-center bg-[#8399d6]">
              <p className=" font-[500] font-serif text-[white] w-full text-center text-[20px] tracking-wider ">
                Appointment
              </p>
            </div>

            <Detail
              key={selectedItemId}
              data={data.find((item) => item.id === selectedItemId)}
            />
            <button className="absolute top-[75%] text-[#6262f5] right-[13%] text-center text-[11px] hover:text-[#4949eb] ">
              See all history
            </button>

            <div className=" mt-3 mb-5 gap-[90px]  flex justify-evenly">
              <button
                type="button"
                // className="border-none text-white bg-[#517EC1] hover:bg-[#4172bb] rounded-md"
                // style={{
                //   padding: "8px 17px 10px 18px",
                //   boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                // }}
                className="bg-[#C5DFF8] hover:bg-[#d9e8f5]  text-[#0b1a1e] text-[17px] rounded   font-serif focus:outline-none px-4 py-1"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                }}
              >
                Edit
              </button>
              <button
                type="button"
                onClick={onCloseDetailModal}
                className="bg-[rgba(220, 234, 255, 0.30)] text-[17px] text-[#0b1a1e] rounded hover:bg-[#ffffff]  font-serif focus:outline-none px-4 py-2"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                }}
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </Modal>
    </div>

   
    </>
  );
}

export default Total;
