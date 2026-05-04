import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Loginhost from './components/Loginhost';
import Signup from './components/Signup';
import Signuphost from './components/Signuphost';
import Home from './Pages/Home';
import Host from './Pages/Host';
import Hostdashboard from './Pages/Hostdashboard';


function App() {
  return (
  <>
  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Signuphost" element={<Signuphost/>} />
             <Route path="/Loginhost" element={<Loginhost/>} />
             <Route path="/Hostdashboard" element={<Hostdashboard/>}/>
        <Route path ="/host" element={<Host/>}  />
      </Routes>
  
  
  
  
  </>
  );
}

export default App;
