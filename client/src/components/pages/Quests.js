import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
const Quests = () => {
  return (
    <div className="Landing Page">
      <h1>QUESTS PAGE</h1>
      <div>
        <Link to="/sliders">SLIDERS</Link>
      </div>
      <div>
        <Link to="/">LANDING</Link>
      </div>
      <div>
        <Link to="/signin">SIGNIN</Link>
      </div>
      <div>
        <Link to="/signup">SIGNUP</Link>
      </div>
    </div>
  );
};

export default Quests;
