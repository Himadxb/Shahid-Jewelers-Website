import React from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (user) {
      navigate('/checkout');
    } else {
      // Redirect to login with a return url
      navigate('/login?redirect=/checkout');
    }
  };

  if (cart.length === 0) {
    return (
      <div className="container section-padding text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ marginBottom: '1rem' }}>Your Cart is Empty</h1>
        <p style={{ color: '#888', marginBottom: '2rem' }}>Looks like you haven't added anything yet.</p>
        <Link to="/shop" className="btn btn-primary">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container section-padding">
      <h1 style={{ marginBottom: '3rem' }}>Shopping Cart</h1>
      
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
        {/* Cart Items */}
        <div className="flex" style={{ flexDirection: 'column', gap: '2rem' }}>
          {cart.map(item => (
            <div key={item.id} className="flex gap-4" style={{ backgroundColor: '#111', padding: '1.5rem', borderRadius: '8px', alignItems: 'center' }}>
              <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '4px' }} />
              
              <div style={{ flex: 1 }}>
                <h3 style={{ marginBottom: '0.5rem' }}>{item.name}</h3>
                <p style={{ color: 'var(--color-gold-primary)', fontWeight: 'bold' }}>{item.price.toLocaleString()} AED</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2" style={{ backgroundColor: '#222', borderRadius: '4px', padding: '0.2rem' }}>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ padding: '0.5rem', color: 'white', background: 'transparent' }}><Minus size={16} /></button>
                  <span style={{ width: '20px', textAlign: 'center' }}>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ padding: '0.5rem', color: 'white', background: 'transparent' }}><Plus size={16} /></button>
                </div>
                <button onClick={() => removeFromCart(item.id)} style={{ color: '#F44336', background: 'transparent', padding: '0.5rem' }}>
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
          <button onClick={clearCart} style={{ alignSelf: 'flex-start', color: '#888', background: 'transparent', textDecoration: 'underline', marginTop: '1rem' }}>Clear Cart</button>
        </div>

        {/* Order Summary */}
        <div style={{ backgroundColor: '#111', padding: '2rem', borderRadius: '8px', height: 'fit-content' }}>
          <h2 style={{ marginBottom: '2rem' }}>Order Summary</h2>
          <div className="flex justify-between" style={{ marginBottom: '1rem', color: '#ccc' }}>
            <span>Subtotal</span>
            <span>{cartTotal.toLocaleString()} AED</span>
          </div>
          <div className="flex justify-between" style={{ marginBottom: '1rem', color: '#ccc' }}>
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between" style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #333', fontSize: '1.2rem', fontWeight: 'bold' }}>
            <span>Total</span>
            <span style={{ color: 'var(--color-gold-primary)' }}>{cartTotal.toLocaleString()} AED</span>
          </div>
          <button 
            className="btn btn-primary" 
            onClick={handleCheckout}
            style={{ width: '100%', marginTop: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
          >
            Checkout <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
