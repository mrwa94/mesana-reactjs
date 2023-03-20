import React from 'react'
import { Form , Button, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return (

    <Container className='mt-5 '>
       <Form className='login-form p-5 '>

    <Form.Group className="mb-4  " controlId="phoneNumber">
      <Form.Label className='mx-2'>رقم الهاتف</Form.Label>
      <Form.Control type="text" placeholder="+966" className='input' />
      <Form.Text className="text-muted">
        
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="password">
      <Form.Label className='mx-2'>كلمة المرور </Form.Label>
      <Form.Control type="password" placeholder="********" className='input' />
    </Form.Group>
    <Form.Group className="mb- mx-3" controlId="formBasicCheckbox">
    <a href='' className='forgetPassword'> هل نسيت كلمة المرور ؟ </a>
    </Form.Group>

    <div className='text-center '>
    <Button variant="primary" className='mx-2 primary-btn'  type="submit">
      تسجيل الدخول
    </Button>

    <Button variant="primary" type="submit" className='primary-btn'>
         الدعم الفني 
    </Button>
    </div>

  </Form>
    </Container>
  )
}

export default Login