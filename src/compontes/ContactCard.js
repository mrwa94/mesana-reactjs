import React from 'react'



const ContactCard = (props) => {
  return (
    
      <div className='card'>
        <div className='row  '>
          <div className=''>
          <img src= {props.image} class="card-img-top" alt="image"/>
          <h5 class="card-title">{props.title}</h5>
           <p class="card-text">{props.data}</p>
          </div>
   
        </div>
      </div>

 


  
  
  )
}

export default ContactCard