import React from 'react'
import { Card , Button  } from 'react-bootstrap'
import ProductDetails from './ProductDetails'



import product from '../../assets/images/product.png'

//icons
import { HiShoppingCart } from "react-icons/hi2";


function StoreCard(props){

  return (


        <div className = "card mx-2 mt-5 " 
              style={{ width: '18rem' }}>


          <img src ={props.imgProduct} 
           style={{ height: '12rem' }} 
           className='pt-1 rounded'/>

          <div className= "card-body">
            <h2>{props.title}</h2>
            <p>{props.detailsProduct}</p>
            <p> {props.priceProduct}</p>

            <button 
            // onClick={<ProductDetails/>} 
            className = "primary-btn rounded text-center">
               أضف الى طلباتي
               <HiShoppingCart/>
              </button> 
          </div>

          
           </div>

    


  )
}

export default StoreCard