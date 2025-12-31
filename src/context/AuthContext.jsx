import React, { createContext, useState, useContext, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("AuthProvider: Setting up onAuthStateChanged");
    let mounted = true;
    let timeoutId;

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log("AuthProvider: onAuthStateChanged triggered", user ? "User found" : "No user");
      if (!mounted) return;
      
      // Clear timeout since we got a response
      if (timeoutId) clearTimeout(timeoutId);

      if (user) {
        try {
          // Fetch additional user data from Firestore if needed
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (mounted) {
            if (userDoc.exists()) {
               setUser({ ...user, ...userDoc.data() });
            } else {
               setUser(user);
            }
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          if (mounted) setUser(user);
        }
      } else {
        if (mounted) setUser(null);
      }
      if (mounted) setLoading(false);
    });

    // Safety timeout: If Firebase takes too long, stop loading
    timeoutId = setTimeout(() => {
      if (mounted && loading) {
        console.warn("AuthProvider: Firebase auth timed out, forcing loading false");
        setLoading(false);
      }
    }, 2000);

    return () => {
      mounted = false;
      unsubscribe();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const signup = async (email, password, name) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Update profile display name
    await updateProfile(user, { displayName: name });
    
    // Create user document in Firestore
    await setDoc(doc(db, "users", user.uid), {
      name,
      email,
      createdAt: new Date().toISOString(),
      role: 'customer'
    });
    
    return user;
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, loading }}>
      {loading ? (
        <div style={{ 
          height: '100vh', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          backgroundColor: '#111', 
          color: 'var(--color-gold-primary)' 
        }}>
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
