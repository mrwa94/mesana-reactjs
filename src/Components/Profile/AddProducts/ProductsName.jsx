import React from 'react'
import { Card, Form } from 'react-bootstrap'


const ProductsName = () => {
    return (
        <div className='container login-form rounded  p-4 mb-5  '>

             <p className='nav-link'>بيانات المنتج </p>
            <Form className='p-2 mb-3'>
                {/* product name  */}
                <Form.Group>
                    <Form.Label  >الاسم   </Form.Label>

                    <Form.Control type='text'
                        placeholder='اسم المنتج'
                        className='input'
                        value={''}
                        id=''>
                    </Form.Control>

                </Form.Group>

                {/* product type  */}
                <Form.Group className='mt-3'>
                    <Form.Label  >نوع المنتج    </Form.Label>

                    <Form.Control type='text'
                        className='input'
                        placeholder='نوع المنتج'
                        value={''}
                        id=''>
                    </Form.Control>
                </Form.Group>

                {/* product more  details  */}
                <p className='mt-5 nav-link'>اضف تفاصيل المنتج </p>

                <Form.Group>
                    <Form.Label  > الوصف </Form.Label>

                    <Form.Control type='text'
                        as="textarea"
                        className='input'
                        placeholder='تفاصيل اكثر '
                        value={''}
                        style={{ height: '150px' }}
                        id=''>
                    </Form.Control>
                </Form.Group>


                {/* product     */}
                    <Form.Group className='mt-5'>
                    <Form.Label  > الخلاصة </Form.Label>
                    <Form.Control type='text'
                        as="textarea"
                        className='input'
                        placeholder=' الخلاصة '
                        value={''}
                        style={{ height: '150px' }}
                        id=''>
                    </Form.Control>
                </Form.Group>
            </Form>
        </div>








    )
}

export default ProductsName