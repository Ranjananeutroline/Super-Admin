import React from 'react';
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const AnnouncementAccess = () => {
    const [newAnnouncement, setNewAnnouncement] = useState("");
  const [accessAnnouncements, setAccessAnnouncements] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const addAnnouncement = () => {
    if (newAnnouncement.trim() === "") {
      setErrorMessage("Please enter the Announcement.");
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
    <div className="flex mb-[-12px] mt-[-5px] justify-end items-center">
<input
type="text"
value={newAnnouncement}
onChange={(e) => setNewAnnouncement(e.target.value)}
className="w-[200px] px-[12px] py-[6px] rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300 text-[15px] mr-4 border-[0.8px] h-[40px] mb-4" 
placeholder="Enter Announcement Id"
/>
<button
onClick={addAnnouncement}
className="text-[#d862bc] px-[12px] py-[6px] rounded-md shadow-md border-[0.8px] border-[#d862bc] hover:bg-gray-100 focus:outline-none mb-4 h-[40px]" 
>
Manage Announcement
</button>
</div>

     {errorMessage && <p className="text-red-500">{errorMessage}</p>}

     <table className="min-w-full bg-[#efedf1]  rounded-[10px] shadow-sm">
       <thead>
         <tr className="flex justify-between items-center w-full ">
           <th className="py-2 px-3 text-center flex-1 border-b-[3px] border-[#ffffff] text-[14px] font-sans">
           Announcement
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
         {accessAnnouncements.map((announcement, index) => (
           <tr
             key={index}
             className="flex justify-between items-center w-full"
           >
             <td className="py-2 px-4 text-center flex-1">
               {announcement.announcement}
             </td>
             <td className="py-2 px-4 text-center flex-1 ml-[-10px]">
               <input
                 type="checkbox"
                 className="h-4 w-4"
                 checked={announcement.read}
                 onChange={() => handleAnnouncementChange(index, "read")}
               />
             </td>
             <td className="py-2 px-4 text-center flex-1">
               <input
                 type="checkbox"
                 className="h-4 w-4 text-blue-600"
                 checked={announcement.edit}
                 onChange={() => handleAnnouncementChange(index, "edit")}
               />
             </td>
             <td className="py-2 px-4 text-center flex-1">
               <input
                 type="checkbox"
                 className="h-4 w-4 text-blue-600"
                 checked={announcement.readWrite}
                 onChange={() => handleAnnouncementChange(index, "readWrite")}
               />
             </td>
             <td className="py-2 px-4 text-center flex-1">
               <input
                 type="checkbox"
                 className="h-4 w-4 text-blue-600"
                 checked={announcement.notAvailable}
                 onChange={() => handleAnnouncementChange(index, "notAvailable")}
               />
             </td>
             <td className="py-2 px-4 text-center flex-1">
               <input
                 type="checkbox"
                 className="h-4 w-4 text-blue-600"
                 checked={announcement.delete}
                 onChange={() => handleAnnouncementChange(index, "delete")}
               />
             </td>
             <td className="py-2 px-4 text-center flex-1">
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
