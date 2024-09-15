import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    const response = await fetch('https://farmdirectserver.vercel.app/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    if (response.status === 201) {
      navigate('/login');
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e0d7af] px-4 py-12">
      <div className="bg-[#e0d7af] p-8 rounded-lg shadow-lg w-full max-w-md"
      style={{
        boxShadow: '0 8px 16px rgba(0, 128, 128, 0.5)', 
      }}>
        <h2 className="text-2xl font-bold text-center text-teal-800 mb-6">Signup</h2>
        <form autoComplete="off">
          <div className="space-y-4">
            <input
              type="text"
              name="signup-name"
              id="unique-name-id"
              placeholder="Name"
              className="w-full p-3 bg-[#e0d7af] border-b-2 outline-none border-teal-800 text-teal-800 placeholder-yellow-600"
              onChange={e => setName(e.target.value)}
              autoComplete="new-name"
            />
            <input
              type="email"
              name="signup-email"
              id="unique-email-id"
              placeholder="Email"
              className="w-full p-3 bg-[#e0d7af] border-b-2 outline-none border-teal-800 text-teal-800 placeholder-yellow-600"
              onChange={e => setEmail(e.target.value)}
              autoComplete="new-email"
            />
            <input
              type="password"
              name="signup-password"
              id="unique-password-id"
              placeholder="Password"
              className="w-full p-3 bg-[#e0d7af] border-b-2 outline-none border-teal-800 text-teal-800 placeholder-yellow-600"
              onChange={e => setPassword(e.target.value)}
              autoComplete="new-password"
            />
            <br />
            <button
              onClick={handleSignup}
              className="w-full bg-teal-800 text-white p-3 rounded-lg hover:bg-teal-700 transition duration-300"
            >
              Signup
            </button>
            <div className='flex justify-between'>
            <p className='text-teal-800'>I have already account</p><Link to='/login'><p>Login</p></Link></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
