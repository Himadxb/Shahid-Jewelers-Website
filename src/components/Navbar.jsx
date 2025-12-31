import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, User, Menu, X, LogOut } from 'lucide-react';
import GoldTicker from './GoldTicker';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { user } = useAuth();
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (user) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'rgba(10, 10, 10, 0.95)', backdropFilter: 'blur(10px)' }}>
      <GoldTicker />
      <nav className="container" style={{ padding: '1.5rem 1rem' }}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)', fontWeight: '700', color: 'var(--color-gold-primary)', letterSpacing: '2px' }}>
            SHAHID JEWELERS
          </Link>

          {/* Desktop Menu */}
          <ul className="flex gap-4" style={{ display: isOpen ? 'none' : 'flex' }}>
            {['Home', 'Shop', 'Live Gold', 'About', 'Contact'].map((item) => (
              <li key={item}>
                <NavLink 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                  style={({ isActive }) => ({
                    color: isActive ? 'var(--color-gold-primary)' : 'var(--color-white)',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    fontSize: '0.9rem',
                    letterSpacing: '1px'
                  })}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <div style={{ position: 'relative' }}>
              <Search size={20} style={{ cursor: 'pointer' }} onClick={() => setIsSearchOpen(!isSearchOpen)} />
              {isSearchOpen && (
                <div style={{ position: 'absolute', top: '100%', right: 0, marginTop: '1rem', backgroundColor: '#222', padding: '0.5rem', borderRadius: '4px', display: 'flex' }}>
                  <input type="text" placeholder="Search..." style={{ background: 'transparent', border: 'none', color: 'white', padding: '0.5rem', outline: 'none' }} />
                </div>
              )}
            </div>
            
            <div onClick={handleProfileClick} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <User size={20} color={user ? 'var(--color-gold-primary)' : 'white'} />
              {user && <span style={{ fontSize: '0.8rem', color: 'var(--color-gold-primary)' }}>{(user.displayName || user.name || 'User').split(' ')[0]}</span>}
            </div>

            <Link to="/cart" style={{ position: 'relative', cursor: 'pointer' }}>
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span style={{ 
                  position: 'absolute', 
                  top: '-8px', 
                  right: '-8px', 
                  backgroundColor: 'var(--color-gold-primary)', 
                  color: 'var(--color-black)', 
                  fontSize: '0.7rem', 
                  fontWeight: 'bold', 
                  borderRadius: '50%', 
                  width: '16px', 
                  height: '16px', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center' 
                }}>{cartCount}</span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden" onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer', marginLeft: '1rem' }}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
