import React from 'react'
import './possibility.css'
import drone from '../../assets/drone.jpg'

const Possibility = () => {
  return (
    <div className="website__possibility section__padding fade-in-bottom" id="possibility" >
      <div className="website__possibility-image">
        <img src={drone} alt="wood shop" />
      </div>
      <div className="website__possibility-content">
        <h4>Request an item</h4>
        <h1 className="gradient__text">Looking for a cost to split costs?</h1>
        <p>Because why wouldnt you want to know your plants will be watered on time every day?</p>
        <h4>Ask Us About It!</h4>
      </div>
    </div>
  )
}

export default Possibility