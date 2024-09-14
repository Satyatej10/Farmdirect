import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [user, setUser] = useState('');
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate(); 

  const submithandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/register', { name: user, email: mail, password: pass })
    .then(res => {
      navigate('/login');
    })
    .catch(err => console.error(err.response.data));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 to-blue-600 flex items-center justify-center p-6">
      <form className="bg-white shadow-md rounded-lg p-8 max-w-md w-full space-y-6" onSubmit={submithandler}>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Create an Account</h2>

        <div className="relative">
          <input
            type="text"
            value={user}
            className={`w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out peer ${
              user ? 'pt-6' : ''
            }`}
            onChange={(e) => setUser(e.target.value)}
          />
          <label
            className={`absolute left-4 top-3 text-sm font-medium text-gray-500 transition-all duration-300 ease-in-out pointer-events-none
              ${user ? '-top-2 text-xs text-teal-500' : 'peer-focus:-top-2 peer-focus:text-xs peer-focus:text-teal-500'}`}
          >
            Name
          </label>
        </div>

        <div className="relative">
          <input
            type="email"
            value={mail}
            className={`w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out peer ${
              mail ? 'pt-6' : ''
            }`}
            onChange={(e) => setMail(e.target.value)}
          />
          <label
            className={`absolute left-4 top-3 text-sm font-medium text-gray-500 transition-all duration-300 ease-in-out pointer-events-none
              ${mail ? '-top-2 text-xs text-teal-500' : 'peer-focus:-top-2 peer-focus:text-xs peer-focus:text-teal-500'}`}
          >
            Email
          </label>
        </div>

        <div className="relative">
          <input
            type="password"
            value={pass}
            className={`w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out peer ${
              pass ? 'pt-6' : ''
            }`}
            onChange={(e) => setPass(e.target.value)}
          />
          <label
            className={`absolute left-4 top-3 text-sm font-medium text-gray-500 transition-all duration-300 ease-in-out pointer-events-none
              ${pass ? '-top-2 text-xs text-teal-500' : 'peer-focus:-top-2 peer-focus:text-xs peer-focus:text-teal-500'}`}
          >
            Password
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-teal-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
