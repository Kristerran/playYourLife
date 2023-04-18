import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { QUESTS } from '../../utils/queries';
import Slider from '@mui/material/Slider';
const Sliders = () => {
  const styles = {
    sliderContainerStyle: {
      margin: 'auto',
      width: '90%',
      height: '40vh',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    sliderStyle: {
      height: '40vh',
      maxWidth: '20vw',
      // paddingBottom: '5vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'spaceBetween',
    },
    inputStyle: {
      marginTop: '40px',
    },
  };
  const [sliderValues, setSliders] = useState({
    stress: 100,
    energy: 100,
    social: 100,
    fun: 100,
    selfCare: 100,
  });

  const [currentQuest, setCurrentQuest] = useState({
    title: 'Welcome to Play your life!',
    contents:
      'Enter how you are feeling or your "Stats" for the day with the sliders above. Your first quest will appear here.',
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

  const { loading, data, error } = useQuery(QUESTS, {});
  if (loading) return 'Fetching your Quests';
  if (error) return 'Crit failure, try again';

  const onChange = (e) =>
    setSliders({ ...sliderValues, [e.target.name]: e.target.value });

  const submitSliders = () => {
    const questOptions = [];
    const quests = data.quests;
    console.log(quests);
    quests.forEach((element) => {
      // loop over all quests, check if values are above lowest range for quest and below highest range otherwise do not add quest to daily quests

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
    console.log(currentQuest);

    // next, need to push quest options and current quest to USER

    //Redirect user to quests page until tomorrow.
  };

  return (
    <div className="Sliders">
      <h1>Good morning!</h1>
      <h3>Before we embark on our journey today, take a moment.</h3>
      <h3>How are you feeling today?</h3>
      <div className="sliderContainer" style={styles.sliderContainerStyle}>
        {/* Range sliders for user to choose "stats" for the day. Values are stored in "slider values" state.*/}
        <div className="stressSlider" style={styles.sliderStyle}>
          <h5>Stress</h5>
          <Slider
            min={0}
            max={200}
            aria-label="Stress"
            orientation="vertical"
            onChange={onChange}
            name="stress"
            value={sliderValues.stress}
          />
        </div>
        <div className="energySlider" style={styles.sliderStyle}>
          <h5>Energy</h5>

          <Slider
            min={0}
            max={200}
            aria-label="Energy"
            orientation="vertical"
            onChange={onChange}
            name="energy"
            value={sliderValues.energy}
          />
        </div>
        <div className="socialSlider" style={styles.sliderStyle}>
          <h5>Social</h5>
          <Slider
            min={0}
            max={200}
            aria-label="Energy"
            orientation="vertical"
            onChange={onChange}
            name="social"
            value={sliderValues.social}
          />
        </div>
        <div className="funSlider" style={styles.sliderStyle}>
          <h5>Fun</h5>
          <Slider
            min={0}
            max={200}
            aria-label="Fun"
            orientation="vertical"
            onChange={onChange}
            name="fun"
            value={sliderValues.fun}
          />
        </div>
        <div className="selfCareSlider" style={styles.sliderStyle}>
          <h5>Self Care</h5>
          <Slider
            min={0}
            max={200}
            aria-label="Self Care"
            orientation="vertical"
            onChange={onChange}
            name="selfCare"
            value={sliderValues.selfCare}
          />
        </div>
      </div>
      <button onClick={submitSliders}>Submit</button>
      <h1>{currentQuest.title}</h1>
      <h4>{currentQuest.contents}</h4>
    </div>
  );
};

export default Sliders;