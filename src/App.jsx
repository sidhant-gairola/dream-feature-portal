import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Idea from './components/Idea';

function App() {

  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  };

  return (
    <BrowserRouter>
      <Navbar darkMode={darkMode} setDarkMode={toggleDarkMode} />
      <Routes>
        <Route path='/' element={<Home darkMode={darkMode} setDarkMode={toggleDarkMode} />} />
        <Route path='/idea' element={<Idea darkMode={darkMode} setDarkMode={toggleDarkMode} />} />
        <Route path='/contact' element={<Contact darkMode={darkMode} setDarkMode={toggleDarkMode} />} />
        <Route path='/about' element={<About darkMode={darkMode} setDarkMode={toggleDarkMode} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
