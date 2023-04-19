import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
const SignIn = () => {
  return (
    <div className="Landing Page">
      <h1>SIGN IN PAGE</h1>
      <div>
        <Link to="/sliders">SLIDERS</Link>
      </div>
      <div>
        <Link to="/quests">QUESTS</Link>
      </div>
      <div>
        <Link to="/">LANDING</Link>
      </div>
      <div>
        <Link to="/signup">SIGNUP</Link>
      </div>
    </div>
  );
};

export default SignIn;
