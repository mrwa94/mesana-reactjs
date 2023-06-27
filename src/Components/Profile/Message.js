import React from 'react'
import { Chat } from './Chat'
import { Link } from 'react-router-dom'

const Message = (props) => {
  const chat = () => {
    <Chat/>
  }
  return (
    <Link className='row p-3 btn-message' to = {'/chat'}>
        <img className='col' src={props.image}/>
         <div className='col'>
           <p> {props.title}</p>
                </div>
                <div className='col '>
                <p className='message'>{props.message}</p>
                </div>
 </Link>
  )
}

export default Message