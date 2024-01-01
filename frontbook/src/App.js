
import './App.css';

import { BrowserRouter,Route,Routes } from 'react-router-dom';

//Component 
import Index from './components/pages/Index';
import Navbar from "./components/Navbar";
import Dashboard from './components/pages/Dashboard';





function App() {
  return (
    <div className='App'>
       <BrowserRouter>
			<Navbar/>
      <Routes>
        <Route path='/' element={<Index></Index>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>

      </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
