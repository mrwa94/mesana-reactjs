import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductType = () => {
  return (
    <div className='container login-form rounded  p-4  '>
        <p className='nav-link'>حالة المنتج</p>
        

        {/* state */}
        <div className='row'>
            <div className='col  primary-text-color '>الحالة :</div>
            <div className='col'> <p className='gray ' id = ''>محفوظة </p></div>
            <div className='col'> <Link className='text-decoration-underline  skyBlue' to={''}> تغيير </Link> </div>
        </div>

        {/* publish  */}
        <div className='row'>
            <div className='col  primary-text-color '>نـشـر :</div>
            <div className='col'> <p className='gray ' id = ''>في الحال </p></div>
            <div className='col'> <Link className='text-decoration-underline  skyBlue' to={''}> تغيير </Link> </div>
        </div>

       <div className='text-center m-3'>
       <Button className='text-center primary-btn px-5' onClick={''}>حفظ المنتج </Button>
       </div>

    </div>
  )
}

export default ProductType