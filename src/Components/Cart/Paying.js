import React, { useState } from 'react'
import NewLocation, { Address } from './Address';
import PaymentConfirmation from './PaymentConfirmation';
import { Button, Form } from 'react-bootstrap';
import SelectLoction from './SelectLoction';
import { CartReview } from './CartReview';
import DeliveryDate from './DeliveryDate';
import PayWays from './PayWays';

function Paying() {


  return (
    <div className='row p-4'>
      <div className='col'>
        <div className='p-3 primary-text-color'>
         <DeliveryDate/>
        </div>

        <div className='p-3'>
            <Address/>
        </div>
       
         {/*  ...طرق الدفع  */}
        <div className='p-3 primary-text-color'>
           <PayWays/>
        </div>

        {/* review the bill */}
        <div className='primary-text-color'>
          <CartReview/>
          
        </div>

        <div className='text-center m-3 p-5 '>
          {/* <Button className='primary-btn  w-75 shadow'>تأكيد الطلب</Button> */}
        </div>






      </div>

      <div className='col pe-5 me-5 pt-3'>
        <h4 className=' primary-text-color p-3 text-center'>الطلبات </h4>

      </div>





    </div>



  )
}

export default Paying