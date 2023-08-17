import React from 'react'
import { Link } from 'react-router-dom'

//usestate 
import { useState } from 'react';


//icons 
import {  BsPlusCircleFill } from "react-icons/bs";
import { Form, Modal, ModalBody, ModalHeader } from 'react-bootstrap';


const AddCards = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <div className='container '>
      <div className='row'>
      <h5 className='col'>البطاقات </h5>
      {/* Add new card .. */}
       <Link className='col-md-4 sec-btn rounded'
             onClick={handleShow} >اضافة بطاقة 
              <BsPlusCircleFill className='mx-2 mb-1'/>
       </Link>

       <Modal show = {show} onHide={handleClose}>
        <ModalHeader className='gray-color'>
          أضافة بطاقة جديدة
        </ModalHeader>
        <ModalBody>
          <Form className='m-3 p-2'>
            <input className='mx-3' type='text' placeholder='رقم البطاقة '></input>
            <input type='text' placeholder=' الشهر / السنة   '></input>
            <input className='mx-3 mt-3' type='text' placeholder='  CVV    '></input>

          </Form>

      
        </ModalBody>
       </Modal>


     
      <div>
      </div>
       



      </div>
    </div>
  )
}

export default AddCards