

import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Compontes
import Navbar from './compontes/Header&Footer/Navbar';
import Footer from './compontes/Header&Footer/Footer';
import Cart from './compontes/Cart/Cart';
import ProductDetails from './compontes/Store/ProductDetails';

//pages
import Store from './Pages/Store/Store';
import Suppliers from './Pages/Suppliers/Suppliers'
import Wallet from './Pages/Wallet/Wallet'
import Requests from './Pages/Requests/Requests';
import Profile from './Pages/Profile/Profile';
import Analys from './Pages/Analys/Analys';
import ContactUS from './Pages/ContactUs/ContactUs';


// router 
import { BrowserRouter  as Router , Route , Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';






function App() {

  return (
  <>

  <Router>
    {/* import navbar  */}
  <Navbar/>

    

    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/store' element={<Store/>}></Route>
    <Route path='/analys' element = {<Analys/>}></Route>
    <Route path='/requests' element = {<Requests/>}></Route>
    <Route path='/wallet' element = {<Wallet/>}></Route>
    <Route path='/suppliers' element = {<Suppliers/>}></Route>
    <Route path='/profile' element = {<Profile/>}></Route>
    <Route path= '/cart' element = {<Cart/>} ></Route>
    <Route path= '/productDetails' element = {<ProductDetails/>} ></Route>
    <Route path='/contactUS' element= {<ContactUS/>}></Route>
    </Routes>
   

   {/* import footer */}
    <Footer/>

  </Router>
  
  </>
   
  );
}

export default App;
