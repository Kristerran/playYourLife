import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
const SignUp = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || '/';
  const [newCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [register, { error, data, loading }] = useMutation(ADD_USER);
  const onChange = (e) =>
    setCredentials({ ...newCredentials, [e.target.name]: e.target.value });

  const registration = async () => {
    //Add regex and validation here
    if (newCredentials.email && newCredentials.password) {
      const { email, password } = newCredentials;
      const { data } = await register({
        variables: {
          email,
          password,
        },
      });
      if (data.addUser.token) {
        localStorage.setItem('id_token', data.addUser.token);
      }
      if (data.addUser.user._id) {
        navigate(from, { replace: true });
      }
    }
  };
  return (
    <div className="Signin">
      <h1>SIGN UP PAGE</h1>
      <div>
        <Link to="/signin">SIGNIN</Link>
      </div>
      <div>
        <Link to="/">LANDING</Link>
      </div>
      <div className="form">
        <div className="form-group">
          <label className="usernameTitle" htmlFor="email">
            Email:
          </label>
          <input
            onChange={onChange}
            type="email"
            name="email"
            value={newCredentials.email}
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label className="passwordTitle" htmlFor="password">
            Password:
          </label>
          <input
            onChange={onChange}
            type="password"
            name="password"
            value={newCredentials.password}
            placeholder="Password"
          />
        </div>
      </div>
      <button type="submit" onClick={registration} className="btn">
        Register
      </button>
    </div>
  );
};

export default SignUp;
