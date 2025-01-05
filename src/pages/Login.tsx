import React from 'react';
import { LoginForm } from '../components/auth/LoginForm';

export function Login() {
  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Sign In</h1>
        <LoginForm />
      </div>
    </div>
  );
}