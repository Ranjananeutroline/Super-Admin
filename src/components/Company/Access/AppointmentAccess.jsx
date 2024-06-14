import React from 'react';
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./Access.css";


const AppointmentAccess = () => {

    const [newAppointment, setNewAppointment] = useState("");
    const [accessAppointments, setAccessAppointments] = useState([]);
    const [activeTab, setActiveTab] = useState("User");
    const options = ["User", "Appointment", "Announcement"];
    const [errorMessage, setErrorMessage] = useState("");

    const addAppointment = () => {
        if (newAppointment.trim() === "") {
          setErrorMessage("Please enter the Appointment's Id.");
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
    <div className="flex justify-end items-center manage-div">
      <input
      type="text"
      value={newAppointment}
      onChange={(e) => setNewAppointment(e.target.value)}
      className="Id-input" 
      placeholder="Enter Id"
      />
      <button
      onClick={addAppointment}
      className="manage-Id" 
      >
      Manage 
      </button>
      </div>

     {errorMessage && <p className="access-error-msg">{errorMessage}</p>}

     <table className=" bg-[#efedf1]  rounded-[5px] shadow-sm access-table">
       <thead>
       <tr className="flex justify-between items-center w-full access-tr">
           <th className=" font-medium  border-b-[3px] border-[#ffffff] font-sans id-width">
           <span className="short-text">Appointment</span>
            <span className="short-text-603">Id</span>
           </th>
           <th className="font-medium  border-b-[3px] border-[#ffffff] font-sans">
           <span className="short-text">Read</span>
           <span className="short-text-603">Rd</span>
           </th>
           <th className="font-medium  border-b-[3px] border-[#ffffff] font-sans">
            <span className="short-text">Edit</span>
            <span className="short-text-603">Ed</span>
           </th>
           <th className="font-medium  border-b-[3px] border-[#ffffff] font-sans r-w-width">
           <span className="short-text">Read/Write</span>
           <span className="short-text-603">R/W</span>
           </th>
           <th className="font-medium  border-b-[3px] border-[#ffffff] font-sans not-available-width">
           <span className="short-text">Not Available</span>
           <span className="short-text-603">NA</span>
           </th>
           <th className="font-medium  border-b-[3px] border-[#ffffff] font-sans">
           <span className="short-text">Delete</span>
           <span className="short-text-603">Del</span>
           </th>
           <th className="font-medium  border-b-[3px] border-[#ffffff] font-sans">
           <span className="short-text">Action</span>
           <span className="short-text-603">Act</span>
           </th>
         </tr>
       </thead>

       <tbody>
         {accessAppointments.map((appointment, index) => (
           <tr
             key={index}
             className="flex justify-between items-center w-full access-td"
           >
             <td className="font-normal  font-sans id-width">
               {appointment.appointment}
             </td>
             <td className="font-normal  font-sans">
               <input
                 type="checkbox"
                 className="h-4 w-4 text-blue-600 access-check"
                 checked={appointment.read}
                 onChange={() => handleAppointmentChange(index, "read")}
               />
             </td>
             <td className="font-normal  font-sans">
               <input
                 type="checkbox"
                 className="h-4 w-4 text-blue-600 access-check"
                 checked={appointment.edit}
                 onChange={() => handleAppointmentChange(index, "edit")}
               />
             </td>
             <td className="font-normal  font-sans r-w-width">
               <input
                 type="checkbox"
                 className="h-4 w-4 text-blue-600 access-check"
                 checked={appointment.readWrite}
                 onChange={() => handleAppointmentChange(index, "readWrite")}
               />
             </td>
             <td className="font-normal  font-sans not-available-width">
               <input
                 type="checkbox"
                 className="h-4 w-4 text-blue-600 access-check"
                 checked={appointment.notAvailable}
                 onChange={() => handleAppointmentChange(index, "notAvailable")}
               />
             </td>
             <td className="font-normal  font-sans">
               <input
                 type="checkbox"
                 className="h-4 w-4 text-blue-600 access-check"
                 checked={appointment.delete}
                 onChange={() => handleAppointmentChange(index, "delete")}
               />
             </td>
             <td className="font-normal  font-sans">
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