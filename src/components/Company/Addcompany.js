import { useState } from 'react'
import "./Company.css"
import { Modal, Button, Form, Alert, FloatingLabel } from 'react-bootstrap';
import "./companyForm.css"

const Addcompany = () => {

  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    createdBy: '', // Added "createdBy" field
    createdDate: '', // Added "createdDate" field
    // phoneNumber: '',
  });
  const [validationError, setValidationError] = useState('');

  const handleClose = () => {
    setShow(false);
    setValidationError('');
  };
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields
    if (
      !formData.companyName ||
      !formData.email ||
      !formData.createdBy || // Validate "createdBy"
      !formData.createdDate // Validate "createdDate"
    ) {
      setValidationError('Please fill out all fields.');
      return;
    }

    // Add additional validation logic if needed

    // If validation passes, you can submit the form
    console.log('Form submitted with data:', formData);

    // Reset form and close modal
    setFormData({
      companyName: '',
      email: '',
      createdBy: '',
      createdDate: '',
      // phoneNumber: '',
    });
    handleClose();
  };


  return (
    <>
    <div className='company-main'>
        <div className='company-inner'>
        <h1 className='company-title pb-3'>Company</h1>
        <button
            className="shadow-md add-company-btn" onClick={handleShow}
          >
            + Company
          </button>
        </div>
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className='add-company-modal'
        dialogClassName="modal-90w"
      >
        <Modal.Header className='add-comp-header'>
          <Modal.Title style={{color:"blue"}}>Add Company</Modal.Title>
          <Button className='close-button' onClick={handleClose}>
            <span aria-hidden="true">&times;</span>
          </Button>
        </Modal.Header>
        <Modal.Body>
        {validationError && <Alert variant="danger">{validationError}</Alert>}

          <Form onSubmit={handleSubmit}>
            <FloatingLabel controlId="companyName" label="Company Name" className='mb-2'>
              <Form.Control
                type="text"
                placeholder="Enter company name"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
            </FloatingLabel>

            <FloatingLabel controlId="email" label="Email" className='mb-2'>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </FloatingLabel>

            {/* <FloatingLabel controlId="phoneNumber" label="Phone Number" className='mb-2'>
              <Form.Control
                type="tel"
                placeholder="Enter phone number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </FloatingLabel> */}
             <FloatingLabel controlId="createdBy" label="Created By" className='mb-2'>
              <Form.Control
                type="text"
                placeholder="Enter creator's name"
                name="createdBy"
                value={formData.createdBy}
                onChange={handleChange}
              />
            </FloatingLabel>
            <FloatingLabel controlId="createdDate" label="Created Date" className='mb-2'>
              <Form.Control
                type="date"
                placeholder="Enter creation date"
                name="createdDate"
                value={formData.createdDate}
                onChange={handleChange}
              />
            </FloatingLabel>
          <div style={{justifyContent:"center", textAlign:"center", marginTop:"1.5rem"}}>
          <button type="submit" className='add-comp-submit'>
              Submit
            </button>
          </div>
            
          </Form>
        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default Addcompany