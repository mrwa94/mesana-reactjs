import React from 'react'
import { Container, Form } from 'react-bootstrap'
import HeaderLogin from './HeaderLogin'

const Check = () => {
  return (
    <>
           {/* <HeaderLogin/> */}
   
        <div className='login-form pt-1 pb-1   '>

        <h3 className='text-center  primary-btn'>   رسالة تحقق </h3>
     




        <div className='pt-5  mx-5 my-5  '>
                <Form.Control type="text" className='boarder'></Form.Control> 
                <Form.Control type="text" className='boarder'></Form.Control> 
                <Form.Control type="text" className='boarder'></Form.Control> 
                <Form.Control type="text" className='boarder'></Form.Control>    
              </div>


          <div className='text-center pb-5 '>
            <a href="#" className='forgetPassword'>إعادة الارسال</a>
          </div>
          
          <div class="text-center mb-5 ">
            <button className="btn  sec-btn mx-2 ">عن طريق رسالة نصية</button>
            <button className='btn sec-btn'>الدعم الفني</button>
          </div>
        </div>
        </>
  )
}

export default Check