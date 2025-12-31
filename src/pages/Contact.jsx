import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container section-padding">
      <h1 className="text-center" style={{ fontSize: '3rem', marginBottom: '3rem' }}>Contact Us</h1>
      
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
        {/* Contact Info */}
        <div>
          <h2 style={{ marginBottom: '2rem' }}>Get in Touch</h2>
          <div className="flex" style={{ flexDirection: 'column', gap: '2rem' }}>
            <div className="flex items-center gap-4">
              <div style={{ padding: '1rem', backgroundColor: '#222', borderRadius: '50%' }}>
                <MapPin color="var(--color-gold-primary)" />
              </div>
              <div>
                <h4 style={{ color: 'var(--color-white)' }}>Visit Us</h4>
                <p style={{ color: '#888' }}>Gold Souk, Deira, Dubai, UAE</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div style={{ padding: '1rem', backgroundColor: '#222', borderRadius: '50%' }}>
                <Phone color="var(--color-gold-primary)" />
              </div>
              <div>
                <h4 style={{ color: 'var(--color-white)' }}>Call Us</h4>
                <p style={{ color: '#888' }}>+971 4 123 4567</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div style={{ padding: '1rem', backgroundColor: '#222', borderRadius: '50%' }}>
                <Mail color="var(--color-gold-primary)" />
              </div>
              <div>
                <h4 style={{ color: 'var(--color-white)' }}>Email Us</h4>
                <p style={{ color: '#888' }}>info@shahidjewelers.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{ backgroundColor: '#111', padding: '2rem', borderRadius: '8px' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Send a Message</h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#888' }}>Name</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={{ width: '100%', padding: '1rem', backgroundColor: '#222', border: '1px solid #333', borderRadius: '4px', color: 'white' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#888' }}>Email</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                style={{ width: '100%', padding: '1rem', backgroundColor: '#222', border: '1px solid #333', borderRadius: '4px', color: 'white' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#888' }}>Message</label>
              <textarea 
                rows="4"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                style={{ width: '100%', padding: '1rem', backgroundColor: '#222', border: '1px solid #333', borderRadius: '4px', color: 'white' }}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary flex items-center justify-center gap-2">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
