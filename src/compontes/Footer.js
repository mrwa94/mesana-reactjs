import React from 'react'
import Nav from 'react-bootstrap/Nav';
import '../styles/App.css';
import logo from '../assets/images/logo.png';
import {AiFillTwitterSquare } from 'react-icons/ai'
import {FaInstagramSquare}  from 'react-icons/fa'


const Footer = () => {
  return (
        <footer class="pt-5 ">


<Nav  className=" px-5 " activeKey="/home">
       <div className='justify-content-end'>
       <Nav.Item>
          <Nav.Link  className='link' href="/home">التحليلات والأنشطة</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='link' herf= "/" eventKey="">الطلبات</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='link'  herf= "/"  eventKey="">المتجر</Nav.Link>
        </Nav.Item>
       </div>


      <div>
      <Nav.Item>
          <Nav.Link  className='link' herf= "/"  eventKey=""> المساعدة و التواصل معنا </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link  className='link' herf= "/"  eventKey=""> الموردين</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link  className='link'  herf = "/"   eventKey=""> المحفظة</Nav.Link>
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