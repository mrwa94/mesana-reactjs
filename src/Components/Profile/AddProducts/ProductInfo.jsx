import React from 'react'
import Select from 'react-select';
import { useState } from 'react';
import { Tab , Tabs,  } from 'react-bootstrap';
import { Form } from 'react-router-dom';
import { PublicDetails } from './ProuductDetails/PublicDetails';
import Inventory from './ProuductDetails/Inventory';
import { ShippingProduct } from './ProuductDetails/ShippingProduct';
import { Services } from './ProuductDetails/Services';
import ProductProperties from './ProuductDetails/ProductProperties';
import { ExtraDetails } from './ProuductDetails/ExtraDetails';

export const ProductInfo = () => {

    // test for select
    const selects = [
        { type: "tag 1", id: 1, label: "tag 1" },
        { type: "tag 2", id: 2, label: "tag 2" },
        { type: "tag 3", id: 1, label: "tag 3" },
    
      ]
    
      const [option] = useState(selects);

  return (
    <div className='container login-form rounded p-4 '>
       {/* Header */}
       <div className='row'>
        <div className='col nav-link'>اضافة تفاصيل المنتج </div>
        
        <div className='col'> 
        <Select options={option}></Select>
        </div>
        <div className='col '>
            <p className='gray d-inline'>Dawnloaded</p>
            <input className='m-2' type="checkbox" value={''} onChange={''} />
             </div>

        <div className='col'>
        <p className='gray d-inline'>Virtual</p>
            <input className='m-2' type="checkbox" value={''} onChange={''} />
        </div>
       </div>
       
       {/* Body */}
       <Tabs
      defaultActiveKey="first"
      id=""
      className="mb-4 mt-4 skyblue-color   "
      justify
    >
      <Tab  className = '' eventKey="first" title=" عام " >
        <PublicDetails/>
      </Tab>
      <Tab eventKey="sec" title="الجرد">
       <Inventory/>
      </Tab>
      <Tab eventKey="third" title=" الشحن والتسليم">
        <ShippingProduct/>
      </Tab>
      <Tab eventKey="four" title=" الخدمة  " >
        <Services/>
      </Tab>
      <Tab eventKey="five" title=" الصفات  " >
        <ProductProperties/>
      </Tab>
      <Tab eventKey="sex" title=" معلومات اكثر   " >
        <ExtraDetails/>
      </Tab>
    </Tabs>
    </div>
  )
}
