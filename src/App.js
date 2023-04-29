
import { Fragment } from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './compontes/Footer';
import Navbar from './compontes/Navbar';
import Rejester from './Pages/Rejester';
import Home from './Pages/Home';
import ForgetPasswords from './compontes/ForgetPassword';
import ContactUs from './Pages/ContactUs';
import HeaderLogin from './compontes/HeaderLogin';
import Check from './compontes/Check';
import SucessCheck from './compontes/SucessCheck';
import Profile from './Pages/Profile';




function App() {
  return (
      <Fragment>
        {/* <HeaderLogin/> */}
        <Navbar/> 
         {/* <Rejester/>  */}
        {/* <Home/> */}
        <Profile/>
       {/* <Footer/>  */}
       {/* <SupportCards/> */}
     {/* <Check/> */}
     {/* <SucessCheck/> */}
        {/* <ForgetPasswords/> */}
       {/* <ContactUs/> */}
      </Fragment>
  );
}

export default App;
