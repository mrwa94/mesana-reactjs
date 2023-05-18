import React from 'react'
import { Card , Button  } from 'react-bootstrap'
import ProductDetails from '../Pages/ProductDetails'



import product from '../assets/images/product.png'

//icons
import { HiShoppingCart } from "react-icons/hi2";


function StoreCard(){

  return (

      // That form only to test before import data from API
        // <Card className='mx-2 mt-5 ' style={{ width: '18rem' }}>
        //    <Card.Img variant="top" src={product} style={{ height: '12rem' }} className='p-2 rounded'/>
        //      <Card.Body>
        //        <Card.Title>العنوان</Card.Title>
        //           <Card.Text>  وصف النتج وصف المنتج وصف المنتح وصف المنتج</Card.Text>
        //           <Card.Text> ١٠٠ ريال </Card.Text>


        //             <Button className='primary-btn rounded '  >
                      
        //                 أضف الى طلباتي 
        //                <HiShoppingCart className='m-2' />

        //             </Button>
                  
        //          </Card.Body>  
                
        //  </Card>


        <div className = "card mx-2 mt-5 " 
        style={{ width: '18rem' }}>
          <img src ={product} 
           style={{ height: '12rem' }} 
           className='p-2 rounded'/>

          <div className= "card-body">
            <h2>العنوان</h2>
            <p>تفاصيل المنتج </p>
            <p> 100 $</p>

            <button onClick={<ProductDetails/>} className = "primary-btn rounded text-center">
            click me
              </button> 
                     
              
                    
               
            

          </div>
 

 
            
           </div>

    


  )
}

export default StoreCard