import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//import '../../styles/App.css';

//image 
import logo from '../../assets/images/logo.png';
import profile from '../../assets/images/profile.png'

//icons
import { BsFillBellFill } from "react-icons/bs";
import { AiOutlineWechat } from "react-icons/ai";

// import Profile from '../Pages/Profile';

// router 
import {   Link  } from 'react-router-dom';
import Home from '../../Pages/Home/Home'
import Store from '../../Pages/Store/Store';

function navbar() {

  return (

    <>

<Navbar className='navbar' bg="light" dir='rtl' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
            <img src={logo}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          
          <Nav className='px-5 pt-3' >
            <Nav.Link className='nav-link'> 
            <Link to={"/store"}>
            المتجر
            </Link>
            </Nav.Link>
            <Nav.Link  className='nav-link'>
              <Link to={"/analys"}>
              التحليلات و الأنشطة
              </Link>
            </Nav.Link>
            <Nav.Link className='nav-link'>
              <Link to={"/requests"}>
              الطلبات
              </Link>
            </Nav.Link>
            <Nav.Link className='nav-link'>
              <Link to={"/wallet"}>
              المحفظة
              </Link>
            </Nav.Link>
            <Nav.Link className='nav-link'>
              <Link to={"/suppliers"}>
              الموردين
              </Link>
            </Nav.Link>

              <Nav className='header'>
              <Nav.Link className='nav-link  '  href="#action2"><BsFillBellFill className='icon-header'/> </Nav.Link>
             <Nav.Link className='nav-link '  href="#action2"><AiOutlineWechat className='icon-header'/> </Nav.Link>
             <Nav.Link className='nav-link profile-name'>
            <Link to={"/profile"}>
            مروه الصبحي
            </Link>
           
            

             </Nav.Link>
             <Nav.Link className='nav-link '> <img src={profile} alt="profile image " /></Nav.Link>

              </Nav>
            
            
               </Nav>
             </Navbar.Collapse>
          </Container>
         
     </Navbar>
     
    
    
    
    
    
    
    
    
    
    </>
   


    
    
    
    
    
    
    
    
    
 
    
  );
}

export default navbar;