import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      signup(email, password, name);
      navigate('/profile');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container section-padding flex items-center justify-center" style={{ minHeight: '60vh' }}>
      <div style={{ width: '100%', maxWidth: '400px', backgroundColor: '#111', padding: '2rem', borderRadius: '8px' }}>
        <h1 className="text-center" style={{ marginBottom: '2rem' }}>Sign Up</h1>
        {error && <div style={{ color: '#F44336', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#888' }}>Full Name</label>
            <input 
              type="text" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: '100%', padding: '1rem', backgroundColor: '#222', border: '1px solid #333', borderRadius: '4px', color: 'white' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#888' }}>Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '1rem', backgroundColor: '#222', border: '1px solid #333', borderRadius: '4px', color: 'white' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#888' }}>Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '1rem', backgroundColor: '#222', border: '1px solid #333', borderRadius: '4px', color: 'white' }}
            />
          </div>
          <button type="submit" className="btn btn-primary">Create Account</button>
        </form>
        <p className="text-center" style={{ marginTop: '1.5rem', color: '#888' }}>
          Already have an account? <Link to="/login" style={{ color: 'var(--color-gold-primary)' }}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
