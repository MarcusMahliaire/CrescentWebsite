import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { Home, About, NoPage } from './pages';


const App = () => {
  return (
    <BrowserRouter className="app">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App