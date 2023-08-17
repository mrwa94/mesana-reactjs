import React from 'react'
import { Button } from 'react-bootstrap'
import Select from 'react-select'

const ProductProperties = () => {
  return (
    <div className='row'>
     <div className='col'>
     <p>0 Attributes (Expand / Close)</p>

     </div>
     <div className='col'>
        <p>Warranty type</p>
        <div className='row'>
            <Select className='col' options={''} placeholder = 'Select an option'></Select>
            <Button className='  col-sm-2  sec-btn'>Add</Button>
        </div>
     </div>

     <div className='text-center mt-5'>
        <Button className='sec-btn '>Save Attributes</Button>
     </div>



    </div>
  )
}

export default ProductProperties