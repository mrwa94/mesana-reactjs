import React from 'react'



const ContactCard = (props) => {
  return (
    
      <div className='card m-4 p-5 h-75  w-50  text-center me-0 ms-0 ' >
        <div className='row  '>
          <div className='col'>
          <img src= {props.image} class="card-img-top" alt="image"/> </div>
         <div className='col'> <h5 class="card-title">{props.title}</h5>
           <p class="card-text">{props.data}</p>
          </div>
   
        </div>
      </div>

 


  
  
  )
}

export default ContactCard