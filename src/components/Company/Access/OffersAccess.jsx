import React from 'react'
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./Access.css";

const OffersAccess=()=>{
    const [newOfferAccess, setNewOfferAccess] = useState("");
  const [accessOfferAccesss, setAccessOfferAccesss] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const addOfferAccess = () => {
    if (newOfferAccess.trim() === "") {
      setErrorMessage("Please enter the Offer's Id.");
      return; // Don't add user if the input is empty
    }

    setAccessOfferAccesss([
      ...accessOfferAccesss,
      {
        offerAccess: newOfferAccess,
        read: false,
        edit: false,
        readWrite: false,
        notAvailable: false,
      },
    ]);
    setNewOfferAccess(""); // Reset the new user input after adding
    setErrorMessage(""); // Clear the error message
  };

  const handleOfferAccessChange = (index, field) => {
    const newOfferAccesss = [...accessOfferAccesss];
    if (
      field === "read" ||
      field === "edit" ||
      field === "readWrite" ||
      field === "notAvailable" ||
      field === "delete"
    ) {
      // Update the corresponding field in the user object
      newOfferAccesss[index][field] = !newOfferAccesss[index][field]; // Toggle the value
      setAccessOfferAccesss(newOfferAccesss);
    }
  };

  const handleOfferAccessNameChange = (index, value) => {
    const newOfferAccesss = [...accessOfferAccesss];
    newOfferAccesss[index].offerAccess = value;
    setAccessOfferAccesss(newOfferAccesss);
  };

  const handleDeleteOfferAccess= (index) => {
    const newOfferAccesss = [...accessOfferAccesss];
    newOfferAccesss.splice(index, 1); // Remove the user at the specified index
    setAccessOfferAccesss(newOfferAccesss);
  };
  return (
    <div>
         <div className="flex justify-end items-center manage-div">
  <input
    type="text"
    value={newOfferAccess}
    onChange={(e) => setNewOfferAccess(e.target.value)}
    className="Id-input" 
    placeholder="Enter Id"
  />
  <button
    onClick={addOfferAccess}
    className="manage-Id" 
  >
    Manage 
  </button>
</div>

          {errorMessage && <p className="access-error-msg">{errorMessage}</p>}

          <table className="bg-[#efedf1]  rounded-[5px] shadow-sm access-table">
            <thead>
            <tr className="flex justify-between items-center w-full access-tr">
           <th className=" font-medium  border-b-[3px] border-[#ffffff] font-sans id-width">
           <span className="short-text">Offers</span>
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
              {accessOfferAccesss.map((offerAccess, index) => (
                <tr
                  key={index}
                  className="flex justify-between items-center w-full access-td"
                >
                  <td className="font-normal font-sans id-width">
                    {offerAccess.offerAccess}
                  </td>
                  <td className="font-normal font-sans">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 access-check"
                      checked={offerAccess.read}
                      onChange={() => handleOfferAccessChange(index, "read")}
                    />
                  </td>
                  <td className="font-normal font-sans">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 access-check"
                      checked={offerAccess.edit}
                      onChange={() => handleOfferAccessChange(index, "edit")}
                    />
                  </td>
                  <td className="font-normal font-sans r-w-width">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 access-check"
                      checked={offerAccess.readWrite}
                      onChange={() => handleOfferAccessChange(index, "readWrite")}
                    />
                  </td>
                  <td className="font-normal font-sans not-available-width">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 access-check"
                      checked={offerAccess.notAvailable}
                      onChange={() => handleOfferAccessChange(index, "notAvailable")}
                    />
                  </td>
                  <td className="font-normal font-sans">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 access-check"
                      checked={offerAccess.delete}
                      onChange={() => handleOfferAccessChange(index, "delete")}
                    />
                  </td>
                  <td className="font-normal font-sans">
                    <button
                      onClick={() => handleDeleteOfferAccess(index)}
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

export default OffersAccess;