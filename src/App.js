

import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Compontes
import Navbar from './compontes/Navbar';
import Footer from './compontes/Footer';

//pages
import Store from './Pages/Store';
import Suppliers from './Pages/Suppliers'
import Wallet from './Pages/Wallet'
import Requests from './Pages/Requests';
import Profile from './Pages/Profile';

// router 
import { BrowserRouter  as Router , Route , Routes } from 'react-router-dom';
import Analys from './Pages/Analys';





function App() {


  // const route = createBrowserRouter( [
  //  { element : <Navbar/> ,
  //    children : [
  //   {
  //     path :'/Store',
  //     element : <Store/>
  //   },
  //   {
  //     path :'/Analys',
  //     element : <Analys/>
  //   } , 
  //   {
      
  //   }
  //  ]




  //  }
  // ]
    
   
  // )
  return (
    //   <Fragment>
    //     {/* <HeaderLogin/> */}
    //    <Navbar/> 
    //       {/* <Rejester/>  */}
    //     {/* <Home/> */}
    //      <Store/>
    //    {/* <Footer/>  */}
    //    {/* <SupportCards/> */}
    //  {/* <Check/> */}
    //  {/* <SucessCheck/> */}
    //     {/* <ForgetPasswords/> */}
    //    {/* <ContactUs/> */}
    //   </Fragment>
  // <div>
  //   <RouterProvider router={route}/>
    
  // </div>

  <>

  <Router>

  <Navbar/>
    
    <Routes>
    <Route path='/store' element={<Store/>}></Route>
    <Route path='/analys' element = {<Analys/>}></Route>
    <Route path='/requests' element = {<Requests/>}></Route>
    <Route path='/wallet' element = {<Wallet/>}></Route>
    <Route path='/suppliers' element = {<Suppliers/>}></Route>
    <Route path='/profile' element = {<Profile/>}></Route>
    </Routes>

    <Footer/>
    
  </Router>
  
  
  
  </>
   
  );
}

export default App;
