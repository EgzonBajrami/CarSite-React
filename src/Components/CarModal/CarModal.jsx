import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './CarModal.css'
import {useState} from 'react';
import {Form} from 'react-bootstrap';
import {api,endpoints} from '../../Lib/Api'

const CarModal = (props) =>{
  const [shopping, setShopping] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mailing, setMailing] = useState(true);
  const [message, setMessage] = useState('');
  const handleSubmit = async(e) =>{
    e.preventDefault();
    const data = {
        firstName,
        lastName,
        email
    }
    const config = {
        data:data
    }
    const result = await api.call(endpoints.setAppointment,config);
    console.log(result);
    if(result.success){
        setMailing(false);
        setMessage('We thank you for choosing our services. We will mail you shortly about an appointment.')
    }else{
        setMailing(false);
        setMessage('Something went wrong, please type your info again.');
        setTimeout(()=>{
            setMailing(true);
        },3000);
    }
  }
  return (
    <>

 <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      
   <div className="modal-wrapper">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="modal-title">{props.data.title}</div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="center-modal">
        {shopping ? (<>
        <div className="products-data-image1">
            <img src={process.env.REACT_APP_API_URL + props.data.image[0]} alt="first-img" />
            </div>
            <div className="products-data-description">
                <p>{props.data.description}</p>
            </div>
            <div className="car-price">
                <p>Price: ${props.data.price}</p>
            </div>
            <div className="car-modal-btn">
            <button onClick={()=>setShopping(!shopping)}>Shop Car</button>
            </div>
            </> ):(<>
            {mailing ? (<>
            <div className="form-modal-container">
                <div className="form-modal-title">
                    <h2>Add more information about you, so we can contact you about an appointment to see the vehicle.</h2>
                </div>
                <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <input
                type="text"
                required
                className="form-control"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
                placeholder="Enter your first name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <input
                type="text"
                required
                className="form-control"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
                placeholder="Enter your last name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <input
                type="text"
                required
                className="form-control"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                placeholder="Enter your email:"
              />
            </Form.Group>
            <div className="car-modal-btn">
                <button type="submit">Submit</button>
            </div>
            </Form>
            </div>
            </>):(<>
                <div className="form-modal-container">
                <div className="form-modal-title">
                    <h2>{message}</h2>
                </div>
                </div>

            </>)}
                </>)}
        </div>
   
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
      </div>
    </Modal>
  
    
    </>
  );
}

export default CarModal;
