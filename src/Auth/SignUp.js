import React, { useState } from 'react'
import '../styles/App.css'
import { Container , Button , Form  , Tabs , Tab} from 'react-bootstrap'
import {Company}  from '../compontes/Company'
 import {Person} from '../compontes/Person'
import Check from '../compontes/Check'
import SucessCheck from '../compontes/SucessCheck'


function SignUp() {
  const [page , setPage] = useState(0);
  //const FormTitle = ['personalInfo','companyInfo','checkInfo','successCheck'];

  const pageDisplay = ()  => {
    if (page === 0){
      return (<Person/>);
    }

    else  {
      return(<Company/>);
    }

  }


  return (
    

    <Container className='mt-5 '>
     


   {/* form */}
   <div className=' p-5 '>
     
     {/* prograss bar */}

     <div style={{width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%"}} >
      
     </div>
       
     

       <div className='body-form'>
         {pageDisplay()}
       </div>
     
       
  




          <div className='text-center  '>
          <Button variant="primary"
         className='mx-2 primary-btn mt-3'
           type="submit"
           onClick ={ () => {
            setPage((currPage) => currPage + 1);
           }}
           >
            
              التالي
              </Button>
        
        </div>



</div>
</Container>

  )
}

export default SignUp