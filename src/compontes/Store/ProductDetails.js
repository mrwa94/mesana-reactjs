import React, { useState } from "react";

// use bootstrap react
import Carousel from "react-bootstrap/Carousel";

//icons
import { BsStarFill, BsStar, BsFillCartFill } from "react-icons/bs";

//images
import productImage from "../../assets/images/storeDetails.png";
import productImage2 from "../../assets/images/coffee.png";
import { Row, Col, Image , Nav, Tabs , Tab } from "react-bootstrap";

import StoreCard from "./StoreCard";
import MoreDetails from "../Store/MoreDetails";
import Reviwes from "./Reviwes";
import { cardDetails } from "../../Data/CardData";

function ProductDetails(props) {

  //add to cart counter
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((counter) => counter + 1);
  };
  const decrease = () => {
    setCounter((counter) => counter - 1);
  };

  // image details by Carousel bootstrap

  const CarouselDetails = () => {
    return (
      <div>
        <Carousel slide={false} className="w-100">
          <Carousel.Item className="">
            <img
              className="d-block w-100 "
              src={props.imgProduct}
              alt="First image product"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={props.detailsImage}
              alt="Second image product"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={props.detailsImage2}
              alt="Third image product"
            />
          </Carousel.Item>
        </Carousel>

        {/* more details about products */}

        <Row className="pt-5">
          <Col>
            <Image src={props.imgProduct} rounded className="w-100" />
          </Col>
          <Col>
            <Image src={props.detailsImage} className="w-100" rounded />
          </Col>

          <Col>
            <Image src={props.detailsImage2} className="w-100" rounded />
          </Col>
        </Row>
      </div>
    );
  };

  return (
<>
    <div className="p-5 m-5 row ">
      <div className="col details-product w-50">
        <h4> {props.title}</h4>
        <p>  {props.detailsProduct} </p>

        {/* rate products */}
        <div className="rate color">
          <BsStarFill className="text-warning" />
          <BsStarFill className="text-warning" />
          <BsStar className="text-warning" />
          <BsStar className="text-warning" />
          <BsStar className="text-warning" />
        </div>

        {/* go to a store website , i think   */}
        <a href=""> {props.storeName} </a>

        <p className="">{props.priceProduct} </p>

        <div>
          {/* add to and remove from cart */}
          <div className="">
            <input
              placeholder="Please select size  "
              className="mx-2 w-50 "
              type="text"
              value= ''
            />

            <div className="d-inline ">
              <button className="btn btn-light border" onClick={increase}>
                +
              </button>
              <button className="btn btn-light border mx-1" onClick={decrease}>
                -
              </button>
            </div>

            <span className="border pt-2 px-4 py-4 pb-2 mt-1 rounded">
              {" "}
              {counter}
            </span>
          </div>

          {/* add to cart button  */}
          <div className="pt-3">
            <button className=" rounded card-btn">
              أضف الى طلباتي
              <BsFillCartFill className="mx-2" />
            </button>
          </div>
        </div>
      </div>

      {/* image details  */}
      <div className="col ">{CarouselDetails()}</div>


    {/* details about product && reviwes */}
    </div>

      <div className="w-50" >
      
      <Tabs
         defaultActiveKey="detailsProduct"
         id="uncontrolled-tab-example"
         className="mb-3"
        >

      <Tab eventKey="detailsProduct"
           title= "تفاصيل المنتج">
             {cardDetails.map((item) => (

               <MoreDetails moreDetails = {item.moreDetails} />

             )
             )}

        
      </Tab>

      <Tab eventKey="reviewProduct"
           title= "المراجعة">
           <Reviwes/>
      </Tab>
      
    </Tabs>
     
         

       </div>

    </>
  );
}

export default ProductDetails;
