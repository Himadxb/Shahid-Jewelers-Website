import React, { createContext, useState, useContext, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback((message, type = 'success') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeNotification(id);
    }, 3000);
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
      <div style={{
        position: 'fixed',
        top: '80px', // Below navbar
        right: '20px',
        zIndex: 2000,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        pointerEvents: 'none' // Allow clicking through the container
      }}>
        <AnimatePresence>
          {notifications.map(notification => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.9 }}
              layout
              style={{
                backgroundColor: 'rgba(20, 20, 20, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--color-gold-primary)',
                borderRadius: '8px',
                padding: '1rem',
                minWidth: '300px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                pointerEvents: 'auto',
                color: 'white'
              }}
            >
              {notification.type === 'success' ? (
                <CheckCircle color="var(--color-gold-primary)" size={20} />
              ) : (
                <AlertCircle color="#F44336" size={20} />
              )}
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '0.9rem', fontWeight: '500' }}>{notification.message}</p>
              </div>
              <button 
                onClick={() => removeNotification(notification.id)}
                style={{ background: 'transparent', color: '#888', padding: '4px' }}
              >
                <X size={16} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </NotificationContext.Provider>
  );
};
