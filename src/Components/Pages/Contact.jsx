import React from 'react'
import { Form } from 'react-bootstrap'
import './Contact.css';
function Contact() {
  return (
    <div className='Contact'>


<div className="form-group">
    <Form>
    <Form.Group className="form-control" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Enter Full Name</Form.Label>
        <Form.Control />
      </Form.Group>
      <Form.Group className="form-control" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="form-control" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message here.</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
      <button className='Button'>Submit</button>
      
    </Form>
    </div>

    </div>
  )
}

export default Contact

