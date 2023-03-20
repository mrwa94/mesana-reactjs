import React from 'react'
import '../styles/App.css'
import { Container , Button , Form  , Tabs , Tab} from 'react-bootstrap'
import {Company}  from '../compontes/Company'
 import {Person} from '../compontes/Person'
import Check from '../compontes/Check'
import SucessCheck from '../compontes/SucessCheck'


function SignUp() {
  return (

  
//     // <Container>

//         /* <Container>
//            <Tabs  defaultActiveKey="login"
//                   id=""
//                   className="mb-3  " >

//              <Tab eventKey="person" 
//                    title="شركة التوريد ">
//                     <Person/>
                    
            
//              </Tab>
 
//              <Tab eventKey="sign-up" 
//                   title="صاحب المتجر">
//                     <Company/>
               
//              </Tab>
//            </Tabs>
//            </Container> */}

//         {/* <div className=''>
//          <Button variant="primary" className='mx-2'  type="submit">شركة توريد </Button>
//          <Button variant="primary" type="submit"> صاحب متجر </Button>
//          </div> */}
        
// {/* 
//        <div className='text-center '>
//         <Button variant="primary"
//          className='mx-2 primary-btn'
//            type="submit">
//               التالي
//               </Button>
        
//         </div>
//    </Container> */}

<Container className='mt-5 '>
<div className='login-form p-5 '>
    

  {/* <Person/>
  <Company/> */}

  <SucessCheck/>





          <div className='text-center  '>
          <Button variant="primary"
         className='mx-2 primary-btn mt-3'
           type="submit">
              التالي
              </Button>
        
        </div>



</div>
</Container>

  )
}

export default SignUp