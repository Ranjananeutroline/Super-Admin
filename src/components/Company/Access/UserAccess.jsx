import React from 'react'
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./Access.css";

const UserAccess = () => {
    const [newUser, setNewUser] = useState("");
  const [accessUsers, setAccessUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const addUser = () => {
    if (newUser.trim() === "") {
      setErrorMessage("Please enter the user's Id.");
      return; // Don't add user if the input is empty
    }

    setAccessUsers([
      ...accessUsers,
      {
        user: newUser,
        read: false,
        edit: false,
        readWrite: false,
        notAvailable: false,
      },
    ]);
    setNewUser(""); // Reset the new user input after adding
    setErrorMessage(""); // Clear the error message
  };

  const handleUserChange = (index, field) => {
    const newUsers = [...accessUsers];
    if (
      field === "read" ||
      field === "edit" ||
      field === "readWrite" ||
      field === "notAvailable" ||
      field === "delete"
    ) {
      // Update the corresponding field in the user object
      newUsers[index][field] = !newUsers[index][field]; // Toggle the value
      setAccessUsers(newUsers);
    }
  };

  const handleUserNameChange = (index, value) => {
    const newUsers = [...accessUsers];
    newUsers[index].user = value;
    setAccessUsers(newUsers);
  };

  const handleDeleteUser = (index) => {
    const newUsers = [...accessUsers];
    newUsers.splice(index, 1); // Remove the user at the specified index
    setAccessUsers(newUsers);
  };

  return (
    <div>
         <div className="flex  justify-end items-center manage-div">
          <input
            type="text"
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
            className="Id-input" 
            placeholder="Enter Id"
          />
          <button
            onClick={addUser}
            className="manage-Id" 
          >
            Manage 
          </button>
        </div>

          {errorMessage && <p className="access-error-msg">{errorMessage}</p>}

          <table className="bg-[#efedf1]  rounded-[5px] shadow-sm access-table">
            <thead style={{display:"flex"}}>
            <tr className="flex justify-between items-center w-full access-tr">
           <th className=" font-medium  border-b-[3px] border-[#ffffff] font-sans id-width">
           <span className="short-text">User</span>
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
              {accessUsers.map((user, index) => (
                <tr
                  key={index}
                  className="flex justify-between items-center w-full access-td"
                >
                  <td className="font-normal font-sans id-width">
                    {user.user}
                  </td>
                  <td className="font-normal  font-sans">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 access-check"
                      checked={user.read}
                      onChange={() => handleUserChange(index, "read")}
                    />
                  </td>
                  <td className="font-normal  font-sans">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 access-check"
                      checked={user.edit}
                      onChange={() => handleUserChange(index, "edit")}
                    />
                  </td>
                  <td className="font-normal  font-sans r-w-width">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 access-check"
                      checked={user.readWrite}
                      onChange={() => handleUserChange(index, "readWrite")}
                    />
                  </td>
                  <td className="font-normal  font-sans not-available-width">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 access-check"
                      checked={user.notAvailable}
                      onChange={() => handleUserChange(index, "notAvailable")}
                    />
                  </td>
                  <td className="font-normal  font-sans">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 access-check"
                      checked={user.delete}
                      onChange={() => handleUserChange(index, "delete")}
                    />
                  </td>
                  <td className="font-normal  font-sans">
                    <button
                      onClick={() => handleDeleteUser(index)}
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

export default UserAccess