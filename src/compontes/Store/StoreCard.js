import React from 'react'
import { Card , Button  } from 'react-bootstrap'
import ProductDetails from './ProductDetails'



import product from '../../assets/images/product.png'

//icons
import { HiShoppingCart } from "react-icons/hi2";


function StoreCard(props){

  return (


        <div className = "card shadow mx-2 mt-5 mb-3  " 
              style={{ width: '16rem' }}>


          <img src ={props.imgProduct} 
           style={{ height: '12rem' }} 
           className='mt-2 rounded'/>

          <div className= "card-body">
            <h4>{props.title}</h4>
            <p>{props.detailsProduct}</p>
            <p> {props.priceProduct}</p>

            <button 
            // onClick={<ProductDetails/>} 
            className = "primary-btn rounded w-100 shadow ">
               أضف الى طلباتي
               <HiShoppingCart/>
              </button> 
          </div>

          
           </div>

    


  )
}

export default StoreCard