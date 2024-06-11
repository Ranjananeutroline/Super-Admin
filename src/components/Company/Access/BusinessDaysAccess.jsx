import React, { useState } from "react"
import { RiDeleteBin6Line } from "react-icons/ri";
import "./Access.css";

const BusinessDaysAccess=()=>{
    const [newBusinessDay, setNewBusinessDay]=useState("");
    const [accessBusinessDays, setAccessBusinessDays] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
  
    const addBusinessDay = () => {
      if (newBusinessDay.trim() === "") {
        setErrorMessage("Please enter the user.");
        return; 
      }
  
      setAccessBusinessDays([
        ...accessBusinessDays,
        {
          businessDay: newBusinessDay,
          read: false,
          edit: false,
          readWrite: false,
          notAvailable: false,
        },
      ]);
      setNewBusinessDay(""); 
      setErrorMessage(""); 
    };
  
    const handleBusinessDayChange = (index, field) => {
      const newBusinessDays = [...accessBusinessDays];
      if (
        field === "read" ||
        field === "edit" ||
        field === "readWrite" ||
        field === "notAvailable" ||
        field === "delete"
      ) {
        // Update the corresponding field in the user object
        newBusinessDays[index][field] = !newBusinessDays[index][field]; // Toggle the value
        setAccessBusinessDays(newBusinessDays);
      }
    };
  
    const handleDeleteBusinessDay = (index) => {
      const newBusinessDays = [...accessBusinessDays];
      newBusinessDays.splice(index, 1); // Remove the user at the specified index
      setAccessBusinessDays(newBusinessDays);
    };
    return (
        <div>
        <div className="flex justify-end items-center manage-div">
    <input
    type="text"
    value={newBusinessDay}
    onChange={(e) => setNewBusinessDay(e.target.value)}
    className="Id-input" 
    placeholder="Enter Id"
    />
    <button
    onClick={addBusinessDay}
    className="manage-Id" 
    >
    Manage 
    </button>
    </div>
    
         {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    
         <table className=" bg-[#efedf1]  rounded-[5px] shadow-sm access-table">
           <thead>
             <tr className="flex justify-between items-center w-full ">
               <th className="py-2 px-2 font-medium text-center flex-1 border-b-[3px] border-[#ffffff] text-[14px] font-sans">
               BusinessDay
               </th>
               <th className="py-2 px-2 font-medium text-center flex-1 border-b-[3px] border-[#ffffff] text-[14px] font-sans">
                 Read
               </th>
               <th className="py-2 px-2 font-medium text-center flex-1 border-b-[3px] border-[#ffffff] text-[14px] font-sans">
                 Edit
               </th>
               <th className="py-2 px-2 font-medium text-center flex-1 border-b-[3px] border-[#ffffff] text-[14px] font-sans">
                 Read/Write
               </th>
               <th className="py-2 px-2 font-medium text-center flex-1 border-b-[3px] border-[#ffffff] text-[14px] font-sans">
                 Not Available
               </th>
               <th className="py-2 px-2 font-medium text-center flex-1 border-b-[3px] border-[#ffffff] text-[14px] font-sans">
                 Delete
               </th>
               <th className="py-2 px-2 font-medium text-center flex-1 border-b-[3px] border-[#ffffff] text-[14px] font-sans">
                 Action
               </th>
             </tr>
           </thead>
    
           <tbody>
             {accessBusinessDays.map((businessDay, index) => (
               <tr
                 key={index}
                 className="flex justify-between items-center w-full"
               >
                 <td className="py-2 px-4 text-center flex-1">
                   {businessDay.businessDay}
                 </td>
                 <td className="py-2 px-4 text-center flex-1 ml-[-10px]">
                   <input
                     type="checkbox"
                     className="h-4 w-4"
                     checked={businessDay.read}
                     onChange={() => handleBusinessDayChange(index, "read")}
                   />
                 </td>
                 <td className="py-2 px-4 text-center flex-1">
                   <input
                     type="checkbox"
                     className="h-4 w-4 text-blue-600"
                     checked={businessDay.edit}
                     onChange={() => handleBusinessDayChange(index, "edit")}
                   />
                 </td>
                 <td className="py-2 px-4 text-center flex-1">
                   <input
                     type="checkbox"
                     className="h-4 w-4 text-blue-600"
                     checked={businessDay.readWrite}
                     onChange={() => handleBusinessDayChange(index, "readWrite")}
                   />
                 </td>
                 <td className="py-2 px-4 text-center flex-1">
                   <input
                     type="checkbox"
                     className="h-4 w-4 text-blue-600"
                     checked={businessDay.notAvailable}
                     onChange={() => handleBusinessDayChange(index, "notAvailable")}
                   />
                 </td>
                 <td className="py-2 px-4 text-center flex-1">
                   <input
                     type="checkbox"
                     className="h-4 w-4 text-blue-600"
                     checked={businessDay.delete}
                     onChange={() => handleBusinessDayChange(index, "delete")}
                   />
                 </td>
                 <td className="py-2 px-4 text-center flex-1">
                   <button
                     onClick={() => handleDeleteBusinessDay(index)}
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

export default BusinessDaysAccess;