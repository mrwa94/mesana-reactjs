import React from 'react'

import ProductsName from '../AddProducts/ProductsName'
import ProductType from './ProductType'
import MoreDetailsProduct from './MoreDetailsProduct'
import ProductTags from './ProductTags'
import { ProductInfo } from './ProductInfo'
import { ProductImage } from './ProductImage'

const AddItem = () => {
  return (


    <div className='container mt-3'>


        <div className='row'>
            <div className='col-8'>
            <ProductsName/>
            </div>

            <div className='col'>
                <ProductType/>
                <MoreDetailsProduct/>
                <ProductTags/>
            </div>


            <div>
                <ProductInfo/> 
            </div>


        <div>
            <ProductImage/>
        </div>


        </div>

















    </div>
  )
}

export default AddItem