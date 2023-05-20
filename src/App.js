

import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Compontes
import Navbar from './compontes/Header&Footer/Navbar';
import Footer from './compontes/Header&Footer/Footer';

//pages
import Store from './Pages/Store/Store';
import Suppliers from './Pages/Suppliers/Suppliers'
import Wallet from './Pages/Wallet/Wallet'
import Requests from './Pages/Requests/Requests';
import Profile from './Pages/Profile/Profile';
import Analys from './Pages/Analys/Analys';

// router 
import { BrowserRouter  as Router , Route , Routes } from 'react-router-dom';






function App() {

  return (
  <>

  <Router>
    {/* import navbar  */}
  <Navbar/>
    

    <Routes>
    <Route path='/store' element={<Store/>}></Route>
    <Route path='/analys' element = {<Analys/>}></Route>
    <Route path='/requests' element = {<Requests/>}></Route>
    <Route path='/wallet' element = {<Wallet/>}></Route>
    <Route path='/suppliers' element = {<Suppliers/>}></Route>
    <Route path='/profile' element = {<Profile/>}></Route>
    </Routes>
   

   {/* import footer */}
    <Footer/>
    
  </Router>
  </>
   
  );
}

export default App;
