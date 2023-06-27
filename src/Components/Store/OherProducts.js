import React from 'react'
import StoreCard from './StoreCard'

import {cardDetails} from '../../Data/CardData';
import {  Container } from 'react-bootstrap';

//slider
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


function OherProducts  (){

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  return (
    <div>

    
        <Container className='row mb-5  '>
            <Slider {...settings}> 
            {cardDetails.map((product)=> (
                       <StoreCard className = 'col '   imgProduct = {product.imgProduct} 
                        title = {product.title}
                         detailsProduct = {product.detailsProduct}
                         priceProduct = {product.priceProduct}
                          />
                         ))} 

            </Slider>

        </Container>
    </div>
  )
}

export default OherProducts