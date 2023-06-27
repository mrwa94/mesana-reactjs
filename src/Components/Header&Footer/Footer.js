import React from 'react'
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

//images
//import '../styles/App.css';
import logo from '../../assets/images/logo.png';

//icons
import {AiFillTwitterSquare } from 'react-icons/ai'
import {FaInstagramSquare}  from 'react-icons/fa'




const Footer = () => {
  return (
        <footer class="pt-5 ">


<Nav  className=" px-5 " activeKey="/home">
       <div className='justify-content-end'>
       <Nav.Item>
          <Nav.Link  className='link' href="/home">
          <Link to={"/analys"}>
              التحليلات و الأنشطة
              </Link>
             </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='link' herf= "/" eventKey="">
          <Link to={"/requests"}>
              الطلبات
              </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='link'  herf= "/"  eventKey="">
          <Link to={"/store"}>
            المتجر
            </Link>
          </Nav.Link>
        </Nav.Item>
       </div>


      <div>
      <Nav.Item>
          <Nav.Link  className='link' herf= "/"  eventKey=""> 
          <Link to={"/contactUS"}> المساعدة والتواصل معنا </Link>  </Nav.Link>
        </Nav.Item>

        <Nav.Item>
        <Nav.Link className='nav-link'>
              <Link to={"/suppliers"}>
              الموردين
              </Link>
            </Nav.Link>        </Nav.Item>

        <Nav.Item>
          <Nav.Link  className='link'  herf = "/"   eventKey=""> 
          <Link to={"/wallet"}>
              المحفظة
              </Link>
          </Nav.Link>
        </Nav.Item>
      </div>
        

        <div>
        <Nav.Item>
          <Nav.Link  className='link' herf= "/"  eventKey=""> الشروط و الأحكام</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link className='link' herf= "/"  eventKey=""> السياسة و الخصوصية</Nav.Link>
        </Nav.Item>

        </div>


        <div className='col-md-4 col-lg-4 col-xl-4 mx-auto  footer-logo '>
        <Nav.Item>
          <Nav.Link className='footer-font' herf= "/"  eventKey=""> MESANA 
          <img src = {logo} alt = "mesana logo "/>
           </Nav.Link>
             </Nav.Item>

             <div className=''>
            <a herf ="#">
             <FaInstagramSquare className='icon'/>
            </a>
            <a herf = "">
            <AiFillTwitterSquare className='icon'/>
            </a>
            <p>Copyright © 2023  Mesana</p>
           </div>
           </div>
 </Nav>
                                          
</footer>
    
  )
}

export default Footer