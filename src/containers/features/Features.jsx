import React from 'react'
import './features.css'
import {Feature} from '../../components';


const Features = () => {

  const featuresData = [
    {
      title: 'Wheat Grass',
      text: 'Growing the finest Wheat Grass of all the lands'
    },
    {
      title: 'Green House',
      text: 'Cheap but efficient growing process'
    },
    {
      title: 'Hydroponics',
      text: 'Not really hydroponics but we use water and robots'
    },
    {
      title: 'Automation',
      text: 'Taking the labor out of farming and just providing foodS'
    },
  ]
  

  return (
    <div className="website__features section__padding fade-in-bottom" id="features">
      <div className="website__features-heading">
        <h1>Bringing Food Back to The World And The Camels.</h1>
        <p>Link for future purposes</p>
      </div>
      <div className="website__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features