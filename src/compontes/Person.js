import React from 'react'
import {Button, Form} from 'react-bootstrap'


export const Person = () => {
  return (
     <div>
      <div className='px-2 mb-5'>
        <Button className='primary-btn mx-2 '>شركة توريد</Button>
        <Button className='primary-btn'> صاحب المتجر</Button>
     </div> 

     <Form className=''>
         <Form.Group className="mb-3" controlId="phoneNumber">
       <Form.Label> الإسم كامل</Form.Label>
         <Form.Control type="text" placeholder=" الاسم كامل " className='input' />
          </Form.Group>

          <Form.Group className="mb-3" controlId="phoneNumber">
       <Form.Label>  رقم الهاتف  </Form.Label>
         <Form.Control type="text" placeholder="+966 " className='input' />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phoneNumber">
       <Form.Label>  كلمة المرور </Form.Label>
         <Form.Control type="text" placeholder=" ******"  className='input'/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="phoneNumber">
       <Form.Label>   تأكيد كلمة المرور </Form.Label>
         <Form.Control type="text" placeholder=" *****" />
          </Form.Group>
          


    </Form>
     </div>
    
  )
}
