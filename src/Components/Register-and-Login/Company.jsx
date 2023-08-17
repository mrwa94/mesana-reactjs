import React from 'react'
import {Button, Form, FormGroup} from 'react-bootstrap'


export const Person = () => {
  return (
     <div>
     

     <Form className=''>
      <div className='row'>

      <Form.Group className="mb-3 col-md-6" controlId="">
       <Form.Label> الإسم التجاري للمتجر</Form.Label>
         <Form.Control type="text" placeholder=" الاسم كامل " className='input p-2' />
          </Form.Group>

          <Form.Group className="mb-3 col-md-6" controlId="">
       <Form.Label>  رمز التسجيل للمتجر</Form.Label>
         <Form.Control type="text" placeholder="+966 " className='input p-2' />
          </Form.Group>

      </div>

      <div className='row'>

      <Form.Group className="mb-3 col-md-6" controlId="">
       <Form.Label>   الرقم الضريبي للمتجر </Form.Label>
         <Form.Control type="text" placeholder="Aa1122"  className='input p-2'/>
          </Form.Group>

          <Form.Group className="mb-3 col-md-6" controlId="">
           <Form.Label>   تاريخ انتهاء السجل  </Form.Label>
           <Form.Control type="date"  className='input p-2'/>
            </Form.Group>
  
      </div>

      <div className='row'>
        <FormGroup className='col-md-4'>
         <Form.Label> نوع المنتجات  </Form.Label>
           <Form.Select aria-label="" className=''>

      <option value="1">نوع المنتج</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
 </FormGroup>

 <div className='row '> 
 <FormGroup className='col-md-6 pt-3'>
   <Form.Check aria-label="option 1" className='p-1  d-inline' />
   <Form.Label>  الموافقة على الشروط و الأحكام  </Form.Label>
 </FormGroup>
 </div>
    </div>
      
      

        
          

          

          
          


    </Form>
     </div>
    
  )
}
export default Person