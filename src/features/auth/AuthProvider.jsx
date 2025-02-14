import React, { createContext, useState, useEffect } from 'react';
import { supabase, recordLogin } from '../../supabaseClient';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setSession(session);
        if (session?.user?.email) {
          if (!localStorage.getItem('loginRecorded')) {
            try {
              await recordLogin(session.user.email, import.meta.env.VITE_PUBLIC_APP_ENV);
              localStorage.setItem('loginRecorded', 'true');
            } catch (error) {
              console.error('Failed to record login:', error);
            }
          }
        }
      } catch (error) {
        console.error('Error fetching session:', error);
      }
    };

    getUser();
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session?.user?.email) {
        if (!localStorage.getItem('loginRecorded')) {
          recordLogin(session.user.email, import.meta.env.VITE_PUBLIC_APP_ENV)
            .then(() => localStorage.setItem('loginRecorded', 'true'))
            .catch(error => console.error('Failed to record login:', error));
        }
      } else {
        localStorage.removeItem('loginRecorded');
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      setSession(null);
      localStorage.removeItem('loginRecorded');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ session, setSession, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;