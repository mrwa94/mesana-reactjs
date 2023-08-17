import React from 'react'
import { Form } from 'react-bootstrap'
import Select from 'react-select'

const Inventory = () => {
  return (
    <div className=' w-75 row'>

<Form.Group className=''>
                   <Form.Label  >  Sku  </Form.Label>
                   <Form.Control type='text'
                       className='input w-50'
                       placeholder=' Sku '
                       value={''}
                       id=''>
                   </Form.Control>
               </Form.Group>


               <div>
                <p className='nav-link mt-5 text-decoration-underline'> Manage stock</p>
                <p className='d-inline '>Enable stock management at product level.</p>
                <input className='m-2 ' type="checkbox" value={''} onChange={''}  />
               </div>

               <div>
               <p className='nav-link mt-5 text-decoration-underline'> Regular</p>
               <Select  className = 'input w-50' options={''}></Select>
               </div>

               <div className='mt-5'>
                <p className='nav-link text-decoration-underline'  > Sold individually</p>
                <p className='d-inline '>Enable this to only allow one of this product to bought in a single order.</p>
                <input className='m-2 '  type='checkbox' value={''} onChange={''}/>

               </div>

        
    </div>
  )
}

export default Inventory