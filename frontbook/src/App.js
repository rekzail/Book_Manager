
import './App.css';

import {Route,Routes } from 'react-router-dom';

//Component 
import Index from './components/pages/Index';
import Navbar from "./components/Navbar";
import Dashboard from './components/pages/Dashboard';
import Footer from './components/Footer';
import Book from './components/Book';






function App() {
  return (
    <div className='App'>
       
			<Navbar/>
      <Routes>
        <Route path='/' element={<Index></Index>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/book' element={<Book></Book>}></Route>
        

      </Routes>
      <Footer></Footer>
    
    </div>
  );
}

export default App;
