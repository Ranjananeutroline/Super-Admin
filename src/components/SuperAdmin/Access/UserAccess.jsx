import React from 'react'
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

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
         <div className="flex mb-[-12px] mt-[-5px] justify-end items-center">
  <input
    type="text"
    value={newUser}
    onChange={(e) => setNewUser(e.target.value)}
    className="w-[150px] px-[12px] py-[6px] rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-300 text-[15px] mr-4 border-[0.8px] h-[40px] mb-4" 
    placeholder="Enter User Id"
  />
  <button
    onClick={addUser}
    className="text-[#d862bc] px-[12px] py-[6px] rounded-md shadow-md border-[0.8px] border-[#d862bc] hover:bg-gray-100 focus:outline-none mb-4 h-[40px]" 
  >
    Manage User
  </button>
</div>

          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <table className="min-w-full bg-[#efedf1]  rounded-[10px] shadow-sm">
            <thead>
              <tr className="flex justify-between items-center w-full ">
                <th className="py-2 px-3 text-center flex-1 border-b-[3px] border-[#ffffff] text-[14px] font-sans">
                  User
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
              {accessUsers.map((user, index) => (
                <tr
                  key={index}
                  className="flex justify-between items-center w-full"
                >
                  <td className="py-2 px-4 text-center flex-1">
                    {user.user}
                  </td>
                  <td className="py-2 px-4 text-center flex-1 ml-[-10px]">
                    <input
                      type="checkbox"
                      className="h-4 w-4"
                      checked={user.read}
                      onChange={() => handleUserChange(index, "read")}
                    />
                  </td>
                  <td className="py-2 px-4 text-center flex-1">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600"
                      checked={user.edit}
                      onChange={() => handleUserChange(index, "edit")}
                    />
                  </td>
                  <td className="py-2 px-4 text-center flex-1">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600"
                      checked={user.readWrite}
                      onChange={() => handleUserChange(index, "readWrite")}
                    />
                  </td>
                  <td className="py-2 px-4 text-center flex-1">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600"
                      checked={user.notAvailable}
                      onChange={() => handleUserChange(index, "notAvailable")}
                    />
                  </td>
                  <td className="py-2 px-4 text-center flex-1">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600"
                      checked={user.delete}
                      onChange={() => handleUserChange(index, "delete")}
                    />
                  </td>
                  <td className="py-2 px-4 text-center flex-1">
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
