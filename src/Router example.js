import './App.css';
import Navvbar from './components/Navbar';
import Caraousel from './components/Carousel';
import Cards from './components/Cards';
import  Footer from './components/Footer';
import { Form } from 'react-bootstrap';

import {Routes, Route} from 'react-router-dom';


function App() {
  return (
<>


<Navvbar />

<Routes>
<Route path="/cards" element={<Cards />} />
<Route path="carousel" element={<Caraousel />} />
<Route path="footer" element={<Footer />} />

</Routes>




      
</>    
  );
}

export default App;
