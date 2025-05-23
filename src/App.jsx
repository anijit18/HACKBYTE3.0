import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import NavBar from './components/NavBar'
import FeaturedProfiles from './components/FeaturedProfiles'
import Footer from './pages/Footer'
import LoginPage from './pages/Login'
import ContactUs from './pages/Contact'
import AboutUs from './pages/About'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import ChatPage from './pages/ChatPage'

function App() {

  return (
    <>
       <BrowserRouter>
       <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/chatpage" element={<ChatPage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
