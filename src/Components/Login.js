import React, { useState } from 'react';
import './Login.css';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../States/index';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const action = bindActionCreators(actionCreators, dispatch);
  const [signInMode, setSignInMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password
    };

    try {
      let response;
      if (signInMode) {
        response = await fetch('http://localhost:8000/users/login/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        });
      } else {
        response = await fetch('http://localhost:8000/users/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        });
      }

      if (signInMode && response.ok) {
        const data = await response.json();
        action.Login(data.token);
        navigate('/Checkout');
      } 
      else if(!signInMode && response.ok) {
        setErrorMessage('Registered successfully!');
      }
      else
      {
        const errorData = await response.json();
        setErrorMessage(errorData.error || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Something went wrong');
    }
  };

  const toggleMode = () => {
    setSignInMode((prevMode) => !prevMode);
    setErrorMessage('');
  };

  return (
    <div className="login-container">
      <div className="form-box">
        {errorMessage && <p>{errorMessage}</p>}
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">
              {signInMode ? 'Sign In' : 'Register'}
            </button>
            <button type="button" className="signIn" onClick={toggleMode}>
              {signInMode ? 'Register' : 'Sign In'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
