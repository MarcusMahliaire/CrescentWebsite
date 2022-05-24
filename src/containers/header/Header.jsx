import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import Field from '../../assets/field.mp4'

const Header = () => {

  return (
    <div className="website__header section__margin fade-in-bottom" id="home">
      <div className="website__header-content">
        <h1>Welcome to Crescent, Where We Strive To Make Farming Easier.</h1>
        <p>We Assist In Making Food Production More Reliable.</p>
        <div className="website__header-content__people">
          <img src={people} alt="face img"/>
          <p>260 people have inquired about a product in the last 30 days</p>
        </div>
        <div className="website__header-video">
          <video autoPlay loop muted
          style={{
            objectFit: "cover",
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: "0",
            left: "0",
            overflow: 'hidden',
            zIndex: -1,
          }}>
            <source src={Field} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}

export default Header

/*<div className="website__header-video">
          <video autoPlay loop muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectfit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: -1,
          }}>
            <source src={Field} type="video/mp4" />
          </video>
        </div>*/