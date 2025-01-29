import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Home from '../components/Home/Home'
import Food from '../components/Food/Food'
import Menu from '../components/Menu/Menu'
const Layout = () => {
  return (
    <div>
        <Header/>
        <Home/>
        <Food/>
        <Routes>
        <Route path="/menu/:id" element={<Menu />} />
      </Routes>
        <Footer/>
    </div>
  )
}

export default Layout