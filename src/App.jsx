import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import AboutUs from './components/About/AboutUs';
import Services from './components/Services/Services';
import CaseStudies from './components/CaseStudies/CaseStudies';
import Blog from './components/Blog/Blog';
import HowWorks from './components/HowItWorks/HowWorks';
import Career from './components/Career/Career';
import ContactUs from './components/Contact/ContactUs';

function App() {
  return (
    <Router> 
      <Header />

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/our-services" element={<Services />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/how-it-works" element={<HowWorks />} />
      <Route path="/career" element={<Career />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
    
      
      <Footer />
    </Router>
  );
}

export default App;
