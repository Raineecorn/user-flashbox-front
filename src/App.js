import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Header/NavBar.js';
import Footer from './components/Footer/Footer.js';
import './App.css';
import UserLanding from './frontPages/userPages/overviewUser.js';
import UserInfo from './frontPages/userPages/overviewElements/ElementSidebar/userInfo.js'; 
import UserTrackingInfo from './frontPages/userPages/overviewElements/ElementSidebar/userTrackingInfo.js'; 
import UserContactUs from './frontPages/userPages/overviewElements/ElementSidebar/ContactUs.js';
import { ThemeProvider } from '@mui/material/styles/index.js';
import theme from './components/theme/colorTheme.js'

function App() {
  return (
    <ThemeProvider theme={theme}> 
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<UserLanding />}>
              <Route path="information" element={<UserInfo />} />
              <Route path="tracking" element={<UserTrackingInfo />} />
              <Route path="contactus" element={< UserContactUs />} />
            </Route> 
          </Routes>
        <Footer />
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
