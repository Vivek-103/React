import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import NotFound from './pages/NotFound';
import Mens from './pages/Mens';
import Women from './pages/Women';



const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/product/Men' element={<Mens/>}/>
        <Route path='/product/Women' element={<Women/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App