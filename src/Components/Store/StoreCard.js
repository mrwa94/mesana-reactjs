import React from 'react'
import { Offcanvas } from 'react-bootstrap'
//import ProductDetails from './ProductDetails'
import { useState } from 'react'
//import image to test 
import image2 from '../../assets/images/coffee.png'
//import product from '../../assets/images/product.png'
//icons
import { HiShoppingCart } from "react-icons/hi2";
//import { BsCardText } from 'react-icons/bs'
//import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlineClose } from "react-icons/ai";
//test 
import { useSelector } from 'react-redux'
//Links
import {Link} from 'react-router-dom';



function StoreCard(props) {
  //test
  //const productList = useSelector((state)=> state.product.value)


  // show a product in small menu (right windows when user clicked add to cart) 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



    //add to count items 
    const [counter, setCounter] = useState(0);

    const increase = () => {
      setCounter((counter) => counter + 1);
    };
    const decrease = () => {
      setCounter((counter) => counter - 1);
    };



  return (

    // start a card .

    <div className="card shadow mx-2 mt-5 mb-3" style={{ width: '16rem' }} key={props.id}>
   

      {/* fist time i used a props , then I trying use a redux now ..  */}

      {/* props */}
      {/* <img src={props.imgProduct}
        style={{ height: '12rem' }}
        className='mt-2 rounded' />

      <div className="card-body">
        <h4>{props.title}</h4>
        <p>{props.detailsProduct}</p>
        <p> {props.priceProduct}</p>

        <button
          variant="primary"
          className="primary-btn rounded w-100 shadow"
          onClick={handleShow}
        >
          أضف الى طلباتي
          <HiShoppingCart />
        </button>
      </div> */}

      {/* redux */}
      {/* {productList.map((testProduct) => {
        return (

          <div>
            <img src={"hello"}
        style={{ height: '12rem' }}
        className='mt-2 rounded' />

      <div className="card-body">
        <h4>{testProduct.Title}</h4>
        <p>{testProduct.detailsProduct}</p>
        <p> {testProduct.priceProduct}</p>

        <button
          variant="primary"
          className="primary-btn rounded w-100 shadow"
          onClick={handleShow}
        >
          أضف الى طلباتي
          <HiShoppingCart />
        </button>
      </div>
          </div>
        );
      } )} */}



      <img src={props.imgProduct}
        style={{ height: '12rem' }}
        className='mt-2 rounded' />

      <div className="card-body">
        <h4>{props.Title}</h4>
        <p>{props.detailsProduct}</p>
        <p> {props.priceProduct}</p>

         <div>
         <button variant="primary" className="primary-btn rounded w-100 shadow" onClick={handleShow}>
          أضف الى طلباتي
          <HiShoppingCart />
        </button>
        <button>
          <Link to={'/productDetails'}>  تفاصيل المنتج</Link>
        </button>
         </div>
      </div>



      {/* Order summary , when user adding anything to cart , 
      it is show a small window to see all products his added */}

      <Offcanvas show={show} placement='end'>
        <Offcanvas.Header  >
          <Offcanvas.Title>  {props.storeName}</Offcanvas.Title>
             <i onClick={() => setShow(false)} >< AiOutlineClose /></i>
            </Offcanvas.Header>

        <Offcanvas.Body className='p-0 '>
          {/*  */}
          <div className='h-20 w-100 row  border my-2 shadow border-color rounded '>
            <div className='col w-100  '>
              <img className=' w-100 h-100' src={props.imgProduct}></img>
            </div>
            <div className='col text-center mt-4 '>
              <h5 className=''>اسم المنتج</h5>
              <p className=''>وصف الطلب </p>
            </div>

            <div className='col text-center mt-3 border rounded h-25 ms-4 '>
              <button className='btn fw-bold' onClick={increase}>+</button>
              <button className='btn fw-bold' onClick={decrease}>-</button>
              {counter}
            </div>
          </div>
        </Offcanvas.Body>
          <div className='me-5 row'>
            <h6 className='col-4'>عدد العناصر :</h6>
             {/* here add a product total */}
            <h6 className='col-4'>المجموع</h6>
            {/* here add a products price */}
          </div>
  
        <div className='text-center pb-3'>
          <button className='primary-btn mx-3 rounded' onClick={handleClose}> متابعة التسوق </button>
          <button className='primary-btn rounded' >  
          <Link to={"/cart"} className='text-light'> الشراء الآن </Link>
             </button> 
        </div>
      </Offcanvas>




    </div>




  )
}

export default StoreCard