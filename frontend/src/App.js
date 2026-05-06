import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Loginhost from './components/Loginhost';
import Signup from './components/Signup';
import Signuphost from './components/Signuphost';
import Addprop from './Dashboard-components/Dashboar-pages/Addprop';
import Bookings from './Dashboard-components/Dashboar-pages/Bookings';
import Help from './Dashboard-components/Dashboar-pages/Help';
import Myproperties from './Dashboard-components/Dashboar-pages/Myproperties';
import Overview from './Dashboard-components/Dashboar-pages/Overview';
import Profile from './Dashboard-components/Dashboar-pages/Profile';
import Revenue from './Dashboard-components/Dashboar-pages/Revenue';
import Review from './Dashboard-components/Dashboar-pages/Review';
import Settings from './Dashboard-components/Dashboar-pages/Settings';
import Home from './Pages/Home';
import Host from './Pages/Host';
import Hostdashboard from './Pages/Hostdashboard';


function App() {
  return (  
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup-host" element={<Signuphost />} /> {/* Cleaned path */}
      <Route path="/loginhost" element={<Loginhost/>} />   {/* Cleaned path */}
      <Route path="/host" element={<Host />} />

  
      <Route path="/Hostdashboard" element={<Hostdashboard/>}>
      
        <Route index element={<Navigate to="profile" replace />} />
        
        <Route path="profile" element={<Profile />} />
        <Route path="overview" element={<Overview />} />
        <Route path="myproperties" element={<Myproperties />} />
        <Route path="addproperties" element={<Addprop />} />
        <Route path="revenue" element={<Revenue />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="reviews" element={<Review />} />
        <Route path="help" element={<Help />} />
        <Route path="settings" element={<Settings />} />
      </Route>

    
    </Routes> 
  );
}
export default App