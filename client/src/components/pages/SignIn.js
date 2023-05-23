import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
const SignIn = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || '/roster';
  const [loginCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [login, { error, data, loading }] = useMutation(LOGIN);
  const onChange = (e) =>
    setCredentials({ ...loginCredentials, [e.target.name]: e.target.value });

  const loginProcess = async () => {
    if (loginCredentials.email && loginCredentials.password) {
      const { email, password } = loginCredentials;
      const { data } = await login({
        variables: {
          email,
          password,
        },
      });
      if (data.login.token) {
        localStorage.setItem('id_token', data.login.token);
      }
      if (data.login.user._id) {
        localStorage.setItem(
          'characters',
          JSON.stringify(data.login.user.characters)
        );
        // navigate(from, { replace: true });
        window.location.assign('/');
      }
    }
  };
  return (
    <div className="Landing Page">
      <h1>SIGN IN PAGE</h1>
      <div>
        <Link to="/">LANDING</Link>
      </div>
      <div>
        <Link to="/signup">SIGNUP</Link>
      </div>
      <div>
        <h6>Login</h6>
        <input
          onChange={onChange}
          type="text"
          name="email"
          value={loginCredentials.email}
          placeholder="Email"
        />
        <input
          onChange={onChange}
          type="password"
          name="password"
          value={loginCredentials.password}
          placeholder="Password"
        />
        <button type="submit" onClick={loginProcess}>
          Login
        </button>
      </div>
    </div>
  );
};

export default SignIn;
