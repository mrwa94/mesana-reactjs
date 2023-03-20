import React from 'react'
import {Form} from 'react-bootstrap'

export const Person = () => {
  return (

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
  )
}
