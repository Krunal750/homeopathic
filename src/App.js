import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SocialMedia from './components/SocialMedia';
import Login from './components/Login'; // Import the Login component
import Aboutus from './components/Aboutus'; 
import Gallery from './components/Gallery'; 
import Doctors from './components/Doctors';
import Home from './components/Home';
import Signup from './components/Signup';
import PatientSearch from './components/PatientSearch';
import PatientProfile from './components/PatientProfile';
import CasePaperManagement from './components/CasePaperManagement';




function App() {
  
  return (
    <>
    <SocialMedia/>
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} /> {/* Route to the Login component */}
          <Route path="/aboutus" element={<Aboutus />} /> {/* Route to the AboutUs component */}
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/patientsearch" element={<PatientSearch />} />
          <Route path="/patients/:id" element={<PatientProfile />} />
          <Route path="/patients/:id/add-casepaper" element={<CasePaperManagement />} />
        <Route path="/" element={<Home />} />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
