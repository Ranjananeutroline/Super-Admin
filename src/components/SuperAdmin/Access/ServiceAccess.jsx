import React, {useState} from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const ServiceAccess=()=>{
    const [newService, setNewService] = useState("");
    const [accessServices, setAccessServices] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
  
    const addService= () => {
      if (newService.trim() === "") {
        setErrorMessage("Please enter the Service.");
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
           <div className="flex mb-[-12px] mt-[-5px] justify-end items-center">
    <input
      type="text"
      value={newService}
      onChange={(e) => setNewService(e.target.value)}
      className="w-[150px] px-[12px] py-[6px] rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300 text-[15px] mr-4 border-[0.8px] h-[40px] mb-4" 
      placeholder="Enter Service Id"
    />
    <button
      onClick={addService}
      className="text-[#d862bc] px-[12px] py-[6px] rounded-md shadow-md border-[0.8px] border-[#d862bc] hover:bg-gray-100 focus:outline-none mb-4 h-[40px]" 
    >
      Manage Service
    </button>
  </div>
  
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
  
            <table className="min-w-full bg-[#efedf1]  rounded-[10px] shadow-sm">
              <thead>
                <tr className="flex justify-between items-center w-full ">
                  <th className="py-2 px-3 text-center flex-1 border-b-[3px] border-[#ffffff] text-[14px] font-sans">
                  Service
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
                {accessServices.map((service, index) => (
                  <tr
                    key={index}
                    className="flex justify-between items-center w-full"
                  >
                    <td className="py-2 px-4 text-center flex-1">
                      {service.service}
                    </td>
                    <td className="py-2 px-4 text-center flex-1 ml-[-10px]">
                      <input
                        type="checkbox"
                        className="h-4 w-4"
                        checked={service.read}
                        onChange={() => handleServiceChange(index, "read")}
                      />
                    </td>
                    <td className="py-2 px-4 text-center flex-1">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-blue-600"
                        checked={service.edit}
                        onChange={() => handleServiceChange(index, "edit")}
                      />
                    </td>
                    <td className="py-2 px-4 text-center flex-1">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-blue-600"
                        checked={service.readWrite}
                        onChange={() => handleServiceChange(index, "readWrite")}
                      />
                    </td>
                    <td className="py-2 px-4 text-center flex-1">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-blue-600"
                        checked={service.notAvailable}
                        onChange={() => handleServiceChange(index, "notAvailable")}
                      />
                    </td>
                    <td className="py-2 px-4 text-center flex-1">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-blue-600"
                        checked={service.delete}
                        onChange={() => handleServiceChange(index, "delete")}
                      />
                    </td>
                    <td className="py-2 px-4 text-center flex-1">
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
