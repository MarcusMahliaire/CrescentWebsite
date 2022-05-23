import React, { useState } from 'react';
import LoginForm from './LoginForm';
import './login.css';

const Login = () => {
  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin123',
  };

  const [setUser] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const Login = (details) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log('Logged in');
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log('Details do not match!');
      setError('Details do not match!');
    }
  };

  return (
    <div>
        <LoginForm Login={Login} error={error} />
    </div>
  );
};

export default Login;