import React, { useState }  from 'react';
import "./Company.css";
import ActivateServiceModal from './ActivateServiceModal';
import EndServiceModal from './EndServiceModal';
import RenewalModal from './RenewalModal';
import "./ServiceModal.css";
import Modal from 'react-bootstrap/Modal';


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
          <button onClick={() => setShowActivateServiceModal(true)}>Activate New Service</button>
          <button onClick={() => setShowEndServiceModal(true)}>End the Service</button>
          <button onClick={() => setShowRenewalModal(true)}>Renewal</button>
        </div>
      </div>
    </div>
      <ActivateServiceModal show={showActivateServiceModal} onHide={() => setShowActivateServiceModal(false)} />
      <EndServiceModal show={showEndServiceModal} onHide={() => setShowEndServiceModal(false)} />
      <RenewalModal show={showRenewalModal} onHide={() => setShowRenewalModal(false)} />
   
    </>
  )
}

export default CompanySubscriptions;