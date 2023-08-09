import React from 'react'
import { Button } from 'react-bootstrap'
import Select from 'react-select';
import { useState } from 'react';
const ProductTags = () => {


    // test for select
    const selects = [
        { type: "tag 1", id: 1, label: "tag 1" },
        { type: "tag 2", id: 2, label: "tag 2" },
        { type: "tag 3", id: 1, label: "tag 3" },
    
      ]
    
      const [option] = useState(selects);
    

  return (
    <div className='container  login-form rounded p-4 mt-5'>

<p className='nav-link'>  Product Tag  </p>
<Select options={option} placeholder="اختر" />

                    <div className='text-center m-3'>
       <Button className='text-center primary-btn px-5' onClick={''}>حفظ المنتج </Button>
       </div>
    </div>
  )
}

export default ProductTags