import React from 'react'
import { Card , Button , Offcanvas, CardImg  } from 'react-bootstrap'
import ProductDetails from './ProductDetails'

import { useState } from 'react'

//import image to test 
import  image2 from '../../assets/images/coffee.png'






import product from '../../assets/images/product.png'

//icons
import { HiShoppingCart } from "react-icons/hi2";
import { BsCardText } from 'react-icons/bs'


function StoreCard(props){
  

  // show a product in small menu 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  
  const handleShow = () => setShow(true);



  const detailsHandel = () => {
      
    alert('hello marwa ..')
   
  }

  return (


        <div className = "card shadow mx-2 mt-5 mb-3  " 
              style={{ width: '16rem' }}
          
              >


          <img src ={props.imgProduct} 
           style={{ height: '12rem' }} 
           className='mt-2 rounded'/>

          <div className= "card-body">
            <h4>{props.title}</h4>
            <p>{props.detailsProduct}</p>
            <p> {props.priceProduct}</p>

            <button 
            variant="primary"
            className = "primary-btn rounded w-100 shadow"
            onClick={handleShow}
            >
              
              
               أضف الى طلباتي
               <HiShoppingCart/>
              </button> 
          </div>
    

          {/* Order summary */}
        <Offcanvas 
        show={show} 
         placement='end'>
        <Offcanvas.Header > 
        <Offcanvas.Title>متجر مسانا</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

          {/* import from API */}
          
          <div className='h-25 row  ps-0 primary-btn'>
               <div className='col w-50 h-50 '>
               <img className='' src={image2}></img>
               </div>
             <div className='col'>
              <h5 className=''>اسم المنتج</h5>
              <h6 className=''>وصف الطلب </h6>
             </div>

             <div className='col'>
             <button></button>
             </div>

          </div>
          
        </Offcanvas.Body>

      <div className='text-center pb-3'>
         <button className='primary-btn mx-3 rounded'
                  onClick={handleClose}
                   > متابعة التسوق
           </button>


          <button className='primary-btn rounded'
                  // onClick={}
                  > الشراء الآن 
          </button>
        </div>
      </Offcanvas>

      
          

           </div>

    


  )
}

export default StoreCard