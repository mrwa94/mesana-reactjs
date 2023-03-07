
import { Fragment } from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './compontes/Footer';
import Navbar from './compontes/Navbar';
import Rejester from './Pages/Rejester';




function App() {
  return (
      <Fragment>
        {/* <Navbar/> */}
        <Rejester/>
       {/* <Footer/> */}
      </Fragment>
  );
}

export default App;
