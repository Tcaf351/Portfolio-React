import './App.css';

// packages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Home from './Pages/Home';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Error from './Pages/Error';


function App() {
  return (
    <Router>
      <div className='font-roboto'>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } />  
          <Route path='*' element={ <Error /> } />  
        </Routes>      
        <Footer />
      </div>
    </Router>
  );
}

export default App;
