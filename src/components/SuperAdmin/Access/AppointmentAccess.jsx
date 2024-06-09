import React from 'react';
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";


const AppointmentAccess = () => {

    const [newAppointment, setNewAppointment] = useState("");
    const [accessAppointments, setAccessAppointments] = useState([]);
    const [activeTab, setActiveTab] = useState("User");
    const options = ["User", "Appointment", "Announcement"];
    const [errorMessage, setErrorMessage] = useState("");

    const addAppointment = () => {
        if (newAppointment.trim() === "") {
          setErrorMessage("Please enter the Appointment Id.");
          return; 
        }
    
        setAccessAppointments([
          ...accessAppointments,
          {
            appointment: newAppointment,
            read: false,
            edit: false,
            readWrite: false,
            notAvailable: false,
          },
        ]);
        setNewAppointment(""); 
        setErrorMessage(""); // Clear the error message
      };

      const handleAppointmentChange = (index, field) => {
        const newAppointments = [...accessAppointments];
        if (
          field === "read" ||
          field === "edit" ||
          field === "readWrite" ||
          field === "notAvailable" ||
          field === "delete"
        ) {
          // Update the corresponding field in the user object
          newAppointments[index][field] = !newAppointments[index][field]; // Toggle the value
          setAccessAppointments(newAppointments);
        }
      };

      const handleDeleteAppointment = (index) => {
        const newAppointments = [...accessAppointments];
        newAppointments.splice(index, 1); // Remove the user at the specified index
        setAccessAppointments(newAppointments);
      };

  return (
    <div>
    <div className="flex mb-[-12px] mt-[-5px] justify-end items-center">
<input
type="text"
value={newAppointment}
onChange={(e) => setNewAppointment(e.target.value)}
className="w-[180px] px-[12px] py-[6px] rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300 text-[15px] mr-4 border-[0.8px] h-[40px] mb-4" 
placeholder="Enter Appointment Id"
/>
<button
onClick={addAppointment}
className="text-[#d862bc] px-[12px] py-[6px] rounded-md shadow-md border-[0.8px] border-[#d862bc] hover:bg-gray-100 focus:outline-none mb-4 h-[40px]" 
>
Manage Appointment
</button>
</div>

     {errorMessage && <p className="text-red-500">{errorMessage}</p>}

     <table className="min-w-full bg-[#efedf1]  rounded-[10px] shadow-sm">
       <thead>
         <tr className="flex justify-between items-center w-full ">
           <th className="py-2 px-3 text-center flex-1 border-b-[3px] border-[#ffffff] text-[14px] font-sans">
             Appointment Id
           </th>
           <th className="py-2 px-3 text-center flex-1 border-b-[3px] border-[#ffffff] text-[14px] font-sans">
             Read
           </th>
           <th className="py-2 px-3 text-center flex-1 border-b-[3px] border-[#ffffff] text-[14px] font-sans">
             Edit
           </th>
           <th className="py-2 px-3 text-center flex-1 border-b-[3px] border-[#ffffff] text-[14px] font-sans">
             Read/Write
           </th>
           <th className="py-2 px-3 text-center flex-1 border-b-[3px] border-[#ffffff] text-[14px] font-sans">
             Not Available
           </th>
           <th className="py-2 px-3 text-center flex-1 border-b-[3px] border-[#ffffff] text-[14px] font-sans">
             Delete
           </th>
           <th className="py-2 px-3 text-center flex-1 border-b-[3px] border-[#ffffff] text-[14px] font-sans">
             Action
           </th>
         </tr>
       </thead>

       <tbody>
         {accessAppointments.map((appointment, index) => (
           <tr
             key={index}
             className="flex justify-between items-center w-full"
           >
             <td className="py-2 px-4 text-center flex-1">
               {appointment.appointment}
             </td>
             <td className="py-2 px-4 text-center flex-1 ml-[-10px]">
               <input
                 type="checkbox"
                 className="h-4 w-4"
                 checked={appointment.read}
                 onChange={() => handleAppointmentChange(index, "read")}
               />
             </td>
             <td className="py-2 px-4 text-center flex-1">
               <input
                 type="checkbox"
                 className="h-4 w-4 text-blue-600"
                 checked={appointment.edit}
                 onChange={() => handleAppointmentChange(index, "edit")}
               />
             </td>
             <td className="py-2 px-4 text-center flex-1">
               <input
                 type="checkbox"
                 className="h-4 w-4 text-blue-600"
                 checked={appointment.readWrite}
                 onChange={() => handleAppointmentChange(index, "readWrite")}
               />
             </td>
             <td className="py-2 px-4 text-center flex-1">
               <input
                 type="checkbox"
                 className="h-4 w-4 text-blue-600"
                 checked={appointment.notAvailable}
                 onChange={() => handleAppointmentChange(index, "notAvailable")}
               />
             </td>
             <td className="py-2 px-4 text-center flex-1">
               <input
                 type="checkbox"
                 className="h-4 w-4 text-blue-600"
                 checked={appointment.delete}
                 onChange={() => handleAppointmentChange(index, "delete")}
               />
             </td>
             <td className="py-2 px-4 text-center flex-1">
               <button
                 onClick={() => handleDeleteAppointment(index)}
                 className="text-red-500"
               >
                 <RiDeleteBin6Line />
               </button>
             </td>
           </tr>
         ))}
       </tbody>
     </table>
   </div>
  )
}

export default AppointmentAccess
