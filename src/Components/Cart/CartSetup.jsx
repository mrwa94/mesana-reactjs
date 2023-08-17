import React from 'react'
import { useState } from 'react';
import NewLocation from './Address';
import PaymentConfirmation from './PaymentConfirmation';
import { Button } from 'react-bootstrap';
import SelectLoction from './SelectLoction';
import Paying from './Paying';

const CartSetup = () => {
  const [page, setPage] = useState(0);
  const steps = ['location', 'paying', 'PaymentConfirmation'];


  function showPage() {
    if (page === 0) { return < SelectLoction /> }
    else if (page === 1) {
      return <Paying />
    }
    else {
      return <PaymentConfirmation />
    }
  }


  return (
    <div className=''>

     {/* progress */}
      <div className='w-50 text-center mx-5 '>
        <div className='progress mx-5  mt-5' style={{
          width: page === 0 ? "33.3%" :
            page == 1 ? "66.6%" : "100%"
        }} > progress </div>
      </div>

      {showPage()}
      <div className=' mb-4 mx-5 text-center'>
      <Button variant="primary"
        className=' primary-btn mt-3 w-25 fs-5  ms-5 ps-5'
        type="submit"
        disabled={steps == steps.length - 1}
        onClick={() => { setPage((currPage) => currPage + 1); }} >
        <label>{steps == steps.length - 1 ? " تأكيد الطلب" : "التالي"}</label>
      </Button>
      </div>
    </div>
  )
}

export default CartSetup