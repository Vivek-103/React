import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className='flex justify-center gap-5 font-sans'>
        <Link className='text-blue-300' to='/product/men'>Mens</Link>
        <Link className='text-pink-300' to='/product/women'>Womens</Link>
        </div>
        <h1 className='text-7xl font-extrabold underline flex justify-center items-center'>Product Page</h1>
    </div>
  )
}

export default Product