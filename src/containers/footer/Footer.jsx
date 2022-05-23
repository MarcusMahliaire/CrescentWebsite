import React from 'react'
import './footer.css'
import logo from '../../assets/Crescent.JPG';

const Footer = () => {
  return (
    <div className="website__footer section__padding">
      <div className="website__footer-heading">
        <h1 className="gradient__text">Have Questions?</h1>
      </div>
      <div className="website__footer-btn">
        <p>Get in Touch!</p>
      </div>

      <div className="website__footer-links">
        <div className="website__footer-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="website__footer-links_div">
          <h4>Links</h4>
          <p>Social Media</p>
          <p>Products</p>
          <p>Blog</p>
        </div>
        <div className="website__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="website__footer-links_div">
          <h4>Get in Touch</h4>
          <p>Phone Number</p>
          <p>Email</p>
        </div>
      </div>
      <div className="website__footer-copywrite">
        <p>@2022 Crescent Robotics. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer