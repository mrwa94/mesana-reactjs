import React from 'react'
import { Button } from 'react-bootstrap';
import { AiFillCheckCircle } from "react-icons/ai";


function PaymentConfirmation() {
  return (
    <div className=' w-75 text-center m-5 container '>

<div className='text-center login-form pb-4 border-color base-color  w-50  ms-0'>
    
     <AiFillCheckCircle className='agree-icon pb-3 w-25 pt-5'/>
     <h5 className='primary-text-color fs-3'> شكراً لإتمام الطلب من موقعنا  </h5>
         <div>
         <span className=' primary-text-color fs-5 '>رقم الطلب :</span>
         <span id='' className='primary-text-color fs-5 '>  584784 </span>
         </div>

         <div className='m-5'>
          <p>يمكنك متابعة الطلب من قائمة الطلبات</p>
          <Button className='primary-btn '  > 
          قــائمة الـطلـبات
          
          </Button>
         </div>

     </div>
    </div>
  )
}

export default PaymentConfirmation