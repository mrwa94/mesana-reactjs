import React from 'react'
import { Container , Button , Form } from 'react-bootstrap'

function SignUp() {
  return (
    <Container>
        <div className=''>
         <Button variant="primary" className='mx-2'  type="submit">شركة توريد </Button>
         <Button variant="primary" type="submit"> صاحب متجر </Button>
         </div>
        

    <Form className=''>
      <Form.Group className="mb-3" controlId="phoneNumber">
         <Form.Label> الاسم كامل</Form.Label>
           <Form.Control type="text" placeholder="اسم الشركة" />
            </Form.Group>

     <Form.Group className="mb-3" controlId="password">
       <Form.Label>كلمة المرور </Form.Label>
         <Form.Control type="password" placeholder="********" />
         </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <a href=''> هل نسيت كلمة المرور ؟ </a>
       </Form.Group>

       <div className='text-center '>
        <Button variant="primary" className='mx-2'  type="submit"> تسجيل الدخول</Button>
        <Button variant="primary" type="submit">الدعم الفني </Button>
        </div>

       </Form>
   </Container>
  )
}

export default SignUp