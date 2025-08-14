import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Ritual from './pages/Ritual';
import Journal from './pages/Journal';
import SwanCircle from './pages/SwanCircle';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/ritual" element={<Ritual />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/swan-circle" element={<SwanCircle />} />
          <Route path="/contact" element={<Contact />} />
          {/* Handle preview page and other unknown routes */}
          <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}