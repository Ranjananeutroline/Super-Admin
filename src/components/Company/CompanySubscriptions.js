import React, { useState }  from 'react';
import "./Company.css";
import ActivateServiceModal from './ActivateServiceModal';
import EndServiceModal from './EndServiceModal';
import RenewalModal from './RenewalModal';
import ReactivateServiceModal from './ReactivateServiceModal';
import "./ServiceModal.css";



const CompanySubscriptions = () => {
  const [showActivateServiceModal, setShowActivateServiceModal] = useState(false);
  const [showEndServiceModal, setShowEndServiceModal] = useState(false);
  const [showRenewalModal, setShowRenewalModal] = useState(false);
  const [showReactivateServiceModal, setShowReactivateServiceModal] = useState(false);

  const [showDivContent, setShowDivContent] = useState(false); // State variable for showing/hiding div content
  const [serviceEnded, setServiceEnded] = useState(false);

  const toggleDivContent = () => {
    setShowDivContent(!showDivContent); // Toggle the state of showDivContent
  };

  const handleCancel = () => {
    setShowDivContent(false); // Hide the div content
  };

  const handleServiceEnd = () => {
    setShowDivContent(false); // Hide the div content after service ends
    setServiceEnded(true);
  };

  
  
  return (
    <>
    <div>
        <h3 className='subs-title'>Account Service</h3>
    </div>

    <div className='second-subs'>
    <div className='upper-subs'>
          {serviceEnded ? (
            <>
              <p>Your service has ended. Please reactivate your service.</p>
              <button onClick={() => setShowReactivateServiceModal(true)}>Reactivate Service</button>
              {/* <button onClick={toggleDivContent}>Reactivate Service</button> to show div content */}
            </>
          ) : (
            <>
              <p>Please proceed with the following given services at your earliest convenience.</p>
              {!showDivContent && (
                <button onClick={toggleDivContent} className="review-button">
                  Review Account
                </button>
            )}
            </>
          )}
        </div>
      

      {showDivContent && (
        <div>
        <div className='serv-btn-div'>
          <div className='serv-btn-div2'>
          <h5>Activate New Service</h5>
          <p>Welcome to our service activation process! Please choose a date for your new service to start.</p>
          <button onClick={() => setShowActivateServiceModal(true)}>Service Activation</button>
          </div>
          
          <div className='serv-btn-div2'>
          <h5> Renewal</h5>
          <p>Renewal time is here! Ensure uninterrupted service by renewing now.</p>
          <button onClick={() => setShowRenewalModal(true)}>Renewal</button>
          </div>

          <div className='serv-btn-div2'>
          <h5> End the Service</h5>
          <p>It's time to bid farewell to our service. We appreciate your support. Automatic termination is initiated, but if you prefer a manual option, it's available too.</p>
          <button onClick={() => setShowEndServiceModal(true)}>Service End</button>
          </div>

        </div>
          {/* <div className='subs-upper-cancel'>
            <button onClick={handleCancel}>Cancel</button> 
          </div> */}
        </div>
      )}
    </div>
      <ActivateServiceModal show={showActivateServiceModal} onHide={() => setShowActivateServiceModal(false)} />
      <RenewalModal show={showRenewalModal} onHide={() => setShowRenewalModal(false)} />
      <EndServiceModal show={showEndServiceModal} onHide={() => setShowEndServiceModal(false)} onServiceEnd={handleServiceEnd} />
      <ReactivateServiceModal show={showReactivateServiceModal} onHide={() => setShowReactivateServiceModal(false)} />
    </>
  )
}

export default CompanySubscriptions;