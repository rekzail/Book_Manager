
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







function App() {

  

  return (
    <div className='App'>
       
			<Navbar/>
      <Routes>
      
        <Route path='/' element={<Index></Index>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/dashboard/book' element={<BookPages />} />
        <Route path='/dashboard/user' element={<Profile />} />
        <Route path='/form' element={<FormLogin />} />
      

      </Routes>
      <Footer/>
    
    </div>
  );
}

export default App;
