import React from 'react'
import { Form } from 'react-bootstrap'

export const ExtraDetails = () => {
  return (
    <div className='container '>

        <Form className='w-75'>
        <Form.Group className='pt-4'>
                    <Form.Label   className='nav-link' >   Upsells</Form.Label>
                    <Form.Control type='text'
                        placeholder=' Upsells'
                        className='input'
                        value={''}
                        id=''>
                    </Form.Control>
                </Form.Group>


                <Form.Group className='pt-4'>
                    <Form.Label  className='nav-link'  >Cross sales   </Form.Label>
                    <Form.Control type='text'
                        placeholder=' Cross sales'
                        className='input'
                        value={''}
                        id=''>
                    </Form.Control>
                </Form.Group>

                <Form.Group className='pt-4'>
                    <Form.Label  className='nav-link' >related products   </Form.Label>
                    <Form.Control type='text'
                        placeholder=' related products'
                        className='input'
                        value={''}
                        id=''>
                    </Form.Control>
                </Form.Group>

                <Form.Group className='pt-4'>
                    <Form.Label  className='nav-link' >Purchase note  </Form.Label>
                    <Form.Control type='text'
                        placeholder=' related products'
                        className='input'
                        value={''}
                        as={'textarea'}
                        style={{height:100}}
                        id=''>
                    </Form.Control>
                </Form.Group>
        </Form>
         
         
         <div className='mt-3'>
         <input className='' placeholder=''  type='checkbox'/>
            <p className='d-inline mx-2  nav-link'>Enable reviews</p>
            
         </div>

    </div>
  )
}
