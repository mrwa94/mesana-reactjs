import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div>Cart

    

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li > <Link className='breadcrumb-item"' to = {'/location'}>  العنوان</Link></li>
        </ol>
      </nav>
    </div>
  )
}

export default Cart