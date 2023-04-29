import React from 'react'
import { Container , Form } from 'react-bootstrap'

export const Company = () => {
  return (
   
    <Form className='pt-5  '>
    <Form.Group className="mb-3  " controlId="">
       <Form.Label>  صاحب المتجر</Form.Label>
         <Form.Control type="text" placeholder="اسم الشركة" />
          </Form.Group>

   <Form.Group className="mb-3 " controlId="">
     <Form.Label> رمز التسجيل للمتجر </Form.Label>
       <Form.Control type="password" placeholder="********" />
       </Form.Group>


       <Form.Group className="mb-3" controlId="">
     <Form.Label>الرقم الضريبي للمتجر</Form.Label>
       <Form.Control type="password" placeholder="********" />
       </Form.Group>

       <Form.Group className="mb-3" controlId="">
     <Form.Label>  تاريخ إنتهاء السجل  </Form.Label>
       <Form.Control type="date"  />
       </Form.Group>

       <Form.Group className="mb-3" controlId="">
     <Form.Label>  نوع المنتجات</Form.Label>
       <select  class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option  selected>نوع المنتجات </option>
                  <option value="1">نوع المنتجات </option>
                  <option value="2">نوع المنتجات </option>
                  <option value="3">نوع المنتجات </option>
                </select>
       </Form.Group>

       <Form.Group className="mb-3 " controlId="password">
       <Form.Check className ='d-inline'  type="radio" aria-label="radio 1" />
         <h5 className ='d-inline'> الموافقة على الشروط و الأحكام</h5>
      </Form.Group>
      
     </Form>
  )
}
