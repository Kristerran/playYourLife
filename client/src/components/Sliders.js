import { useQuery } from '@apollo/client';
import React, { useState,} from 'react';
import { QUESTS } from '../utils/queries';
const Sliders = () => {
  const [sliderValues, setSliders] = useState({
    stress: 100,
    energy: 100,
    social: 100,
    fun: 100,
    selfCare: 100,
  });

  const [currentQuest, setCurrentQuest] = useState({
    name: 'noQuestYet',
    content:
      'Hello user, bad news, actually... there is no game. I hope you are not too dissapointed. You can still watch tv, go for a walk...',
    stressLow: 0,
    stressHigh: 0,
    energyLow: 0,
    energyHigh: 0,
    socialLow: 0,
    socialHigh: 0,
    funLow: 0,
    funHigh: 0,
    selfCareLow: 0,
    selfCareHigh: 0,
  });
  const onChange = (e) =>
    setSliders({ ...sliderValues, [e.target.name]: e.target.value });
  const submitSliders = () => {
    const questOptions = [];
    const quests = [];
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
    let holdQuest =
      questOptions[Math.floor(Math.random() * questOptions.length)];
    setCurrentQuest(holdQuest);
    console.log(questOptions);
    console.log(currentQuest.name);
  };
  const { loading, data, error } = useQuery(QUESTS, {});
  if (loading) return 'Updating Characters';
  if (error) return 'Crit failure, try again';
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
      <h1>{currentQuest.name}</h1>
      <h4>{currentQuest.content}</h4>
    </div>
  );
};

export default Sliders;
