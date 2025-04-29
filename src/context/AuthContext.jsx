"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const signInWithPhone = async (phoneNumber) => {
    // Mock OTP sending
    return new Promise((resolve) => {
      // Simulate API delay
      setTimeout(() => {
        // For prototype, we'll use a fixed OTP: 123456
        resolve({
          confirm: (otp) => {
            if (otp === '123456') {
              const user = {
                phoneNumber,
                uid: `user_${Date.now()}`,
              };
              setUser(user);
              localStorage.setItem('user', JSON.stringify(user));
              return Promise.resolve({ user });
            }
            return Promise.reject(new Error('Invalid OTP'));
          }
        });
      }, 1000);
    });
  };

  const verifyOTP = async (confirmationResult, otp) => {
    return confirmationResult.confirm(otp);
  };

  const signOut = async () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      signInWithPhone,
      verifyOTP,
      signOut
    }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
}; 