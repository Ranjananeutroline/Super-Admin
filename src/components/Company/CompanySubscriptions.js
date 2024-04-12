import React, { useState }  from 'react';
import "./Company.css";
import ActivateServiceModal from './ActivateServiceModal';
import EndServiceModal from './EndServiceModal';
import RenewalModal from './RenewalModal';
import "./ServiceModal.css";



const CompanySubscriptions = () => {
  const [showActivateServiceModal, setShowActivateServiceModal] = useState(false);
  const [showEndServiceModal, setShowEndServiceModal] = useState(false);
  const [showRenewalModal, setShowRenewalModal] = useState(false);
  
  return (
    <>
    <div>
        <h3 className='subs-title'>Account Service</h3>
        
    </div>
    <div className='second-subs'>
      <p> Please proceed with the following given Services at your earliest convenience.</p>
      <div className='serv-btn-div'>
        <div className='serv-btn-div'>
          <div className='serv-btn-div2'>
          <h5>Activate New Service</h5>
          <p>Welcome to our service activation process! Please choose a date for your new service to commence. We're excited to have you onboard!</p>
          <button onClick={() => setShowActivateServiceModal(true)}>Service Activation</button>
          </div>
          
          <div className='serv-btn-div2'>
          <h5> Renewal</h5>
          <p>Renewal time is here! Ensure uninterrupted service by renewing now. Your continued support means the world to us. Let's keep the journey going together!</p>
          <button onClick={() => setShowRenewalModal(true)}>Renewal</button>
          </div>

          <div className='serv-btn-div2'>
          <h5> End the Service</h5>
          <p>It's time to bid farewell to our service. We appreciate your support. Automatic termination is initiated, but if you prefer a manual option, it's available too. Thank you for being a part of our journey!</p>
          <button onClick={() => setShowEndServiceModal(true)}>Service End</button>
          </div>

        </div>
      </div>
    </div>
      <ActivateServiceModal show={showActivateServiceModal} onHide={() => setShowActivateServiceModal(false)} />
      <RenewalModal show={showRenewalModal} onHide={() => setShowRenewalModal(false)} />
      <EndServiceModal show={showEndServiceModal} onHide={() => setShowEndServiceModal(false)} />
   
    </>
  )
}

export default CompanySubscriptions;