
import { Fragment } from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './compontes/Footer';
import Navbar from './compontes/Navbar';
import Rejester from './Pages/Rejester';
import Home from './Pages/Home';

import ContactUs from './Pages/ContactUs';




function App() {
  return (
      <Fragment>
        {/* <Navbar/>  */}
         {/* <Rejester/>  */}
        {/* <Home/> */}
       {/* <Footer/> */}
       {/* <SupportCards/> */}

     
       <ContactUs/>
      </Fragment>
  );
}

export default App;
