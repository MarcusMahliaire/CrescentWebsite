import React from 'react'
import './brand.css'
import google from '../../assets/google.png'
import shopify from '../../assets/shopify.png'

const Brand = () => {
  return (
    <div className='website__brand section__padding'>
      <div>
      <img src={google} alt="google" />
      </div>
      <div>
      <img src={shopify} alt="shopify" />
      </div>
    </div>
  )
}

export default Brand