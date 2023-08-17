import React from 'react'
import { Container } from 'react-bootstrap'
import storeLogo from '../../assets/images/store.png'
// icons
import { AiFillStar , AiOutlineStar , AiOutlineLink } from "react-icons/ai";
import { MdLocalGroceryStore , MdEmail , MdLocationOn } from "react-icons/md";
import { BsPhoneFill , BsFillFolderFill } from "react-icons/bs";



export const Chat = () => {
  return (
    <Container className='pt-5 ' >
    <div className='border-color mb-4 p-3  row'>
     <p className='primary-text-color fs-3'> الرسائل</p>
      <div className='col'>
    message
      </div>
      <div className='col '>
          
        <div className ="border rounded text-center mb-3 p-4">
          <img  src={storeLogo} width = '100px' alt="store logo"/>
          <h4>محمصة الرياض</h4>
          <div>
          <AiFillStar color='gold'/>
          <AiFillStar color='gold'/>
          <AiFillStar color='gold'/>
          {/* <AiOutlineStar/>
          <AiOutlineStar/> */}
          </div>

        </div>

        {/* المتجر */}

        <div className='border rounded text-center mb-3 p-2'>
            <h4>المتجر   
            <MdLocalGroceryStore/>
            </h4>
         </div>

         {/* التواصل */}

        <div className='border rounded p-5 mb-3'>

             <div className='px-4  '>
               <BsPhoneFill className='icon-header title'/>
                  <p className='d-inline px-3 fs-5 nav-link title'>0554378383</p>
              </div>

              <div className='px-4  '>
               <MdEmail className='icon-header title '/>
                  <p className='d-inline px-3 fs-5 title'>me@gmail.com</p>
              </div>

              <div className='px-4  '>
               <AiOutlineLink className='icon-header title'/>
                  <p className='d-inline px-3 fs-5 title'>http://RDdcoofee.com</p>
              </div>

              <div className='px-4  '>
               <BsFillFolderFill className='icon-header title'/>
                  <p className='d-inline px-3 fs-5 title'> RDdcoofee.xlsx</p>
              </div>

              <div className='px-4  '>
               <MdLocationOn className='icon-header title'/>
                  <p className='d-inline px-3 fs-5 title'> saudi arabia </p>
              </div>
              <div>
                
              </div>




               


        </div>
        </div>

   
       
     

     </div>
</Container>
  )
}


export default Chat