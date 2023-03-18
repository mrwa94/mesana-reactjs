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
    <Navbar className='navbar' bg="light" dir='rtl' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
            <img src={logo}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className='px-5 pt-3' >
            <Nav.Link className='nav-link' href="#action1">المتجر </Nav.Link>
            <Nav.Link  className='nav-link'  href="#action2">التحليلات و الأنشطة</Nav.Link>
            <Nav.Link className='nav-link'  href="#action2">الطلبات</Nav.Link>
            <Nav.Link className='nav-link'  href="#action2">المحفظة</Nav.Link>
            <Nav.Link className='nav-link'  href="#action2">الموردين</Nav.Link>

              <Nav className='header'>
              <Nav.Link className='nav-link  '  href="#action2"><BsFillBellFill className='icon-header'/> </Nav.Link>
             <Nav.Link className='nav-link '  href="#action2"><AiOutlineWechat className='icon-header'/> </Nav.Link>
             <Nav.Link className='nav-link profile-name '  href="#action2">مروه الصبحي</Nav.Link>
             <Nav.Link className='nav-link '  href="#action2"> <img src={profile} alt="profile image " /></Nav.Link>

              </Nav>
            
            
               </Nav>
             </Navbar.Collapse>
          </Container>
     </Navbar>
  );
}

export default navbar;