import React from 'react';
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./Access.css";

const AnnouncementAccess = () => {
    const [newAnnouncement, setNewAnnouncement] = useState("");
  const [accessAnnouncements, setAccessAnnouncements] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const addAnnouncement = () => {
    if (newAnnouncement.trim() === "") {
      setErrorMessage("Please enter the Announcement's Id.");
      return; 
    }

    setAccessAnnouncements([
      ...accessAnnouncements,
      {
        announcement: newAnnouncement,
        read: false,
        edit: false,
        readWrite: false,
        notAvailable: false,
      },
    ]);
    setNewAnnouncement(""); 
    setErrorMessage(""); 
  };

  const handleAnnouncementChange = (index, field) => {
    const newAnnouncements = [...accessAnnouncements];
    if (
      field === "read" ||
      field === "edit" ||
      field === "readWrite" ||
      field === "notAvailable" ||
      field === "delete"
    ) {
      // Update the corresponding field in the user object
      newAnnouncements[index][field] = !newAnnouncements[index][field]; // Toggle the value
      setAccessAnnouncements(newAnnouncements);
    }
  };

  const handleDeleteAnnouncement = (index) => {
    const newAnnouncements = [...accessAnnouncements];
    newAnnouncements.splice(index, 1); // Remove the user at the specified index
    setAccessAnnouncements(newAnnouncements);
  };


  return (
    <div>
    <div className="flex justify-end items-center manage-div">
      <input
      type="text"
      value={newAnnouncement}
      onChange={(e) => setNewAnnouncement(e.target.value)}
      className="Id-input" 
      placeholder="Enter Id"
      />
      <button
      onClick={addAnnouncement}
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
           <span className="short-text">Announcement</span>
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
         {accessAnnouncements.map((announcement, index) => (
           <tr
             key={index}
             className="flex justify-between items-center w-full access-td"
           >
             <td className="font-normal font-sans id-width">
               {announcement.announcement}
             </td>
             <td className="font-normal font-sans">
               <input
                 type="checkbox"
                 className="h-4 w-4 text-blue-600 access-check"
                 checked={announcement.read}
                 onChange={() => handleAnnouncementChange(index, "read")}
               />
             </td>
             <td className="font-normal font-sans">
               <input
                 type="checkbox"
                 className="h-4 w-4 text-blue-600 access-check"
                 checked={announcement.edit}
                 onChange={() => handleAnnouncementChange(index, "edit")}
               />
             </td>
             <td className="font-normal font-sans r-w-width">
               <input
                 type="checkbox"
                 className="h-4 w-4 text-blue-600 access-check"
                 checked={announcement.readWrite}
                 onChange={() => handleAnnouncementChange(index, "readWrite")}
               />
             </td>
             <td className="font-normal font-sans not-available-width">
               <input
                 type="checkbox"
                 className="h-4 w-4 text-blue-600 access-check"
                 checked={announcement.notAvailable}
                 onChange={() => handleAnnouncementChange(index, "notAvailable")}
               />
             </td>
             <td className="font-normal font-sans">
               <input
                 type="checkbox"
                 className="h-4 w-4 text-blue-600 access-check"
                 checked={announcement.delete}
                 onChange={() => handleAnnouncementChange(index, "delete")}
               />
             </td>
             <td className="font-normal font-sans">
               <button
                 onClick={() => handleDeleteAnnouncement(index)}
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

export default AnnouncementAccess