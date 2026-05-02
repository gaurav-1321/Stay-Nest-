import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './Pages/Home';
import Middle from './Pages/Middle';

function App() {
  return (
  <>
   <Home/>
  
      <Routes>
        <Route path="/" element={<Middle/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
  
  
  
  
  </>
  );
}

export default App;
