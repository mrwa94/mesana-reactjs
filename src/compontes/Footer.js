import React from 'react'
import Nav from 'react-bootstrap/Nav';
import '../styles/App.css';
import logo from '../assets/images/logo.png';
import twitter from '../assets/images/twitter.png';
import insta from '../assets/images/insta.png';


const Footer = () => {
  return (
        <footer class="pt-5 pb-4">


<Nav dir='rtl' className=" px-5" activeKey="/home">
       <div className='text-md-right'>
       <Nav.Item>
          <Nav.Link href="/home">التحليلات والأنشطة</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  herf= "/" eventKey="">الطلبات</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  herf= "/"  eventKey="">المتجر</Nav.Link>
        </Nav.Item>
       </div>


      <div>
      <Nav.Item>
          <Nav.Link  className='nav-link' herf= "/"  eventKey=""> المساعدة و التواصل معنا </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link  herf= "/"  eventKey=""> الموردين</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link herf = "/"   eventKey=""> المحفظة</Nav.Link>
        </Nav.Item>
      </div>
        

        <div>
        <Nav.Item>
          <Nav.Link  herf= "/"  eventKey=""> الشروط و الأحكام</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link herf= "/"  eventKey=""> السياسة و الخصوصية</Nav.Link>
        </Nav.Item>

        </div>


        <div className='text-md-left '>
        <Nav.Item>
          <Nav.Link herf= "/"  eventKey=""> MESANA 
          <img src = {logo} alt = "mesana logo "/>
           </Nav.Link>
             </Nav.Item>

             <div className=''>
            <a>
              <img src={twitter} alt = "twitter "/>
            </a>
            <a>
              <img src={insta} alt = "twitter "/>
            </a>
            <p>Copyright © 2023  Mesana</p>
           </div>
           </div>
 </Nav>
                                          
</footer>
    
  )
}

export default Footer