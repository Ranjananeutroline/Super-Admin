import React, { useState } from 'react'
import "./Notify.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Notifications = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  
  
  const handleSendNotification = () => {
    setShowOptions(true);
  };

  const handleCheckboxChange = (option) => {
    const selectedIndex = selectedOptions.indexOf(option);
    if (selectedIndex === -1) {
      setSelectedOptions([...selectedOptions, option]);
    } else {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    }
  };

  const handleFinalSendNotification = () => {
    
    if (selectedOptions.length === 0) {
      alert("Please select at least one option before notifying.");
      return;
    }
    
    console.log("Sending notifications with selected options:", selectedOptions);
    toast.success("Notification sent successfully!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    
    setSelectedOptions([]);
  };
  
  return (
    <>
    <div className='notifi-main-div'>
        <h3>Notifications</h3>
        <p>To get started and unlock all the benefits of your account, please follow these simple steps.</p>
    </div>
    <div>
    {!showOptions && (
            <div className='notifi-div'>
              <button className='notifi-div-btn' onClick={handleSendNotification}>Send Notification</button>
            </div>
          )}
        {showOptions && (
            <>
              <div className='notifi-lower-div'>
                <div>
                  <label style={{display:'flex'}} className='noti-label'>
                    <input
                      type="checkbox"
                      value="Option 1"
                      checked={selectedOptions.includes("Option 1")}
                      onChange={() => handleCheckboxChange("Option 1")}
                      className='input-notifi'
                    />
                    Activate Service
                  </label>
                </div>
                
                <div>
                  <label style={{display:'flex'}} className='noti-label'>
                    <input
                      type="checkbox"
                      value="Option 2"
                      checked={selectedOptions.includes("Option 2")}
                      onChange={() => handleCheckboxChange("Option 2")}
                      className='input-notifi'
                    />
                    Renewal
                  </label>
                </div>

                <div>
                  <label style={{display:'flex'}} className='noti-label'>
                    <input
                      type="checkbox"
                      value="Option 3"
                      checked={selectedOptions.includes("Option 3")}
                      onChange={() => handleCheckboxChange("Option 3")}
                      className='input-notifi'
                    />
                    Expiration
                  </label>
                </div>
                
              </div>
              
              <div className='notify-div'>
                <button className='notify-div-btn' onClick={handleFinalSendNotification}>Notify</button>
              </div>
            </>
          )}

    </div>
    </>
  )
}

export default Notifications