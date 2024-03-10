import './App.css'
import { Outlet } from 'react-router-dom'
import React, { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';

import Navbar from './components/Navbar'

const App = () => {
  const {theme}= useContext(ThemeContext);
  return (
    <div className={`App ${theme === "dark"?"dark-theme":""}`}>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
