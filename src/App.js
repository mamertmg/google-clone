import React, {useState} from 'react'
import {Routes, Route} from "react-router-dom";

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Results from './components/Results'

const App =() => {

  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Routes className="p-4">
          <Route path="/" element={<Results/>} />
          <Route path="/search" element={<Results/>} />
          <Route path="/image" element={<Results />} />
          <Route path="/news" element={<Results />} />
          <Route path="/videos" element={<Results />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
