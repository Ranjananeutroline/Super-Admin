import React, {useState} from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./Access.css";

const ServiceAccess=()=>{
    const [newService, setNewService] = useState("");
    const [accessServices, setAccessServices] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
  
    const addService= () => {
      if (newService.trim() === "") {
        setErrorMessage("Please enter the Service's Id.");
        return; // Don't add user if the input is empty
      }
  
      setAccessServices([
        ...accessServices,
        {
          service: newService,
          read: false,
          edit: false,
          readWrite: false,
          notAvailable: false,
        },
      ]);
      setNewService(""); // Reset the new user input after adding
      setErrorMessage(""); // Clear the error message
    };
  
    const handleServiceChange = (index, field) => {
      const newServices = [...accessServices];
      if (
        field === "read" ||
        field === "edit" ||
        field === "readWrite" ||
        field === "notAvailable" ||
        field === "delete"
      ) {
        // Update the corresponding field in the user object
        newServices[index][field] = !newServices[index][field]; // Toggle the value
        setAccessServices(newServices);
      }
    };
  
    const handleServiceNameChange = (index, value) => {
      const newServices = [...accessServices];
      newServices[index].service = value;
      setAccessServices(newServices);
    };
  
    const handleDeleteService = (index) => {
      const newServices = [...accessServices];
      newServices.splice(index, 1); // Remove the user at the specified index
      setAccessServices(newServices);
    };
  
    return (
      <div>
           <div className="flex justify-end items-center manage-div">
    <input
      type="text"
      value={newService}
      onChange={(e) => setNewService(e.target.value)}
      className="Id-input" 
      placeholder="Enter Id"
    />
    <button
      onClick={addService}
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
           <span className="short-text">Service</span>
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
                {accessServices.map((service, index) => (
                  <tr
                    key={index}
                    className="flex justify-between items-center w-full access-td"
                  >
                    <td className="font-normal font-sans id-width">
                      {service.service}
                    </td>
                    <td className="font-normal font-sans">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 access-check"
                        checked={service.read}
                        onChange={() => handleServiceChange(index, "read")}
                      />
                    </td>
                    <td className="font-normal font-sans">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 access-check"
                        checked={service.edit}
                        onChange={() => handleServiceChange(index, "edit")}
                      />
                    </td>
                    <td className="font-normal font-sans r-w-width">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 access-check"
                        checked={service.readWrite}
                        onChange={() => handleServiceChange(index, "readWrite")}
                      />
                    </td>
                    <td className="font-normal font-sans not-available-width">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 access-check"
                        checked={service.notAvailable}
                        onChange={() => handleServiceChange(index, "notAvailable")}
                      />
                    </td>
                    <td className="font-normal font-sans">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-blue-600 access-check"
                        checked={service.delete}
                        onChange={() => handleServiceChange(index, "delete")}
                      />
                    </td>
                    <td className="font-normal font-sans">
                      <button
                        onClick={() => handleDeleteService(index)}
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

export default ServiceAccess;