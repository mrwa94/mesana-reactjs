//Bootstrap
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import Pages  and Components
import {
  Navbar, Footer, Cart, ProductDetails, Home, SignUp, Login, SelectLoction, NewLocation, Paying, CartSetup,
  Preview, ForgetPassword, Rejester, AddItem, Store, Suppliers, Wallet,
  Requests, Profile, Analys, ContactUS, Chat
} from './Components/index';

// router 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>

      <Router>
        {/* import navbar  */}
        <Navbar />
        {/* <HeaderLogin/> */}



        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/store' element={<Store />}></Route>
          <Route path='/analys' element={<Analys />}></Route>
          <Route path='/requests' element={<Requests />}></Route>
          <Route path='/wallet' element={<Wallet />}></Route>
          <Route path='/suppliers' element={<Suppliers />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/cart' element={<Cart />} ></Route>
          <Route path='/productDetails' element={<ProductDetails />} ></Route>
          <Route path='/contactUS' element={<ContactUS />}></Route>

          <Route path='/Login' element={<Login />}></Route>
          <Route path='/SignUp' element={<SignUp />}></Route>
          <Route path='/Rejester' element={<Rejester />}></Route>


          <Route path='/chat' element={<Chat />}></Route>
          <Route path='/location' element={<SelectLoction />}></Route>
          <Route path='/newLocation' element={<NewLocation />}></Route>
          <Route path='/Paying' element={<Paying />} ></Route>
          <Route path='/cartSetup' element={<CartSetup />}></Route>
          <Route path='/Preview' element={<Preview />}></Route>
          <Route path='/ForgetPassword' element={<ForgetPassword />}></Route>
          <Route path='/SucessCheck' element={<ForgetPassword />}></Route>
          <Route path='/addItem' element={<AddItem />} ></Route>




        </Routes>


        {/* import footer */}
        <Footer />

      </Router>

    </>

  );
}

export default App;
