import './App.css';
import Navvbar from './components/Navbar';
import Caraousel from './components/Carousel';
import Cards from './components/Cards';
import  Footer from './components/Footer';
import Forms from './components/Form';
import Sidebar from './components/Sidebar';
import Sale  from './components/Sale';
import Crud from "./components/Crud";
import Edit from "./components/Edit";
import About from "./components/About"
import Student from "./components/Student";
import Login from "./components/Login";
import Context from './Hooks/ContextAPI/Context';
import Reducer from './Hooks/Reducer.js/Reducer';
import CallBack from './Hooks/CallBack';

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
<>


<Navvbar />

<Routes>
  
  
<Route path='/' element={ <> <Caraousel />, <Cards /></>} />
<Route path='/about' element={ <> <About /></>} /> 
<Route path='/sidebar' element={ <> <Sidebar /></>} /> 
<Route path='/form' element={ <><Forms /></>} /> 
<Route path='/Sale' element={ <><Sale /></>} /> 
<Route path='/crud/edit' element={ <><Edit /></>} /> 
<Route path='/crud' element={ <><Crud/></>} /> 
<Route path='/crud/student' element={ <><Student/></>} /> 
<Route path='/crud/student/login' element={ <><Login/></>} /> 
<Route path='/student/register' element={ <><Student/></>} />
<Route path='/context' element={ <><Context/></>} /> 
<Route path='/reducer' element={ <><Reducer/></>} /> 
<Route path='/callback' element={ <><CallBack/></>} /> 




</Routes>
<Footer />


      
</>    
  );
}

export default App;
