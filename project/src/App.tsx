import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import UseCasesPage from './pages/UseCasesPage';
import About from './components/About';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import Mission from './components/Mission';
import Values from './components/Values';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/use-cases" element={<UseCasesPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/values" element={<Values />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;