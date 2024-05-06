import { Routes } from 'react-router';
import './App.css';
import AddressPage from './Pages/AddressPage';
import Landing1 from './Pages/Landing1';
import Landing2 from './Pages/Landing2';
import LanguagePage from './Pages/LanguagePage';
import LocationPage from './Pages/LocationPage';
import LoginPage from './Pages/LoginPage';
import MobilenoPage from './Pages/MobilenoPage';
import OtpPage from './Pages/OtpPage';
import OtpSelectPage from './Pages/OtpSelectPage';
import PresonaldetailPage from './Pages/PresonaldetailPage';
import SubmissionPage1 from './Pages/SubmissionPage1';
import SubmissionPage2 from './Pages/SubmissionPage2';
import { Route } from 'react-router-dom';
import MapPage from './Pages/MapPage';
import Login from './Pages/Login';
import YojanaCardPage from './Pages/YojanaCardPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Landing1/>}/>
        <Route path="/landing2" element={<Landing2/>}/>
        <Route path="/language" element={<LanguagePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/location" element={<LocationPage/>}/>
        <Route path="/address" element={<AddressPage/>}/>
        <Route path="/mobileno" element={<MobilenoPage/>}/>
        <Route path="/otpS" element={<OtpSelectPage/>}/>
        <Route path="/personaldetail" element={<PresonaldetailPage/>}/>
        <Route path="/submission1" element={<SubmissionPage1/>}/>
        <Route path="/submission2" element={<SubmissionPage2/>}/>
        <Route path="/otp" element={<OtpPage/>}/>
        <Route path="/map" element={<MapPage/>}/>
        <Route path='/Login1' element={<Login/>}/>
        <Route path='/yojanaCard' element={<YojanaCardPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
