import React, { useState } from 'react';
import "./ServiceModal.css";
import Modal from 'react-bootstrap/Modal'; 
import { RxCross2 } from "react-icons/rx";

function EndServiceModal({ show, onHide }) {
  return (
    <div>
         <Modal show={show} onHide={onHide}>
         <div className="custom-modal-header">
                <h5 className="modal-title">End the Service</h5>
                <button type="button" className="custom-close-button" onClick={onHide}>
                <RxCross2 />
                </button>
            </div>
            <Modal.Body>
            <p>Ending</p>
            </Modal.Body>
        </Modal>
      
    </div>
  );
}

export default EndServiceModal;