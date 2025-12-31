import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="container section-padding">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
        style={{ maxWidth: '800px', margin: '0 auto' }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Our Story</h1>
        <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '3rem', lineHeight: '1.8' }}>
          Established in 1995, Shahid Jewelers has been a beacon of trust and elegance in the world of fine jewelry. 
          What started as a small family workshop has grown into a renowned brand, celebrated for its exquisite craftsmanship 
          and timeless designs. We believe that jewelry is not just an accessory, but a legacy passed down through generations.
        </p>
      </motion.div>

      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '4rem' }}>
        <div style={{ backgroundColor: '#111', padding: '2rem', borderRadius: '8px' }}>
          <h3 style={{ color: 'var(--color-gold-primary)', marginBottom: '1rem' }}>Our Mission</h3>
          <p style={{ color: '#888' }}>
            To create masterpieces that celebrate life's most precious moments, ensuring every piece reflects perfection and passion.
          </p>
        </div>
        <div style={{ backgroundColor: '#111', padding: '2rem', borderRadius: '8px' }}>
          <h3 style={{ color: 'var(--color-gold-primary)', marginBottom: '1rem' }}>Our Craft</h3>
          <p style={{ color: '#888' }}>
            Our artisans combine centuries-old techniques with modern innovation to bring you jewelry that is both classic and contemporary.
          </p>
        </div>
        <div style={{ backgroundColor: '#111', padding: '2rem', borderRadius: '8px' }}>
          <h3 style={{ color: 'var(--color-gold-primary)', marginBottom: '1rem' }}>Our Promise</h3>
          <p style={{ color: '#888' }}>
            We guarantee the authenticity and purity of every gemstone and metal, providing you with certification and peace of mind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
