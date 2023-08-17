import React from 'react'
import { Button } from 'react-bootstrap'



export const Address = () => {
  return (
   
    <div className='p-3 container'>
    <label className='p-3 me-3 fs-5 primary-text-color'> العنوان</label>
    <div className='w-75  boarded me-3 pt-2 px-3  pb-4 primary-text-color border-color base-color shadow '>
      <label className='d-block' id=''> محمد خالد </label>
      <label className='d-block' id=''>     المملكة العربية السعودية ، جدة   </label>
      <label className='d-block' id=''> +966 553 334 32  </label>
      <label className='d-block' id=''>  553    </label>
      <Button className='primary-btn w-25 rounded ' > تعديل</Button>
    </div>
  </div>
  )
}

export default Address