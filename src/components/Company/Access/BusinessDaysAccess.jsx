import React, { useState } from "react"
import { RiDeleteBin6Line } from "react-icons/ri";
import "./Access.css";

const BusinessDaysAccess=()=>{
    const [newBusinessDay, setNewBusinessDay]=useState("");
    const [accessBusinessDays, setAccessBusinessDays] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
  
    const addBusinessDay = () => {
      if (newBusinessDay.trim() === "") {
        setErrorMessage("Please enter the BusinessDay's Id.");
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
    
         {errorMessage && <p className="access-error-msg">{errorMessage}</p>}
    
         <table className=" bg-[#efedf1]  rounded-[5px] shadow-sm access-table">
           <thead>
           <tr className="flex justify-between items-center w-full access-tr">
           <th className=" font-medium  border-b-[3px] border-[#ffffff] font-sans id-width">
           <span className="short-text">BusinessDays</span>
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
             {accessBusinessDays.map((businessDay, index) => (
               <tr
                 key={index}
                 className="flex justify-between items-center w-full access-td"
               >
                 <td className="font-normal font-sans id-width">
                   {businessDay.businessDay}
                 </td>
                 <td className="font-normal font-sans">
                   <input
                     type="checkbox"
                     className="h-4 w-4 text-blue-600 access-check"
                     checked={businessDay.read}
                     onChange={() => handleBusinessDayChange(index, "read")}
                   />
                 </td>
                 <td className="font-normal font-sans">
                   <input
                     type="checkbox"
                     className="h-4 w-4 text-blue-600 access-check"
                     checked={businessDay.edit}
                     onChange={() => handleBusinessDayChange(index, "edit")}
                   />
                 </td>
                 <td className="font-normal font-sans r-w-width">
                   <input
                     type="checkbox"
                     className="h-4 w-4 text-blue-600 access-check"
                     checked={businessDay.readWrite}
                     onChange={() => handleBusinessDayChange(index, "readWrite")}
                   />
                 </td>
                 <td className="font-normal font-sans not-available-width">
                   <input
                     type="checkbox"
                     className="h-4 w-4 text-blue-600 access-check"
                     checked={businessDay.notAvailable}
                     onChange={() => handleBusinessDayChange(index, "notAvailable")}
                   />
                 </td>
                 <td className="font-normal font-sans">
                   <input
                     type="checkbox"
                     className="h-4 w-4 text-blue-600 access-check"
                     checked={businessDay.delete}
                     onChange={() => handleBusinessDayChange(index, "delete")}
                   />
                 </td>
                 <td className="font-normal font-sans">
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