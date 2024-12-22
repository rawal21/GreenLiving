import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setname] = useState(''); 
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Sending the registration request to the backend
      const response = await axios.post('http://localhost:3000/api/auth/register', {  name, email ,password });
      console.log( "hey i am in sign up  route ",   response.data.token)
      localStorage.setItem('token', response.data.token); 
      
      
      alert("sucesfuuly registered");  
      navigate('/Dashboard');  
    } catch (err) {
      
      if (err.response) {
       
        if (err.response.status === 400) {
          setError('Bad Request: Please ensure all fields are filled correctly.');
        } else if (err.response.status === 409) {
          setError('Conflict: Email already in use.');
        } else {
          setError(err.response?.data?.message || 'Registration failed, please try again.');
        }
      } else if (err.request) {
   
        setError('Network error: Unable to reach the server. Please try again later.');
      } else {
       
        setError('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: '350px' }}>
        <h3 className="text-center mb-4">Register</h3>
        
        {/* Display error message if any */}
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label">name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
      
          
          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>

        <div className="mt-3 text-center">
          <p>Have an account? <Link to="/login" className="text-decoration-none">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
