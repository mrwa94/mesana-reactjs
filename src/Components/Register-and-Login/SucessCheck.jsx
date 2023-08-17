import React from 'react'
import { AiFillCheckCircle } from "react-icons/ai";
import HeaderLogin from './HeaderLogin';

const SucessCheck = () => {
  return (
    <div >
      
     <div className='text-center login-form pt-1  pb-5'>
     <h4 className='text-center  primary-btn'>انتظر للتحقق من معلوماتك</h4>
     <AiFillCheckCircle className='agree-icon pb-3'/>
     <h4>تمت العملية بنجاح</h4>
     </div>
    </div>
  )
}

export default SucessCheck