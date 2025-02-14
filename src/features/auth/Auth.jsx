import React, { useState } from 'react';

export function LoginForm() {
  return <div>Login Form Component</div>;
}

export function useAuth() {
  const [session, setSession] = useState({ user: "dummy" });

  function signOut() {
    console.log("signOut function called");
    setSession(null);
  }

  return { session, signOut };
}