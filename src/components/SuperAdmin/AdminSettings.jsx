import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState('Profile');
  const [showModal, setShowModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [editField, setEditField] = useState('');
  const [editedValue, setEditedValue] = useState('');
  const [name, setName] = useState('Pooja Tiwari');
  const [email, setEmail] = useState('admin@example.com');
  const [currentPassword, setCurrentPassword] = useState('poojapooja');
  const [newPassword, setNewPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentPasswordError, setCurrentPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [newUserData, setNewUserData] = useState({
    username: '',
    email: '',
    role: 'User', // Default role is 'User'
  });
  const [users, setUsers] = useState([]); // Array to store user data
  const [admins, setAdmins] = useState([]); // Array to store admin data

  const openUserModal = () => {
    setShowUserModal(true);
    setNewUserData({ ...newUserData, role: 'User' });
  };

  const openAdminModal = () => {
    setShowUserModal(true);
    setNewUserData({ ...newUserData, role: 'Admin' });
  };

  const closeUserModal = () => {
    setShowUserModal(false);
    setPasswordError('');
    setNewUserData({ username: '', email: '', role: 'User' });
  };

  const openModal = (field) => {
    setEditField(field);
    setEditedValue('');
    setShowModal(true);
    setCurrentPassword(''); // Clear current password field
    setCurrentPasswordError(''); // Clear current password error state
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentPassword(''); // Clear current password field
    setPasswordError(''); // Clear password error state
  };


  const handleSavePassword = () => {
    setCurrentPasswordError('');
    setPasswordError('');
    setConfirmPasswordError('');
  
    let hasError = false;
  
    if (currentPassword.trim() === '') {
      setCurrentPasswordError('Please enter your current password');
      hasError = true;
    }
  
    if (newPassword.trim() === '') {
      setPasswordError('Please enter a new password');
      hasError = true;
    }
  
    if (confirmPassword.trim() === '') {
      setConfirmPasswordError('Please confirm your new password');
      hasError = true;
    }
  
    if (hasError) {
      return;
    }
  
    if (currentPassword !== 'poojapooja') {
      setCurrentPasswordError('Current password is incorrect');
      return;
    }
  
    if (newPassword !== confirmPassword) {
      setConfirmPasswordError('New password and confirm password do not match');
      return;
    }
  
    setCurrentPassword(newPassword);

    toast.success("Password change successfully!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
  });

    // Reset the form and close the modal
    setNewPassword('');
    setConfirmPassword('');
    closeModal();
  };

   // Function to clear individual error message
   const handleInputChange = (field) => {
    if (field === 'currentPassword') {
      setCurrentPasswordError('');
    } else if (field === 'newPassword' || field === 'confirmPassword') {
      setConfirmPasswordError('');
    }
  };
  
  

  const handleAddUser = () => {
    setUsers([...users, { ...newUserData, role: 'User' }]);
    closeUserModal();
  };

  const handleAddAdmin = () => {
    setAdmins([...admins, { ...newUserData, role: 'Admin' }]);
    closeUserModal();
  };

  const handleNewUserInputChange = (e) => {
    setNewUserData({ ...newUserData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full px-[50px] md:px-10 dashboard-main">
      <h1 className="text-[27px] text-[#3F26A5] pb-2 ">Settings</h1>

      <div className="flex gap-3 mt-2 mb-3 ">
        <h2
          className={`cursor-pointer font-sans text-[18px] ${
            activeTab === 'Profile' ? 'underline' : ''
          } ${activeTab === 'Profile' ? 'text-blue-600 ' : 'text-gray-600 hover:text-blue-800'}`}
          onClick={() => setActiveTab('Profile')}
        >
          Profile Settings
        </h2>
        <h2
          className={`cursor-pointer font-sans text-[18px] ${
            activeTab === 'Account' ? 'underline' : ''
          } ${activeTab === 'Account' ? 'text-blue-600 ' : 'text-gray-600 hover:text-blue-800'}`}
          onClick={() => setActiveTab('Account')}
        >
          Account Settings
        </h2>
      </div>

      {activeTab === 'Profile' && (
        <div className="pb-4 md:pb-20 bg-gradient-to-b from-[#f1ebf8]  to-[#fdfbfe] rounded-lg shadow-md p-6 profileSettings">
          {/* User details */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 py-1">Name:</label>
            <div className="flex justify-between items-center rounded-md px-3 bg-[#ffffff] shadow-sm">
              <input
                type="text"
                className="text-gray-900 font-semibold focus:outline-none"
                value={name}
                readOnly
              />
              <button
                onClick={() => openModal('name')}
                className=" h-[35px] ml-2 px-2 rounded-md bg-[#f0d1f7] text-[#8a298d] text-sm hover:bg-[#d9a2f4] focus:outline-none"
              >
                Edit Name
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 py-1">Email:</label>
            <div className="flex justify-between items-center rounded-md px-3 bg-[#ffffff] shadow-sm">
              <input
                type="text"
                className="text-gray-900 font-semibold focus:outline-none"
                value={email}
                readOnly
              />
              <button
                onClick={() => openModal('email')}
                className=" h-[35px] ml-2 px-2 rounded-md text-[#8a298d] text-sm hover:bg-[#d9a2f4] focus:outline-none"
              >
                Edit Email
              </button>
            </div>
          </div>
          <div className="mb-4">
            <button
              onClick={() => openModal('password')}
              className="px-3 py-1 rounded-md bg-[#f0d1f7] text-[#8a298d] text-sm hover:bg-[#d9a2f4] focus:outline-none"
            >
              Change Password
            </button>
          </div>
        </div>
      )}

      {activeTab === 'Account' && (
        <div className="pb-4 md:pb-20 accountSettings flex">
          {/* User Settings */}
          <div className="w-1/2 pr-4">
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-2">User Settings</h3>
              <button
                onClick={openUserModal}
                className="bg-purple-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-700 focus:outline-none"
              >
                Add User
              </button>
              <div className="mt-4 bg-gradient-to-b from-[#f1eaf8] to-[#ffffff] px-3 py-2 mb-2 border border-[a43ab4]">
                {users.map((user, index) => (
                  <div key={index} className="border-b border-gray-200 pb-2 mb-2">
                    <p className="text-lg font-semibold">{user.username}</p>
                    <p className="text-gray-600">{user.email}</p>
                    <p className="text-gray-600">{user.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Vertical Line */}
          <div className="w-px bg-gray-300"></div>
          {/* Admin Settings */}
          <div className="w-1/2 pl-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Admin Settings</h3>
              <button
                onClick={openAdminModal}
                className="bg-purple-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-700 focus:outline-none"
              >
                Add Admin
              </button>
              <div className="mt-4 bg-gradient-to-b from-[#f1eaf8] to-[#ffffff] px-3 py-2 mb-2 border border-[a43ab4]">
                {admins.map((admin, index) => (
                  <div key={index} className="border-b border-gray-200 pb-2 mb-2">
                    <p className="text-lg font-semibold">{admin.username}</p>
                    <p className="text-gray-600">{admin.email}</p>
                    <p className="text-gray-600">{admin.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      
{showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-md w-[400px]">
            <div className="bg-[#d28ce0] h-[60px] rounded-md flex items-center justify-center pt-4">
              <h2 className="text-xl font-semibold mb-4 text-[#ffffff]">
                {editField === 'name'
                  ? 'Edit Name'
                  : editField === 'email'
                  ? 'Edit Email'
                  : 'Change Password'}
              </h2>
            </div>
            <div className="p-3">
               {editField === 'password' && (
              <>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => { setCurrentPassword(e.target.value); handleInputChange('currentPassword'); }}
                  placeholder="Current Password"
                  className="mt-1 p-1 border border-gray-300 rounded-md w-full text-[13px] font-sans"
                  required
                />
                {currentPasswordError && <p className="text-red-500 text-sm">{currentPasswordError}</p>}
                <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => { setNewPassword(e.target.value); handleInputChange('newPassword'); }}
                    placeholder="New Password"
                    className="mt-1 p-1 border border-gray-300 rounded-md w-full text-[13px] font-sans"
                    required
                  />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => { setConfirmPassword(e.target.value); handleInputChange('confirmPassword'); }}
                    placeholder="Confirm Password"
                    className="mt-1 p-1 border border-gray-300 rounded-md w-full text-[13px] font-sans"
                    required
                  />
                {confirmPasswordError && <p className="text-red-500 text-sm">{confirmPasswordError}</p>}
                <div className="flex justify-end mt-2">
                  <button
                    type="button"
                    className="bg-[#a7a5a5] hover:bg-[#767474] text-white px-3 py-1 rounded-md mr-2"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="bg-[#c88ce0] hover:bg-[#b968d9] text-white px-3 py-1 rounded-md"
                    onClick={handleSavePassword}
                  >
                    Save
                  </button>
                </div>
              </>
            )}
            </div>
          </div>
        </div>
      )}


      {showUserModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-md w-[400px]">
            <div className="bg-[#d28ce0] h-[60px] rounded-md flex items-center justify-center pt-4">
              <h2 className="text-xl font-semibold mb-4 text-[#ffffff]">
                {newUserData.role === 'Admin' ? 'Add Admin' : 'Add User'}
              </h2>
            </div>
            <div className="p-3">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={newUserData.username}
                onChange={handleNewUserInputChange}
                className="mt-1 p-1 border border-gray-300 rounded-md w-full text-[13px] font-sans"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={newUserData.email}
                onChange={handleNewUserInputChange}
                className="mt-1 p-1 border border-gray-300 rounded-md w-full text-[13px] font-sans"
                required
              />
              <div className="flex justify-end mt-2">
                <button
                  type="button"
                  className="bg-[#a7a5a5] hover:bg-[#767474] text-white px-3 py-1 rounded-md mr-2"
                  onClick={closeUserModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={newUserData.role === 'Admin' ? handleAddAdmin : handleAddUser}
                  className="bg-[#c88ce0] hover:bg-[#b968d9] text-white px-3 py-1 rounded-md"
                >
                  {newUserData.role === 'Admin' ? 'Add Admin' : 'Add User'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSettings;
