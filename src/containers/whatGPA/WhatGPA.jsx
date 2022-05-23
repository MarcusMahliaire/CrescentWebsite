import React from 'react';
import './whatGPA.css';
import { Feature } from '../../components';
import grapes from '../../assets/grapes.jpg'


const WhatGPA = () => {
  return (
    <div className="website__whatgpa section__margin fade-in-bottom" id="wgpa">
      <div className="website__whatgpa-feature">
        <Feature title="What is Crescent?" text="Family Owned Agricultural Robotics Company."/>
      </div>
        <div className="website__whatgpa-heading">
          <h1 className="gradient__text" >Farming For You So You Can Focus On Whats Important.</h1>
          <img src={grapes} alt="cutting board" />
        </div>
      <div className="website__whatgpa-container">
        <Feature title="Wheat Grass" text="Organic Wheat Grass" />
        <Feature title="Automation" text="Automated Farming System" />
        <Feature title="Greenhouses" text="All in Green Houses" />
      </div>
    </div>
  )
}

export default WhatGPA