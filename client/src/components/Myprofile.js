import React, { useState, useContext, useEffect } from 'react';
import { store } from '../App';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUserCircle } from 'react-icons/fa'; 
import { FiLogOut } from 'react-icons/fi'; 

const Myprofile = () => {
  const [token, setToken] = useContext(store);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      axios.get('http://localhost:4000/myprofile', {
        headers: {
          'x-token': token
        }
      })
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        if (err.response && err.response.status === 401) {
          // Token expired or invalid
          localStorage.removeItem('token');
          setToken(null);
          navigate('/login');
        } else {
          setError('An error occurred while fetching your profile.');
        }
      });
    } else {
      setLoading(false);
    }
  }, [token, navigate, setToken]);

  // Redirect if no token
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Logout function
  const logout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    setToken(null); // Clear token from context
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 flex flex-col items-center p-6">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : data && (
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md space-y-6">
          <div className="flex flex-col items-center">
            <FaUserCircle className="text-gray-500 text-6xl mb-4" /> {/* User Icon */}
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{data.name}</h1>
            <p className="text-gray-600 mb-4">{data.email}</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-700">Account Details</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Member since: {data.createdAt ? new Date(data.createdAt).toLocaleDateString() : 'N/A'}</li>
              <li>Last login: {data.lastLogin ? new Date(data.lastLogin).toLocaleDateString() : 'N/A'}</li>
              {/* Add more user details if available */}
            </ul>
          </div>
          <div className="flex justify-end">
            <button 
              onClick={logout}
              className="flex items-center bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-300 ease-in-out"
            >
              <FiLogOut className="mr-2" /> Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Myprofile;
