import React from 'react'
import { Chat } from './Chat'

const Message = (props) => {
  const chat = () => {
    <Chat/>
  }
  return (
    <button className='row p-3 btn-message' onClick={chat()}>
        <img className='col' src={props.image}/>
         <div className='col'>
           <p> {props.title}</p>
                </div>
                <div className='col '>
                <p className='message'>{props.message}</p>
                </div>
 </button>
  )
}

export default Message