import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { user } = useAuth();
  const { cart, cartTotal } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login?redirect=/checkout');
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="container section-padding">
      <h1 className="text-center" style={{ marginBottom: '2rem' }}>Checkout</h1>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#111', padding: '2rem', borderRadius: '8px' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Payment Details</h2>
        <p style={{ marginBottom: '1rem', color: '#888' }}>
          This is a secure payment gateway. (Placeholder)
        </p>
        
        <div style={{ marginBottom: '2rem', padding: '1rem', backgroundColor: '#222', borderRadius: '4px' }}>
          <div className="flex justify-between" style={{ marginBottom: '0.5rem' }}>
            <span>Total Amount:</span>
            <span style={{ color: 'var(--color-gold-primary)', fontWeight: 'bold' }}>{cartTotal.toLocaleString()} AED</span>
          </div>
          <div className="flex justify-between">
            <span>Items:</span>
            <span>{cart.length}</span>
          </div>
        </div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input type="text" placeholder="Card Number" style={{ padding: '1rem', backgroundColor: '#222', border: '1px solid #333', color: 'white', borderRadius: '4px' }} />
          <div className="flex gap-4">
            <input type="text" placeholder="MM/YY" style={{ padding: '1rem', backgroundColor: '#222', border: '1px solid #333', color: 'white', borderRadius: '4px', flex: 1 }} />
            <input type="text" placeholder="CVC" style={{ padding: '1rem', backgroundColor: '#222', border: '1px solid #333', color: 'white', borderRadius: '4px', flex: 1 }} />
          </div>
          <button type="button" className="btn btn-primary" style={{ marginTop: '1rem' }} onClick={() => alert('Payment Successful!')}>
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
