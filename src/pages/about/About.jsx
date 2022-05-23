import React from 'react'
import './about.css'
//import {Link} from 'react-router-dom';

const About = () => {

  return (
    <div className="website__about section__padding">
      <a href="http://localhost:3000/">
        <button className="website__btn" type="button">
          THIS IS THE ABOUT PAGE!
        </button>
      </a>
    </div>
  )
}

export default About

/*<div className="website__about section__padding">
      <Link to="/">
        <button className="website__btn" type="button">
          THIS IS THE ABOUT PAGE!
        </button>
      </Link>
    </div>*/