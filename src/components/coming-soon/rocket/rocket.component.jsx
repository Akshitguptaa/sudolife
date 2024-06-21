import React from 'react';
import './rocket.styles.scss';
import rocketImage from '../../../assets/rocket.png'; 

const Rocket = () => {
  return (
    <img src={rocketImage} className="rocket" alt="rocket" />
  );
};

export default Rocket;
