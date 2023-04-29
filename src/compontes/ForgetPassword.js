import React from 'react'
import { Form } from 'react-bootstrap'
const ForgetPassword = () => {
  return (



    <>
   
   
   <div className='login-form pt-5 pb-5   '>

    <h4 className='text-center pb-5 primary-btn'>نسيان كلمة المرور </h4>
        
        <form className='mb-4 pb-5 pt-5 mx-5  '>
      <Form.Group  controlId="phoneNumber">
      <Form.Label className='mx-5'>رقم الهاتف</Form.Label>
      <Form.Control  type="text" placeholder="+966" className='input mx-5  ' />
      
      </Form.Group>

      </form>


       <div className='text-center pt-3'>
       <a href="#" className='forgetPassword '>إعادة الارسال</a>
       </div>
      

       <div class="text-center pt-3">
            <button className="btn  sec-btn mx-2 ">عن طريق رسالة نصية</button>
            <button className='btn sec-btn'>الدعم الفني</button>
          </div>
        
          </div>
         
  </>


        


      

  )
}

export default ForgetPassword