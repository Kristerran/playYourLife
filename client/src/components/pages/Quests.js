import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { ME } from '../../utils/queries';
const Quests = () => {
  const { loading, data, error } = useQuery(ME, {});
  if (loading) return 'Fetching your Quests';
  if (error) return 'Crit failure, try again';

  const me = data?.me || [];
  console.log(me);
  return (
    <div className="Quests">
      <h1>QUESTS PAGE</h1>
      <div>
        <Link to="/sliders">SLIDERS</Link>
      </div>
      <div>
        <Link to="/">LANDING</Link>
      </div>
      <div>
        <p>{me.currentQuests}</p>
      </div>
    </div>
  );
};

export default Quests;
