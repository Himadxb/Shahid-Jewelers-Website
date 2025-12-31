import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, User, Package } from 'lucide-react';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) return null;

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error("Failed to logout", error);
    }
  };

  return (
    <div className="container section-padding">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="flex justify-between items-center" style={{ marginBottom: '3rem', borderBottom: '1px solid #333', paddingBottom: '2rem' }}>
          <div className="flex items-center gap-4">
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <User size={40} color="var(--color-gold-primary)" />
            </div>
            <div>
              <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{user.displayName || user.name || 'User'}</h1>
              <p style={{ color: '#888' }}>{user.email}</p>
            </div>
          </div>
          <button onClick={handleLogout} className="btn btn-outline flex items-center gap-2">
            <LogOut size={18} /> Logout
          </button>
        </div>

        <div>
          <h2 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Package color="var(--color-gold-primary)" /> Order History
          </h2>
          
          <div style={{ backgroundColor: '#111', padding: '3rem', borderRadius: '8px', textAlign: 'center', color: '#666' }}>
            <p>No orders found.</p>
            <a href="/shop" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>Start Shopping</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
