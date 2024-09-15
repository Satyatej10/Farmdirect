import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await fetch('https://farmdirectserver.vercel.app/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      navigate('/second');
    } else {
      alert('Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e0d7af] px-4 py-12">
      <div className="bg-[#3e0d7af] p-8 rounded-lg shadow-lg w-full max-w-md"
        style={{ boxShadow: '0 8px 16px rgba(0, 128, 128, 0.5)' }}>
        <h2 className="text-2xl font-bold text-center text-teal-800 mb-6">Login</h2>
        <form autoComplete="off">
          <div className="space-y-4">
            <input
              type="email"
              name="login-email"
              id="unique-email-id"
              placeholder="Email"
              className="w-full p-3 bg-[#e0d7af] border-b-2 outline-none border-teal-800 text-teal-800 placeholder-yellow-600"
              onChange={e => setEmail(e.target.value)}
              autoComplete="new-email"
            />
            <input
              type="password"
              name="login-password"
              id="unique-password-id"
              placeholder="Password"
              className="w-full p-3 bg-[#e0d7af] border-b-2 outline-none border-teal-800 text-teal-800 placeholder-yellow-600"
              onChange={e => setPassword(e.target.value)}
              autoComplete="new-password"
            />
            <br />
            <button
              type="button" // Ensure button is of type button to prevent form submission
              onClick={handleLogin}
              className="w-full bg-teal-800 text-white p-3 rounded-lg hover:bg-teal-700 transition duration-300"
            >
              Login
            </button>
            <div className='flex justify-between mt-4'>
              <p className='text-teal-800'>I don't have an account</p>
              <Link to='/signup'>
                <p className='text-teal-800 underline'>Signup</p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
