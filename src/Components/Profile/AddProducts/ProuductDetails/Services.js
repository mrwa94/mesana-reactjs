import React from 'react'
import Select from 'react-select'
import { Form } from 'react-bootstrap'


  export const Services = () => {
  return (
    <div>
    
    <div className='row'>
      <div className='col-md-4'>
        <p className='nav-link'>Warranty period</p>
        <Select options={''}  placeholder ='Select an option'></Select>
      </div>

      <div className='col-md-4'>
        <p className='nav-link'> Warranty type</p>
        <Select options={''}  placeholder ='Select an option'></Select>
      </div>
    </div>

    <div className='mt-5'>
      <p className='nav-link'> Warranty policy</p>
       
      <Form.Control type='text'
                        as="textarea"
                        className='input w-50'
                        placeholder='Autosize height based on content lines  '
                        value={''}
                        style={{ height: '150px' }}
                        id=''>
                    </Form.Control>
    </div>



    </div>
  )
}

