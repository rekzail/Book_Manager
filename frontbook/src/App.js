
import './App.css';

import {Route,Routes } from 'react-router-dom';

//Component 
import Index from './components/pages/Index';
import Navbar from "./components/Navbar";
import Dashboard from './components/pages/Dashboard';
import Footer from './components/Footer';
import BookPages from './components/pages/BookPages';
import Profile from './components/pages/Profile';
import FormLogin from './components/FormLogin';
import Register from './components/pages/Register';


const name = "Zail";




function App() {

  

  return (
    <div className='App'>
       
			<Navbar/>
      <Routes>
      
        <Route path='/' element={<Index></Index>}></Route>
        <Route path='/dashboard' element={<Dashboard name ={name}></Dashboard>}></Route>
        <Route path='/dashboard/book' element={<BookPages name={name}/>} />
        <Route path='/dashboard/user' element={<Profile name = {name}/>} />
        <Route path='/form' element={<FormLogin />} />
        <Route path='/register' element={<Register />} />
      

      </Routes>
      <Footer/>
    
    </div>
  );
}

export default App;
