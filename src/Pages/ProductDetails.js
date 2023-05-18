import React, { useState } from 'react'



// use bootstrap react
import Carousel from 'react-bootstrap/Carousel';


//icons
import {BsStarFill , BsStar ,BsFillCartFill} from 'react-icons/bs'

//images
import productImage from '../assets/images/storeDetails.png'
import productImage2 from '../assets/images/coffee.png'
import { Row ,Col ,Image } from 'react-bootstrap';


function ProductDetails () {


    //add to cart counter
    const [counter , setCounter] = useState(0);
     
    const increase = () => {
      setCounter( counter => counter + 1 );

    }
    const decrease = () => {
        setCounter(counter => counter - 1);

    }


    // image details by Carousel bootstrap

    const CarouselDetails = () =>{
        return (
           <div>

        <Carousel slide={false} className = 'w-100'>

<Carousel.Item className=''>
  <img
    className="d-block w-100 "
    src={productImage}
    alt="First image product"
  />
</Carousel.Item>


<Carousel.Item>
  <img
    className="d-block w-100"
    src={productImage2}
    alt="Second image product"
  />
</Carousel.Item>

<Carousel.Item>
  <img
    className="d-block w-100"
    src= {productImage}
    alt="Third image product"
  />
</Carousel.Item>
</Carousel> 

    {/* more details .. image details */}

     <Row className='pt-5'>
     <Col  >
          <Image src={productImage} rounded 
                 className='w-100'
          />
        </Col>
        <Col >
        <Image src={productImage} 
            className ='w-100'
        rounded />
        </Col>

        <Col >
        <Image src={productImage} 
               className = 'w-100'
        rounded />
        </Col>

     </Row>

           </div>
       
        )

    }
      

   



  return ( 
    <div className='p-5 m-5 row '> 

    <div className='col details-product w-50'>
       <h4> اسم المنتج</h4>
         <p> نوع المنتج </p>


           {/* rate products */}
            <div className='rate color'>
            <BsStarFill className='text-warning'/>
            <BsStarFill className='text-warning'/>
             <BsStar className = "text-warning"/>
             <BsStar className = 'text-warning'/>
             <BsStar className = 'text-warning'/>
            </div>



               {/* go to a store website , i think   */}
               <a href=''
                  
               >اسم المتجر </a>

               <p className=''>
                سعر المنتج
               </p>


               <div>

                 {/* add to and remove from cart */}
                 <div className=''>
                    
                 <input placeholder='Please select size  '
                       className='mx-2 w-50 ' 
                       type= 'text'
                   
                  />

            
                <div className='d-inline '>
                    <button className='btn btn-light border'       onClick={increase}>+</button>
                    <button className='btn btn-light border mx-1'  onClick={decrease}>-</button>
                     </div>

                    <span className='border pt-2 px-4 py-4 pb-2 mt-1 rounded' > {counter}</span>
           
                   
                 </div>

 
                 {/* add to cart button  */}
                 <div className='pt-3'>
                 <button className=' rounded card-btn'> 
                      أضف الى طلباتي    
                       <BsFillCartFill className='mx-2'/>

                   </button>
                 </div>
                   
               </div>



    </div>

    {/* image details  */}
       <div className='col '>
       { CarouselDetails()}
       
    </div>


    













      </div>
  )
}

export default ProductDetails