import React, {useState} from 'react'

const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState('Account');
  const [showModal, setShowModal] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [notificationData, setNotificationData] = useState({
    title: '',
    body: ''
  });
  const [editIndex, setEditIndex] = useState(null);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditIndex(null); // Reset edit index
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNotificationData({ ...notificationData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Edit existing notification
      const updatedNotifications = [...notifications];
      updatedNotifications[editIndex] = notificationData;
      setNotifications(updatedNotifications);
    } else {
      // Add new notification to the list
      setNotifications([...notifications, notificationData]);
    }
    // Clear form data
    setNotificationData({ title: '', body: '' });
    // Close modal
    closeModal();
  };

  const handleEdit = (index) => {
    // Set data for editing
    setNotificationData(notifications[index]);
    setEditIndex(index);
    // Open modal for editing
    openModal();
  };

  const handleDelete = (index) => {
    // Remove notification from the list
    const updatedNotifications = [...notifications];
    updatedNotifications.splice(index, 1);
    setNotifications(updatedNotifications);
  };
  return (
    <div className="w-full px-[50px] md:px-10 dashboard-main">
             <h1 className="text-[27px] text-[#3F26A5] pb-2 ">Settings</h1>

            <div className="flex gap-3 mt-2 mb-3 ">
                
                <h2 
                    className={`cursor-pointer font-sans text-[18px] ${activeTab === 'Account' ? 'underline' : ''} ${activeTab === 'Account' ? 'text-blue-600 ' : 'text-gray-600 hover:text-blue-800'}`}
                    onClick={() => setActiveTab('Account')}
                >
                    Account Settings
                </h2>
                <h2 
                    className={`cursor-pointer font-sans text-[18px] ${activeTab === 'Notification' ? 'underline' : ''} ${activeTab === 'Notification' ? 'text-blue-600 ' : 'text-gray-600 hover:text-blue-800'}`}
                    onClick={() => setActiveTab('Notification')}
                >
                    Notification Settings
                </h2>
            
            
           
            {activeTab === 'Account' && (
                <div className="pb-4 md:pb-20 accountsettings">
                    {/* Account Settings Content */}
                </div>
            )}
        
            {activeTab === 'Notification' && (
                <div className="pb-4 md:pb-20 notificationsettings">
                    {/* Notification Settings Content */}
                </div>
            )}
        </div>
         
      
    

{activeTab === 'Account' && (
    <div className="pb-4 md:pb-20 accountsettings">
      {/* Account Settings Content */}
    </div>
  )}

       {activeTab === 'Notification' && (
          <div className="notificationsettings">
            <div className="flex justify-end">
              <button
                className="mt-2 mr-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-sans "
                onClick={openModal}
              >
                Add Notification
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-4 border-[1px]">
              {notifications.map((notification, index) => (
                <div key={index} className="bg-[#ffffff] rounded-[8px] w-[320px] h-auto shadow-sm border-1px border-[#CF9ECF40] ">
                  <div className="h-[50px] bg-[#CF9ECF40] rounded-[8px] p-2 flex items-center justify-center">
                  <h2 className="text-lg ">{notification.title}</h2>
                  </div>
                <div className="my-2 mx-2 flex items-center justify-center">
                <p className="text-sm">{notification.body}</p>
                </div>
               
                  <div className="flex justify-end mt-2 mx-4 my-2 ">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white px-1 py-[2px] rounded-md mr-2 text-[12px] font-sans w-[50px] "
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-[#ec7d7d] hover:bg-[#ee6161] text-white px-1 py-[2px] rounded-md text-[12px] font-sans w-[50px]"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                 
                </div>
              ))}
            </div>
          </div>
        )}
        {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
          <div className="bg-white  rounded-md w-[400px]">
            <div className="bg-[#8c8de0] h-[60px] rounded-md flex items-center justify-center pt-4">
            <h2 className="text-xl font-semibold mb-4 text-[#ffffff]">
              {editIndex !== null ? 'Edit Notification' : 'Add Notification'}
            </h2> 
            </div>
                   
                   <div className="p-3">
                   <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={notificationData.title}
                  onChange={handleInputChange}
                  className="mt-1 p-1 border border-gray-300 rounded-md w-full text-[13px] font-sans"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="body" className="block text-sm font-medium text-gray-700">
                  Body
                </label>
                <textarea
                  id="body"
                  name="body"
                  value={notificationData.body}
                  onChange={handleInputChange}
                  className="mt-1 p-1 border border-gray-300 rounded-md w-full text-[13px] font-sans"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-[#a7a5a5] hover:bg-[#767474] text-white px-4 py-2 rounded-md mr-2"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-[#8c8de0] hover:bg-[#6b6dce] text-white px-4 py-2 rounded-md"
                >
                  {editIndex !== null ? 'Save Changes' : 'Add'}
                </button>
              </div>
            </form>
                   </div>
           
          </div>
        </div>
      )}
      
  </div>
  )
}

export default AdminSettings