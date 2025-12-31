import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#050505', padding: '4rem 0 2rem', borderTop: '1px solid #222' }}>
      <div className="container grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', letterSpacing: '1px' }}>SHAHID JEWELERS</h3>
          <p style={{ color: '#888', marginBottom: '1.5rem' }}>
            Defining elegance since 1995. We offer the finest selection of gold and diamond jewelry.
          </p>
          <div className="flex gap-4">
            <Facebook size={20} color="#888" style={{ cursor: 'pointer' }} />
            <Instagram size={20} color="#888" style={{ cursor: 'pointer' }} />
            <Twitter size={20} color="#888" style={{ cursor: 'pointer' }} />
          </div>
        </div>
        
        <div>
          <h4 style={{ color: 'var(--color-white)', marginBottom: '1.5rem' }}>Quick Links</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: '#888' }}>
            <li><a href="/shop">Shop Collection</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: 'var(--color-white)', marginBottom: '1.5rem' }}>Contact Us</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#888' }}>
            <li className="flex items-center gap-2"><MapPin size={18} /> Gold Souk, Dubai, UAE</li>
            <li className="flex items-center gap-2"><Phone size={18} /> +971 4 123 4567</li>
            <li className="flex items-center gap-2"><Mail size={18} /> info@shahidjewelers.com</li>
          </ul>
        </div>
      </div>
      
      <div className="container text-center" style={{ borderTop: '1px solid #222', paddingTop: '2rem', color: '#555' }}>
        <p>&copy; {new Date().getFullYear()} Shahid Jewelers. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
