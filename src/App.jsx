import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { GoldProvider } from './context/GoldContext';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { NotificationProvider } from './context/NotificationContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const LiveGold = lazy(() => import('./pages/LiveGold'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const Profile = lazy(() => import('./pages/Profile'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));

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

const RouteFallback = () => (
  <div style={{ minHeight: '40vh', display: 'grid', placeItems: 'center', color: 'var(--color-gold-primary)' }}>
    Loading...
  </div>
);


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
                  <Suspense fallback={<RouteFallback />}>
                    <AnimatedRoutes />
                  </Suspense>
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
