import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/App.css';
import logo from '../assets/images/logo.png';
import { BsFillBellFill } from "react-icons/bs";
import { AiOutlineWechat } from "react-icons/ai";
import profile from '../assets/images/profile.png'

function navbar() {
  return (
    <Navbar bg="light" dir='rtl' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
            <img src={logo}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className='px-5' >
            <Nav.Link href="#action1">المتجر </Nav.Link>
            <Nav.Link href="#action2">التحليلات و الأنشطة</Nav.Link>
            <Nav.Link href="#action2">الطلبات</Nav.Link>
            <Nav.Link href="#action2">المحفظة</Nav.Link>
            <Nav.Link href="#action2">الموردين</Nav.Link>

  

      <div className='px-5 p-2 '>
             <a href='/'>
            <BsFillBellFill/>
              </a>
         
             <a href='/'>
             <AiOutlineWechat/>
             </a>
             </div>


             <div className='px-5  ' >
                <p className='d-inline px-3'>مروه الصبحي</p>
                <img src={profile}
                alt="profile image ">

                </img>
             </div>
      
        

         
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;