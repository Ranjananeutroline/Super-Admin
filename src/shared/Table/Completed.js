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
import {
  confirmAppointmentRequest,
  confirmAppointmentRequestHere,
  deleteAppointmentHere,
  getAllAppointments,
} from "../../redux/actions/appointmentAction";
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
  

  // Define your initial data state
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(getAllAppointments);
  },[dispatch]);
  const allAppointments = useSelector((state) => state.appointment.appointment);
  console.log(allAppointments);
  useEffect(() => {
    // Fetch your data and update it when the component mounts or as needed
    const fetchData = async () => {
      try {
        console.log("hlo");
        console.log(allAppointments);
        // Assuming your getAllAppointments action returns the data you need
        // const allAppointments = response.payload;

        // Filter the appointments to include only those with dates on or after the current date
        const currentDate = new Date();
        const filteredAppointments = allAppointments.filter((item) => {
          const appointmentDate = new Date(item.date);
          return appointmentDate <= currentDate;
        });

        // Transform the filtered data as needed
        const formattedData = filteredAppointments.map((item, index) => ({
          docid: item._id,
          id: index + 1,
          name: item.fullname,
          email: item.email,
          contact: item.phonenumber.toString(),
          date: item.date,
          services: "Legal Consultant",
          time: item.time,
          duration: "30 Min",
          color: "yellow",
          status: item.isRequestPending ? "Pending" : "Completed",
          reminder: "Notify",
          notified: false,
        }));
        console.log(formattedData);
        setData(formattedData);
        // Update the data state with the formatted data
        // setData(formattedData);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
    console.log("ok dispatch bho");
    console.log(data); // This will show the updated data
  }, [allAppointments]); // Make sure to include any dependencies if necessary

  useEffect(() => {
    console.log("Updated data:", data);
  }, [data]);

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const onOpenDeleteModal = () => {
    setOpen(true);
  };
  const onCloseDeleteModal = () => {
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
    console.log("ok", commitId);
    dispatch(confirmAppointmentRequestHere(commitId));
    console.log("okies");
    // const updateStatus = data.map((item) => {
    //   if (item.id === commitId) {
    //     return {
    //       ...item,
    //       status: "Accepted",
    //       color: "green",
    //     };
    //   }
    //   return item;
    // });
    // setData(updateStatus);
  };
  const handleDelete = (itemId) => {
    // const updatedData = data.filter((item) => item.id !== itemId);
    dispatch(deleteAppointmentHere(itemId))
    setOpen(false)
    // setData(updatedData);
  };
  const handleAcceptBookAppointmentRequest = () => {};
  return (
    <div className="border w-full overflow-x-auto">
      <table className="w-[800px] md:w-full h-full">
        <thead className="bg-[#E2F2FA] text-center">
          <tr className="h-[50px] text-[16px] md:text-[100%]">
            <th className=" font-normal w-[5%]">ID</th>
            <th className="font-normal  w-[20%]">Name</th>
            <th className="font-normal w-[15%]">Services</th>
            <th className=" font-normal w-[10%]">Time</th>
            <th className="font-normal w-[10%]">Duration</th>
            <th className=" font-normal w-[10%]">Status</th>
            <th className="font-normal w-[10%]">Action</th>
            <th className="font-normal w-[13%]">Reminder</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr
              key={item.id}
              className={` h-[50%] text-[16px] md:text-[16px] md:h-[60px] ${item.status=== "Completed"} ? `}
            >
              <td className="text-center w-[5%] md:w-[3%]">{item.id}</td>
              <td className="text-center w-[25%] md:w-[20%]">
                <button onClick={() => onOpenDetailModal(item.id)}>
                  {item.name}
                </button>
              </td>
              <td className="text-center w-[20%] md:w-[15%]">
                {item.services}
              </td>
              <td className="text-center  w-[15%] md:w-[10%] text-[#0038FF]">
                {item.time}
              </td>
              <td className="text-center w-[15%] md:w-[10%] text-[#00AA3A]">
                {item.duration}
              </td>
              <td className=" text-center  w-[10%] md:w-[10%]">
                <div className="md:flex md:justify-evenly md:gap-2  md:items-center  ">
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
              <td className="  flex gap-2 flex-col md:flex-row justify-center items-center    md:h-[60px] ">
                
                <button onClick={onOpenDeleteModal} className="group relative">
                  <img
                    className="md:hidden w-[13px] h-[15px]"
                    
                    src={Delete}
                    alt="Delete"
                  ></img>
                  <div className=" hidden md:block">
                    <svg
                      width="18"
                      height="20"
                      viewBox="0 0 18 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 8V15M7 8V15M3 4V15.8C3 16.9201 3 17.4798 3.21799 17.9076C3.40973 18.2839 3.71547 18.5905 4.0918 18.7822C4.5192 19 5.07899 19 6.19691 19H11.8031C12.921 19 13.48 19 13.9074 18.7822C14.2837 18.5905 14.5905 18.2839 14.7822 17.9076C15 17.4802 15 16.921 15 15.8031V4M3 4H5M3 4H1M5 4H13M5 4C5 3.06812 5 2.60241 5.15224 2.23486C5.35523 1.74481 5.74432 1.35523 6.23438 1.15224C6.60192 1 7.06812 1 8 1H10C10.9319 1 11.3978 1 11.7654 1.15224C12.2554 1.35523 12.6447 1.74481 12.8477 2.23486C12.9999 2.6024 13 3.06812 13 4M13 4H15M15 4H17"
                        stroke="#AD3307"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  <p className=" hidden md:hidden md:group-hover:blockabsolute top-0 left-0  p-1 rounded mt-9  bg-white  shadow">
                    Delete
                  </p>
                </button>
                <Modal
                  className="hello"
                  open={open}
                  onClose={onCloseDeleteModal}
                  closeIcon={closeIcon}
                  classNames={{
                    overlay: "completeOverlay",
                    modal: "completeModal",
                    closeButton: "customButton",
                  }}
                  center
                >
                  <div className=" sm:w-[450px]  bg-[white] rounded-[10px]  flex flex-col justify-center items-start gap-7 p-4">
                  <div  className="w-full  sm:h-[60px] p-2  rounded-t-[10px] flex items-left justify-left">
                      <p className="text-[18px]   text-left  tracking-wide w-[100%]">
                        Are you sure want to Delete?
                      </p>
                    </div>

                    <div className=" w-full flex gap-3 px-2 justify-end">
                      <button
                        onClick={() => handleDelete(item.docid)}
                        className="bg-[#6499E9] text-[white] rounded  focus:outline-none  px-[14px]  text-[13.3px] h-[36px]"
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                      >
                        Delete
                      </button>
                      <button
                        onClick={onCloseDeleteModal}
                        className="border-1 border-[#6499E9] text-[#6499E9] rounded focus:outline-none  px-[14px]  text-[13.3px] h-[36px]"
                        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Modal>
              </td>
              <td>
                <div className="flex justify-center">
                  {!item.notified ? (
                    <button
                      className="flex p-2 border  bg-[#C3ECF4] md:px-3 md:gap-1 text-[15px] justify-center items-center rounded-sm md:p-1"
                      onClick={() => handleNotifyClick(item.id)}
                    >
                      <span className="hidden  md:inline notify-text">{item.reminder}</span>
                     {/* <img className="w-4 " src={bell} alt="notification" /> */}
                     <IoIosNotifications style={{color:"#ffe000", fontSize:"17px"}}/>
                    </button>
                  ) : (
                    <button className="flex gap-1 px-2 bg-[#EDEDED] text-[#0038FF] text-[14px] justify-center rounded-sm items-center p-1">
                      <span className="hidden md:inline notify-text">Notified</span>
                      <img className="w-3" src={vector} alt="notified" />
                    </button>
                  )}
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

          <div className="m-4  p-2 text-[16px] text-center ">
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
  );
}

export default Total;
