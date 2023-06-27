import React, { useState } from "react";

// use bootstrap react
import Carousel from "react-bootstrap/Carousel";
import { Row, Col, Image , Nav, Tabs , Tab } from "react-bootstrap";

//icons
import { BsStarFill, BsStar, BsFillCartFill } from "react-icons/bs";


//import compontes
import MoreDetails from "../Store/MoreDetails";
import Reviwes from "./Reviwes";
import { cardDetails } from "../../Data/CardData";
import OtherProducts from "./OherProducts";


function ProductDetails(props) {

  //add to cart counter
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter((counter) => counter + 1);
  };
  const decrease = () => {
    setCounter((counter) => counter - 1);
  };


  const getprops = cardDetails;
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
          {/* go to a store website , i think   */}
          <h5 className="" >{props.title}  اسم المنتج    </h5>
          <h6 className="" >{props.title}  نوع المنتج    </h6>

        {/* rate products */}
        <div className="rate color">
          <BsStarFill className="text-warning" />
          <BsStarFill className="text-warning" />
          <BsStar className="text-warning" />
          <BsStar className="text-warning" />
          <BsStar className="text-warning" />
        </div>

      
        <a href="" > اسم المتجر   </a>
        <h6 className="" >     السعر 130 SR   </h6>
        
     

        <div>
          {/* add to and remove from cart */}
          <div className="">
            {/* select a item size ..  */}
              <select className="form-select mx-2 w-50 d-inline " type = "text" id="" aria-label="" >
                <option value="1">الرجاء تحديد الحجم </option>
                <option value="2">S</option>
                <option value="3">M</option>
                <option value="4">L</option>
              </select>
 

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
         className="mb-3 me-4"
        >

      <Tab eventKey="detailsProduct"
           title= "تفاصيل المنتج"
           className="me-5"
           >
             {cardDetails.map((item) => (

               <MoreDetails  moreDetails = {item.moreDetails} />

             )
             )}

        
      </Tab>

      <Tab eventKey="reviewProduct"
           title= "المراجعة">
           <Reviwes/>
      </Tab>
      
    </Tabs>
       </div>
 

       {/* Show other Products */}
      
       <div className="mt-5">
       <hr/>
        <OtherProducts/>
       </div>


    </>
  );
}

export default ProductDetails;
