import React from 'react'



const ContactCard = (props) => {
  return (
       <>
   
      <div class="card">
    <img src= {props.image} class="card-img-top" alt="image"/>
    <div class="card-body">
      <h5 class="card-title">{props.title}</h5>
      <p class="card-text">{props.data}</p>
    </div>
  </div>

 

   </>
  
  
  )
}

export default ContactCard