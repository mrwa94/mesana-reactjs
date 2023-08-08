import React from 'react'
import { Balance } from '../../Components/Wallet/Balance'

import { Link } from 'react-router-dom'
import Requests from '../Requests/Requests'
import AddCards from '../../Components/Wallet/AddCards'

const Wallet = () => {
  return (
    <div className='row container m-5'>

      <div className='col-lg-8'>
        {/*Current balance  */}
        <Balance />


        {/* lasted update ..  */}
        <Requests />

      </div>
      
      <div className='col'>
        <div className=''>
          {/* add money to card */}
         <AddCards/>
        </div>





      </div>





    </div>
  )
}

export default Wallet