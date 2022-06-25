import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/Crescent.JPG'


const Navbar = () => {

  const Menu = () => (
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="http://localhost:3000/about">About</a></p>
    <p><a href="#possibility">Contact</a></p>
    <p><a href="#features">Products</a></p>
    <p><a href="#blog">Library</a></p>
    </>
  );

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="website__navbar">
      <div className="website__navbar-links">
        <div className="website__navbar-links_logo">
        <a href="http://localhost:3000/">
          <img src={logo} alt="logo" />
        </a>
        </div>
        <div className="website__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="website__navbar-sign">
        <a href="http://localhost:3000">
        <p>Sign in</p>
        </a>
        <button type="button">Sign up</button>
      </div>
      <div className="website__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#000" size={27} onClick= {() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000" size={27} onClick= {() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="website__navbar-menu_container scale-up-center">
            <div className="website__navbar-menu_container-links">
              <Menu />
              <div className="website__navbar-menu_container-links-sign">
                <a href="http://localhost:3000/Login">
                <p>Sign in</p>
                </a>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )
        }
      </div>
    </div>
  )
}

export default Navbar