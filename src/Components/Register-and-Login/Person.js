import React from 'react'
import {Button, Form} from 'react-bootstrap'


export const Person = () => {
  return (
     <div>
    

     <Form className='   container d-block' >
      <div className='row'>

      <Form.Group className="mb-3 col-6 " controlId="">
       <Form.Label> الإسم كامل</Form.Label>
         <Form.Control type="text" placeholder=" الاسم كامل " className='input p-2' />
          </Form.Group>


          <Form.Group className="mb-3  col-6" controlId="">
       <Form.Label>  رقم الهاتف  </Form.Label>
         <Form.Control type="text" placeholder="+966 " className='input p-2' />
          </Form.Group>
      </div>

      <div className='row'>
      <Form.Group className="mb-3 col-6" controlId="">
       <Form.Label>  كلمة المرور </Form.Label>
         <Form.Control type="text" placeholder=" ******"  className='input p-2'/>
          </Form.Group>

          <Form.Group className="mb-3 col-6" controlId="">
       <Form.Label>    تأكيد كلمة المرور  </Form.Label>
         <Form.Control type="text" placeholder=" *****"  className='input p-2'/>
          </Form.Group>

      </div>
       

          
        

         

    </Form>
     </div>
    
  )
}
