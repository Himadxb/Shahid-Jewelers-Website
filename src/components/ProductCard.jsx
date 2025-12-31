import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNotification } from '../context/NotificationContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { addNotification } = useNotification();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    addNotification(`${product.name} added to cart!`);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ 
        backgroundColor: 'var(--color-dark-gray)', 
        borderRadius: 'var(--border-radius)', 
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div style={{ height: '300px', overflow: 'hidden', position: 'relative' }}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        />
        {/* Quick overlay effect */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
          opacity: 0,
          transition: 'opacity 0.3s'
        }} 
        onMouseOver={(e) => e.currentTarget.style.opacity = 1}
        onMouseOut={(e) => e.currentTarget.style.opacity = 0}
        />
      </div>
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-white)' }}>{product.name}</h3>
          <p style={{ color: 'var(--color-gold-primary)', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            {product.price.toLocaleString()} AED
          </p>
        </div>
        
        <motion.button 
          className="btn" 
          onClick={handleAddToCart}
          whileTap={{ scale: 0.95 }}
          style={{ 
            width: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '0.5rem',
            backgroundColor: isAdded ? '#4CAF50' : 'transparent',
            border: isAdded ? '1px solid #4CAF50' : '1px solid var(--color-gold-primary)',
            color: isAdded ? 'white' : 'var(--color-gold-primary)',
            transition: 'all 0.3s'
          }}
        >
          <AnimatePresence mode="wait">
            {isAdded ? (
              <motion.div
                key="check"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Check size={18} /> Added
              </motion.div>
            ) : (
              <motion.div
                key="cart"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <ShoppingCart size={18} /> Add to Cart
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
