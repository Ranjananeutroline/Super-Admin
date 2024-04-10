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
          <button onClick={() => setShowActivateServiceModal(true)}>Service Activation</button>
          <button onClick={() => setShowRenewalModal(true)}>Renewal</button>
          <button onClick={() => setShowEndServiceModal(true)}>Service End</button>
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