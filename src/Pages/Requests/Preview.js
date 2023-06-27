import React from 'react'
import Address from '../../Components/Cart/Address'
import DeliveryDate from '../../Components/Cart/DeliveryDate'
import { CartReview } from '../../Components/Cart/CartReview'
import PayWays from '../../Components/Cart/PayWays'
import OrderStatue from '../../Components/Cart/OrderStatue'

const Preview = () => {
  return (
    <div className='container m-5'>
    <div className=''>
        <h5 className='d-inline '>  رقم الطلب :</h5>
        <h5 className='d-inline'>544556</h5>
    </div>

    <div className='row'>
        <div className='col'>
            <Address/>
            <DeliveryDate/>
            <PayWays/>
            <CartReview/>


        </div>
        <div className='col '>
              <OrderStatue/> 

        </div>
    </div>
    
    
    

    
    
    
    
    </div>
  )
}

export default Preview