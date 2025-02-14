import React from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../../supabaseClient';

const LoginForm = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Sign in with ZAPT</h1>
        <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          Visit ZAPT Marketing
        </a>
      </div>
      <div className="bg-white p-6 rounded shadow-md">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          socialLayout="horizontal"
          providers={['google', 'facebook', 'apple']}
        />
      </div>
    </div>
  );
};

export default LoginForm;