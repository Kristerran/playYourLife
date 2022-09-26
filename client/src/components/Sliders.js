import React, { useState } from 'react';

export default function Sliders() {
  const [sliderValues, setSliders] = useState({
    stress: 100,
    energy: 100,
    social: 100,
    fun: 100,
    hygene: 100,
  });
  const onChange = (e) =>
    setSliders({ ...sliderValues, [e.target.name]: e.target.value });
  const submitSliders = () => {
    console.log(sliderValues);
  };
  return (
    <div className="Sliders">
      <div>
        <h1>WELCOME TO PYL</h1>
        <ul>
          <h3>Starting stats for day</h3>
          <li>
            <h5>Stress</h5>
            <input
              type="range"
              min="0"
              max="200"
              onChange={onChange}
              name="stress"
              value={sliderValues.stress}
            />
          </li>
          <li>
            <h5>Energy</h5>
            <input
              type="range"
              min="0"
              max="200"
              onChange={onChange}
              name="energy"
              value={sliderValues.energy}
            />
          </li>
          <li>
            <h5>Social</h5>
            <input
              type="range"
              min="0"
              max="200"
              onChange={onChange}
              name="social"
              value={sliderValues.social}
            />
          </li>
          <li>
            <h5>Fun</h5>
            <input
              type="range"
              min="0"
              max="200"
              onChange={onChange}
              name="fun"
              value={sliderValues.fun}
            />
          </li>
          <li>
            <h5>hygene</h5>
            <input
              type="range"
              min="0"
              max="200"
              onChange={onChange}
              name="hygene"
              value={sliderValues.hygene}
            />
          </li>
          <button onClick={submitSliders} />
        </ul>
      </div>
    </div>
  );
}
