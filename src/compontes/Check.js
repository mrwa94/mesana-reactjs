import React from 'react'
import { Container, Form } from 'react-bootstrap'

const Check = () => {
  return (
    <div className=' '>
        <header className='text-center pb-5'>
        رسالة تحقق
        </header>




<div className='pb-5 '>
                <Form.Control type="text" className='boarder'></Form.Control> 
                <Form.Control type="text" className='boarder'></Form.Control> 
                <Form.Control type="text" className='boarder'></Form.Control> 
                <Form.Control type="text" className='boarder'></Form.Control>    
          </div>


          <div className='text-center pb-5'>
            <a href="#" className='forgetPassword'>إعادة الارسال</a>
          </div>
          
          <div class="text-center ">
            <button className="btn  sec-btn mx-2 ">عن طريق رسالة نصية</button>
            <button className='btn sec-btn'>الدعم الفني</button>
          </div>
        </div>
  
  )
}

export default Check