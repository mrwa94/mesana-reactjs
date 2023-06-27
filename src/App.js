
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components 
import Navbar from './Components/Header&Footer/Navbar';
import Footer from './Components/Header&Footer/Footer';
import Cart from './Components/Cart/Cart';
import ProductDetails from './Components/Store/ProductDetails';

//pages
import Store from './Pages/Store/Store';
import Suppliers from './Pages/Suppliers/Suppliers'
import Wallet from './Pages/Wallet/Wallet'
import Requests from './Pages/Requests/Requests';
import Profile from './Pages/Profile/Profile';
import Analys from './Pages/Analys/Analys';
import ContactUS from './Pages/ContactUs/ContactUs';
import Chat from './Components/Profile/Chat'


// router 
import { BrowserRouter  as Router , Route , Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import   SignUp from './Auth/SignUp.js';
import   Login from './Auth/Login.js';
import SelectLoction from './Components/Cart/SelectLoction';
import NewLocation from './Components/Cart/Address';
import Paying from './Components/Cart/Paying';
import CartSetup from './Components/Cart/CartSetup';
import Preview from './Pages/Requests/Preview';





function App() {

  return (
  <>

  <Router>
    {/* import navbar  */}
  <Navbar/>
  {/* <HeaderLogin/> */}

    

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

    <Route path='/Login' element= {<Login/>}></Route>
    <Route path='/SignUP' element= {<SignUp/>}></Route>
    <Route path='/chat' element= {<Chat/>}></Route>
    <Route path='/location' element= {<SelectLoction/>}></Route>
    <Route path = '/newLocation' element = {<NewLocation/>}></Route>
    <Route path = '/Paying' element =  {<Paying/>} ></Route>
    <Route path = '/cartSetup' element = {<CartSetup/>}></Route>
    <Route path = '/Preview' element = {<Preview/>}></Route>

    
    </Routes>
   

   {/* import footer */}
    <Footer/>

  </Router>
  
  </>
   
  );
}

export default App;
