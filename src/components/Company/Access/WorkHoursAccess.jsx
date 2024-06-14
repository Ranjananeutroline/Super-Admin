import React from 'react'
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./Access.css";

const WorkHoursAccess=()=>{
    const [newWorkHour, setNewWorkHour] = useState("");
    const [accessWorkHours, setAccessWorkHours] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const addWorkHour = () => {
        if (newWorkHour.trim() === "") {
          setErrorMessage("Please enter the WorkHour's Id.");
          return; // Don't add user if the input is empty
        }
    
        setAccessWorkHours([
          ...accessWorkHours,
          {
            workHour: newWorkHour,
            read: false,
            edit: false,
            readWrite: false,
            notAvailable: false,
          },
        ]);
        setNewWorkHour(""); // Reset the new user input after adding
        setErrorMessage(""); // Clear the error message
      };
    
      const handleWorkHourChange = (index, field) => {
        const newWorkHours = [...accessWorkHours];
        if (
          field === "read" ||
          field === "edit" ||
          field === "readWrite" ||
          field === "notAvailable" ||
          field === "delete"
        ) {
          // Update the corresponding field in the user object
          newWorkHours[index][field] = !newWorkHours[index][field]; // Toggle the value
          setAccessWorkHours(newWorkHours);
        }
      };
    
      const handleWorkHourNameChange = (index, value) => {
        const newWorkHours = [...accessWorkHours];
        newWorkHours[index].workHour = value;
        setAccessWorkHours(newWorkHours);
      };
    
      const handleDeleteWorkHour = (index) => {
        const newWorkHours = [...accessWorkHours];
        newWorkHours.splice(index, 1); // Remove the user at the specified index
        setAccessWorkHours(newWorkHours);
      };

      return (
        <div>
             <div className="flex justify-end items-center manage-div">
      <input
        type="text"
        value={newWorkHour}
        onChange={(e) => setNewWorkHour(e.target.value)}
        className="Id-input" 
        placeholder="Enter Id"
      />
      <button
        onClick={addWorkHour}
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
           <span className="short-text">WorkHours</span>
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
                  {accessWorkHours.map((workHour, index) => (
                    <tr
                      key={index}
                      className="flex justify-between items-center w-full access-td"
                    >
                      <td className="font-normal font-sans id-width">
                        {workHour.workHour}
                      </td>
                      <td className="font-normal font-sans">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 access-check"
                          checked={workHour.read}
                          onChange={() => handleWorkHourChange(index, "read")}
                        />
                      </td>
                      <td className="font-normal font-sans">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 access-check"
                          checked={workHour.edit}
                          onChange={() => handleWorkHourChange(index, "edit")}
                        />
                      </td>
                      <td className="font-normal font-sans r-w-width">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 access-check"
                          checked={workHour.readWrite}
                          onChange={() => handleWorkHourChange(index, "readWrite")}
                        />
                      </td>
                      <td className="font-normal font-sans not-available-width">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 access-check"
                          checked={workHour.notAvailable}
                          onChange={() => handleWorkHourChange(index, "notAvailable")}
                        />
                      </td>
                      <td className="font-normal font-sans">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 access-check"
                          checked={workHour.delete}
                          onChange={() => handleWorkHourChange(index, "delete")}
                        />
                      </td>
                      <td className="font-normal font-sans">
                        <button
                          onClick={() => handleDeleteWorkHour(index)}
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


export default WorkHoursAccess;