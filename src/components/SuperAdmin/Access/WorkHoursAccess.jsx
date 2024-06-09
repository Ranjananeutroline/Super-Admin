import React from 'react'
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

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
             <div className="flex mb-[-12px] mt-[-5px] justify-end items-center">
      <input
        type="text"
        value={newWorkHour}
        onChange={(e) => setNewWorkHour(e.target.value)}
        className="w-[150px] px-[12px] py-[6px] rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300 text-[15px] mr-4 border-[0.8px] h-[40px] mb-4" 
        placeholder="Enter WorkHour Id"
      />
      <button
        onClick={addWorkHour}
        className="text-[#d862bc] px-[12px] py-[6px] rounded-md shadow-md border-[0.8px] border-[#d862bc] hover:bg-gray-100 focus:outline-none mb-4 h-[40px]" 
      >
        Manage WorkHour
      </button>
    </div>
    
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    
              <table className="min-w-full bg-[#efedf1]  rounded-[10px] shadow-sm">
                <thead>
                  <tr className="flex justify-between items-center w-full ">
                    <th className="py-2 px-3 text-center flex-1 border-b-[3px] border-[#ffffff] text-[14px] font-sans">
                    Work Hour
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