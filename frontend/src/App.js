import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './Pages/Home';

function App() {
  return (
  <>
   <Home/>
  
      <Routes>
        
       
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
  
  
  
  
  </>
  );
}

export default App;
