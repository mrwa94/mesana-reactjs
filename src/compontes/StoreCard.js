import React from 'react'
import { Card , Button  } from 'react-bootstrap'

import product from '../assets/images/product.png'

//icons
import { HiShoppingCart } from "react-icons/hi2";

const StoreCard = () => {
  return (


        <Card className='mx-2 mt-5 ' style={{ width: '18rem' }}>
           <Card.Img variant="top" src={product} style={{ height: '12rem' }} className='p-2 rounded'/>
             <Card.Body>
               <Card.Title>العنوان</Card.Title>
                  <Card.Text>  وصف النتج وصف المنتج وصف المنتح وصف المنتج</Card.Text>
                  <Card.Text> ١٠٠ ريال </Card.Text>


                    <Button className='primary-btn rounded  '>
                        أضف الى طلباتي 
                       <HiShoppingCart className='m-2' />
                    </Button>
                 </Card.Body>  
         </Card>

  )
}

export default StoreCard