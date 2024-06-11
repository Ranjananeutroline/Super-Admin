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
      setErrorMessage("Please enter the Offer.");
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
    placeholder="Enter Offer Id"
  />
  <button
    onClick={addOfferAccess}
    className="manage-Id" 
  >
    Manage Offer
  </button>
</div>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <table className="bg-[#efedf1]  rounded-[5px] shadow-sm access-table">
            <thead>
              <tr className="flex justify-between items-center w-full ">
                <th className="py-2 px-2 font-medium text-center flex-1 border-b-[3px] border-[#ffffff] text-[14px] font-sans">
                Offer
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
              {accessOfferAccesss.map((offerAccess, index) => (
                <tr
                  key={index}
                  className="flex justify-between items-center w-full"
                >
                  <td className="py-2 px-4 text-center flex-1">
                    {offerAccess.offerAccess}
                  </td>
                  <td className="py-2 px-4 text-center flex-1 ml-[-10px]">
                    <input
                      type="checkbox"
                      className="h-4 w-4"
                      checked={offerAccess.read}
                      onChange={() => handleOfferAccessChange(index, "read")}
                    />
                  </td>
                  <td className="py-2 px-4 text-center flex-1">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600"
                      checked={offerAccess.edit}
                      onChange={() => handleOfferAccessChange(index, "edit")}
                    />
                  </td>
                  <td className="py-2 px-4 text-center flex-1">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600"
                      checked={offerAccess.readWrite}
                      onChange={() => handleOfferAccessChange(index, "readWrite")}
                    />
                  </td>
                  <td className="py-2 px-4 text-center flex-1">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600"
                      checked={offerAccess.notAvailable}
                      onChange={() => handleOfferAccessChange(index, "notAvailable")}
                    />
                  </td>
                  <td className="py-2 px-4 text-center flex-1">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600"
                      checked={offerAccess.delete}
                      onChange={() => handleOfferAccessChange(index, "delete")}
                    />
                  </td>
                  <td className="py-2 px-4 text-center flex-1">
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