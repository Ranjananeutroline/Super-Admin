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
      setErrorMessage("Please enter the user.");
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

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <table className="bg-[#efedf1]  rounded-[5px] shadow-sm access-table">
            <thead>
              <tr className="flex justify-between items-center w-full access-tr">
                <th className="py-2 px-2 font-medium text-center flex-[0.5] border-b-[3px] border-[#ffffff] text-[14px] font-sans">
                  User
                </th>
                <th className="py-2 px-2 font-medium text-center flex-[0.5] border-b-[3px] border-[#ffffff] text-[14px] font-sans">
                  Read
                </th>
                <th className="py-2 px-2 font-medium text-center flex-[0.5] border-b-[3px] border-[#ffffff] text-[14px] font-sans">
                  Edit
                </th>
                <th className="py-2 px-2 font-medium text-center flex-1 border-b-[3px] border-[#ffffff] text-[14px] font-sans">
                  Read/Write
                </th>
                <th className="py-2 px-2 font-medium text-center flex-1 border-b-[3px] border-[#ffffff] text-[14px] font-sans not-available-width">
                  Not Available
                </th>
                <th className="py-2 px-2 font-medium text-center flex-[0.5] border-b-[3px] border-[#ffffff] text-[14px] font-sans">
                  Delete
                </th>
                <th className="py-2 px-2 font-medium text-center flex-[0.5] border-b-[3px] border-[#ffffff] text-[14px] font-sans">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {accessUsers.map((user, index) => (
                <tr
                  key={index}
                  className="flex justify-between items-center w-full access-tr"
                >
                  <td className="py-2 px-2 font-medium text-center flex-[0.5]">
                    {user.user}
                  </td>
                  <td className="py-2 px-2 font-medium text-center flex-[0.5]">
                    <input
                      type="checkbox"
                      className="h-4 w-4"
                      checked={user.read}
                      onChange={() => handleUserChange(index, "read")}
                    />
                  </td>
                  <td className="py-2 px-2 font-medium text-center flex-[0.5]">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600"
                      checked={user.edit}
                      onChange={() => handleUserChange(index, "edit")}
                    />
                  </td>
                  <td className="py-2 px-2 font-medium text-center flex-1">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600"
                      checked={user.readWrite}
                      onChange={() => handleUserChange(index, "readWrite")}
                    />
                  </td>
                  <td className="py-2 px-2 font-medium text-center flex-1 not-available-width">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600"
                      checked={user.notAvailable}
                      onChange={() => handleUserChange(index, "notAvailable")}
                    />
                  </td>
                  <td className="py-2 px-2 font-medium text-center flex-[0.5]">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600"
                      checked={user.delete}
                      onChange={() => handleUserChange(index, "delete")}
                    />
                  </td>
                  <td className="py-2 px-2 font-medium text-center flex-[0.5]">
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