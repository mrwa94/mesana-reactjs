import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const PublicDetails = () => {
  return (
    <div className=' w-75 row '>
             <div className=' col'>
             <Form.Group className=''>
                   <Form.Label  >  المنتج  </Form.Label>
                   <Form.Control type='text'
                       className='input w-100'
                       placeholder=' price '
                       value={''}
                       id=''>
                   </Form.Control>
               </Form.Group>
             </div>
             <div className='col'>
             <Form.Group className=''>
                   <Form.Label  > سعر المنتج  </Form.Label>
                   <Form.Control type='text'
                       className='input w-100'
                       placeholder=' price '
                       value={''}
                       id=''>
                   </Form.Control>
              </Form.Group>
           </div>


           <div className='col pt-3'> <Link className='text-decoration-underline  skyBlue' to={''}> Schedule </Link> </div>

        
    </div>
  )
}
