import React from 'react'
import './features.css'
import {Feature} from '../../components';


const Features = () => {

  const featuresData = [
    {
      title: 'Vegetables',
      text: 'Growing nutritious reliable vegetables'
    },
    {
      title: 'Green House',
      text: 'Efficient and effective growing process'
    },
    {
      title: 'Hydroponics',
      text: 'Working around rain fall'
    },
    {
      title: 'Automation',
      text: 'Consistent reliable vegetables without the hard labor'
    },
  ]
  

  return (
    <div className="website__features section__padding fade-in-bottom" id="features">
      <div className="website__features-heading">
        <h1>Bringing Food Back to The World.</h1>
        {/* <p>Link for future purposes</p> */}
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