import React, { useState } from 'react';
import "./ServiceModal.css";
import Modal from 'react-bootstrap/Modal'; 
import { RxCross2 } from "react-icons/rx";

function RenewalModal({ show, onHide }) {
  return (
    <div>
        <Modal show={show} onHide={onHide}>
        <div className="custom-modal-header">
                <h5 className="modal-title">Renew</h5>
                <button type="button" className="custom-close-button" onClick={onHide}>
                <RxCross2 />
                </button>
            </div>
        <Modal.Body>
        <p>Renew</p>
        </Modal.Body>
    </Modal>
 
</div>
  );
}

export default RenewalModal;