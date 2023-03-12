
import { Fragment } from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './compontes/Footer';
import Navbar from './compontes/Navbar';
import Rejester from './Pages/Rejester';
import Home from './Pages/Home';
import SupportCards from './compontes/SupportCards';



function App() {
  return (
      <Fragment>
        {/* <Navbar/> */}
        {/* <Rejester/> */}
        <Home/>
       {/* <Footer/> */}
       <SupportCards/>
      </Fragment>
  );
}

export default App;
