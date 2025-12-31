import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { GoldProvider } from './context/GoldContext';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { NotificationProvider } from './context/NotificationContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import LiveGold from './pages/LiveGold';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

// Wrapper component to handle page transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/shop" element={<PageWrapper><Shop /></PageWrapper>} />
        <Route path="/live-gold" element={<PageWrapper><LiveGold /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
        <Route path="/signup" element={<PageWrapper><Signup /></PageWrapper>} />
        <Route path="/profile" element={<PageWrapper><Profile /></PageWrapper>} />
        <Route path="/cart" element={<PageWrapper><Cart /></PageWrapper>} />
        <Route path="/checkout" element={<PageWrapper><Checkout /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><Home /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

import GoldDustBackground from './components/GoldDustBackground';



function App() {
  return (
    <NotificationProvider>
      <AuthProvider>
        <CartProvider>
          <GoldProvider>
            <Router>
              <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                <GoldDustBackground />
                <Navbar />
                <main style={{ flex: 1 }}>
                  <AnimatedRoutes />
                </main>
                <Footer />
              </div>
            </Router>
          </GoldProvider>
        </CartProvider>
      </AuthProvider>
    </NotificationProvider>
  );
}

export default App;
