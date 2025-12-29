import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-8 px-4 bg-[#feb05d]'>
      <h2 className='text-xl font-bold'>FullStack Developer</h2>
      <div className='flex gap-8'></div>
      <Link className='text-lg font-bold' to='/'>Home</Link>
      <Link className='text-lg font-bold' to='/about'>About</Link>
      <Link className='text-lg font-bold' to='/product'>Product</Link>
    
    </div>
  )
}

export default Navbar