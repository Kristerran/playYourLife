import React, { useState } from 'react';

export default function Sliders() {
  const [sliderValues, setSliders] = useState({
    stress: 100,
    energy: 100,
    social: 100,
    fun: 100,
    selfCare: 100,
  });
  const quests = [
    {
      name: 'low energy high stress',
      stressLow: 150,
      stressHigh: 201,
      energyLow: -1,
      energyHigh: 50,
      // socialLow: 50,
      // socialHigh: 200,
      // funLow: 20,
      // funHigh: 200,
      // selfCareLow: 1,
      // selfCareHigh: 200,
    },
    {
      name: 'I show up no matter what',
      stressLow: -1,
      stressHigh: 201,
      energyLow: -1,
      energyHigh: 201,
      socialLow: -1,
      socialHigh: 201,
      funLow: -1,
      funHigh: 201,
      selfCareLow: -1,
      selfCareHigh: 201,
    },
    {
      name: 'Low stress high energy',
      stressLow: -1,
      stressHigh: 90,
      energyLow: 50,
      energyHigh: 201,
      socialLow: -1,
      socialHigh: 201,
      funLow: -1,
      funHigh: 201,
      selfCareLow: -1,
      selfCareHigh: 201,
    },
    {
      name: 'You okay?',
      stressLow: 199,
      stressHigh: 201,
      energyLow: -1,
      energyHigh: 1,
      socialLow: -1,
      socialHigh: 1,
      funLow: -1,
      funHigh: 1,
      selfCareLow: -1,
      selfCareHigh: 1,
    },
  ];
  const onChange = (e) =>
    setSliders({ ...sliderValues, [e.target.name]: e.target.value });
  const submitSliders = () => {
    const questOptions = [];
    quests.forEach((element) => {
      if (sliderValues.stress < element.stressLow) {
        return;
      } else if (sliderValues.stress > element.stressHigh) {
        return;
      } else if (sliderValues.energy < element.energyLow) {
        return;
      } else if (sliderValues.energy > element.energyHigh) {
        return;
      } else if (sliderValues.social < element.socialLow) {
        return;
      } else if (sliderValues.social > element.socialHigh) {
        return;
      } else if (sliderValues.fun < element.funLow) {
        return;
      } else if (sliderValues.fun > element.funHigh) {
        return;
      } else if (sliderValues.selfCare < element.selfCareLow) {
        return;
      } else if (sliderValues.selfCare > element.selfCareHigh) {
        return;
      } else questOptions.push(element);
    });
    let quest = questOptions[Math.floor(Math.random() * questOptions.length)];
    console.log(quest.name);
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
            <h5>Self Care</h5>
            <input
              type="range"
              min="0"
              max="200"
              onChange={onChange}
              name="selfCare"
              value={sliderValues.selfCare}
            />
          </li>
          <button onClick={submitSliders} />
        </ul>
      </div>
    </div>
  );
}
