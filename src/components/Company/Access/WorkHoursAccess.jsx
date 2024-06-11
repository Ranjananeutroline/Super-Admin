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
          setErrorMessage("Please enter the Work Hour.");
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
    
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    
              <table className=" bg-[#efedf1]  rounded-[5px] shadow-sm access-table">
                <thead>
                  <tr className="flex justify-between items-center w-full ">
                    <th className="py-2 px-2 font-medium text-center flex-1 border-b-[3px] border-[#ffffff] text-[14px] font-sans">
                    Work Hour
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
                  {accessWorkHours.map((workHour, index) => (
                    <tr
                      key={index}
                      className="flex justify-between items-center w-full"
                    >
                      <td className="py-2 px-4 text-center flex-1">
                        {workHour.workHour}
                      </td>
                      <td className="py-2 px-4 text-center flex-1 ml-[-10px]">
                        <input
                          type="checkbox"
                          className="h-4 w-4"
                          checked={workHour.read}
                          onChange={() => handleWorkHourChange(index, "read")}
                        />
                      </td>
                      <td className="py-2 px-4 text-center flex-1">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-600"
                          checked={workHour.edit}
                          onChange={() => handleWorkHourChange(index, "edit")}
                        />
                      </td>
                      <td className="py-2 px-4 text-center flex-1">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-600"
                          checked={workHour.readWrite}
                          onChange={() => handleWorkHourChange(index, "readWrite")}
                        />
                      </td>
                      <td className="py-2 px-4 text-center flex-1">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-600"
                          checked={workHour.notAvailable}
                          onChange={() => handleWorkHourChange(index, "notAvailable")}
                        />
                      </td>
                      <td className="py-2 px-4 text-center flex-1">
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-600"
                          checked={workHour.delete}
                          onChange={() => handleWorkHourChange(index, "delete")}
                        />
                      </td>
                      <td className="py-2 px-4 text-center flex-1">
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