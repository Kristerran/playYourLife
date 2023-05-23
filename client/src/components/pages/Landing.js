import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Auth from '../../utils/auth';
const Landing = () => {
  if (Auth.loggedIn())
    return (
      <div className="Landing Page">
        <h1>WELCOME TO PYL</h1>
        <div>
          <Link to="/sliders">SLIDERS</Link>
        </div>
        <div>
          <Link to="/quests">QUESTS</Link>
        </div>
        <button onClick={() => Auth.logout()}>Logout</button>
      </div>
    );
  else {
    return (
      <div className="Landing Page">
        <h1>WELCOME TO PYL</h1>
        <div>
          <Link to="/signin">SIGNIN</Link>
        </div>
        <div>
          <Link to="/signup">SIGNUP</Link>
        </div>
      </div>
    );
  }
};

export default Landing;
