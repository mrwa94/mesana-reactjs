import React from 'react'
import HeaderLogin from '../compontes/HeaderLogin'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Login from '../Auth/Login';
import SignUp from '../Auth/SignUp';
import { Container } from 'react-bootstrap';

function Rejester() {
  return (
    
    <div>
           <HeaderLogin/>
          <Container className='login-form tabs '>
              <Tabs  defaultActiveKey="login "
                     id=""
                     className="mb-3 " >
                      <Tab eventKey="login " 
                         title="تسجيل الدخول"
                         className='tab' >
                       <Login/>
                     </Tab>
 
                     <Tab eventKey="sign-up" 
                          title="التسجيل">
                         <SignUp/>
                     </Tab>
               </Tabs>
          </Container>
   </div>
  )
}

export default Rejester