import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { Home, About, NoPage, Login } from './pages';

import Navbar from './components/navbar/Navbar'
import Footer from './containers/footer/Footer';


const App = () => {
  return (
    <BrowserRouter className="app">
      <div>
        <Navbar />
      </div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About />} />
          <Route path='/Login' element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App