import React from 'react'
import { Container } from 'react-bootstrap'
import Message from './Message'
import image from '../../assets/images/card.png'

function MessageDirect () {

  const message = [
    {
      image : {image} ,
      title : "Marwa Alsubhi" ,
      message: "3 ",
    },
    {
      image : {image} ,
      title : "Majd " ,
      message: "6 ",
    } ,
  ];
  return (
    <Container className='pt-5'>
        <div className='border-color mb-4 p-3 width-50'>
         <p className='primary-text-color fs-3'> الرسائل</p>

       
            {message.map((item) => (
              <Message image = {item.image} title = {item.title} message = {item.message}/>
             )) }
         

         </div>
    </Container>
  )
}

export default MessageDirect