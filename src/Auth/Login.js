import React from 'react'
import { Form , Button, Container } from 'react-bootstrap'

function Login() {
  return (

    <Container>
          <Form className=''>
    <Form.Group className="mb-3" controlId="phoneNumber">
      <Form.Label>رقم الهاتف</Form.Label>
      <Form.Control type="text" placeholder="+966" />
      <Form.Text className="text-muted">
        
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="password">
      <Form.Label>كلمة المرور </Form.Label>
      <Form.Control type="password" placeholder="********" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <a href=''> هل نسيت كلمة المرور ؟ </a>
    </Form.Group>

    <div className='text-center '>
    <Button variant="primary" className='mx-2'  type="submit">
      تسجيل الدخول
    </Button>

    <Button variant="primary" type="submit">
         الدعم الفني 
    </Button>
    </div>

  </Form>
    </Container>
  )
}

export default Login