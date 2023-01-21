import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
          <h1>Customer Informations</h1>
          <Form>
            <Form.Group className="box-1" controlId="firstName">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control type="firstName" placeholder="First Name"/>
            </Form.Group>
            <Form.Group className="box-1" controlId="lastName">
              <Form.Control type="lastName" placeholder="last Name"/>
            </Form.Group>
            <Form.Group className="box-2" controlId="adress">
              <Form.Label>Adress</Form.Label>
              <Form.Control type="adress" placeholder="Street Adress"/>
            </Form.Group>
            <Form.Group className="box-1" controlId="adress">    
              <Form.Control type="adress" placeholder="City"/>
              <Form.Control type="adress" placeholder="Postal/Zip Code"/>
              <Form.Control type="adress" placeholder="Country"/>
            </Form.Group>
            <Form.Group className="box-1" controlId="contactNumber">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control type="contact" placeholder="(000)-00000000"/>
            </Form.Group>
          </Form>
          <Button type="submit">Submit</Button>
    </div>
  )
}

export default App
