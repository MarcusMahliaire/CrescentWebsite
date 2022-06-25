import React from 'react'
import './possibility.css'
import greenHouse from '../../assets/greenhouse.jpg'

const Possibility = () => {
  return (
    <div className="website__possibility section__padding fade-in-bottom" id="possibility" >
      <div className="website__possibility-image">
        <img src={greenHouse} alt="wood shop" />
      </div>
      <div className="website__possibility-content">
        <h4>Request an item</h4>
        <h1 className="gradient__text">Looking for some food?</h1>
        <p>Because everyone should have something to eat</p>
        <h4>Ask Us About It!</h4>
      </div>
    </div>
  )
}

export default Possibility