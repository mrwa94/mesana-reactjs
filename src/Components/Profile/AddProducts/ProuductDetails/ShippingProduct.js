import React from 'react'
import Select from 'react-select'

export const ShippingProduct = () => {
  return (
    <div className=''>
        <div className='col-md-4 m-2 mb-4'>
            <p className='nav-link'>الشحن</p>
            <Select options={''} placeholder = 'اختر'> </Select>
        </div>

        <div className='col-md-4 m-2'>
            <p className='nav-link'>الوزن (Kg)</p>
            <input type='text' className='input rounded w-100' placeholder='  ' />
        </div>

        <div className='m-2 mt-4 w-50'>
            <p className='nav-link'>الأبعاد (m)</p>
            <div className='row  w-100'>
            <input type='text' className='input rounded  col mx-2 ' placeholder=' الارتفاع' />
            <input type='text' className='input rounded  col  mx-2' placeholder=' الطول' />
            <input type='text' className='input rounded  col' placeholder=' العرض' />
             </div>

        </div>


        <div className='mt-5'>
               <input className='m-2 '  type='checkbox' value={''} onChange={''}/> 
                <p className='d-inline '>الدفع عند الاستلام </p>
             

               </div>
    </div>
  )
}
