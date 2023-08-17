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
        <Navbar.Brand href="/">
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
            <Nav.Link  className='nav-link d-none'>
              <Link to={"/analys"}>
              التحليلات و الأنشطة
              </Link>
            </Nav.Link>
            <Nav.Link className='nav-link d-none'>
              <Link to={"/requests"}>
              الطلبات
              </Link>
            </Nav.Link>
            <Nav.Link className='nav-link d-none'>
              <Link to={"/wallet"}>
              المحفظة
              </Link>
            </Nav.Link>
            <Nav.Link className='nav-link d-none'>
              <Link to={"/suppliers"}>
              الموردين
              </Link>
            </Nav.Link>

              <Nav className='header'>
              <Nav.Link className='nav-link  d-none'  href="#action2"><BsFillBellFill className='icon-header'/> </Nav.Link>
             {/* chat support tech */}
             <Nav.Link className='nav-link '  href="#action2"><AiOutlineWechat className='icon-header'/> </Nav.Link>
             <Nav.Link className='nav-link profile-name d-none'>
            <Link to={"/profile"}>
            مروه الصبحي
            </Link>
           
            

             </Nav.Link>

             
             <Nav.Link className='nav-link d-none'> <img src={profile} alt="profile image " /></Nav.Link>

             
                 {/* login button */}
             <Nav.Link className='nav-link  '> 
             <Link  to = {'Rejester'} className='primary-btn rounded px-3 p-2'>الدخول</Link>
               </Nav.Link>

                {/* signup button */}
             <Nav.Link className='nav-link '> 
             <Link to={'Rejester'} className='primary-btn rounded p-2'>إنشاء حساب </Link>
               </Nav.Link>
            





              </Nav>
            
            
               </Nav>
             </Navbar.Collapse>
          </Container>
         
     </Navbar>
     
    
    
    
    
    
    
    
    
    
    </>
   


    
    
    
    
    
    
    
    
    
 
    
  );
}

export default navbar;