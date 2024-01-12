import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header bg-[#F9FAFA]'>
      <div className='mx-[12.5%] sm:  py-10 flex flex-row justify-between items-center'>
        <h1 className=' headerTitle text-[#009292] font-bold text-5xl font-sans'>tether</h1>
        <div className=' flex items-center flex-row gap-10 mt-2 navbar'>
          <a className='hover:underline hover:cursor-pointer text-gray-600 font-medium font-sans'>Why Tether?</a>
          <a className='hover:underline hover:cursor-pointer text-gray-600 font-medium font-sans'>How it works</a>
          <a className='hover:underline hover:cursor-pointer text-gray-600 font-medium font-sans'>News</a>
          <a className='hover:underline hover:cursor-pointer text-gray-600 font-medium font-sans'>Tether gold</a>
          <a className='hover:underline hover:cursor-pointer text-gray-600 font-medium font-sans'>Transparency</a>
          <a className='text-[#c0a161] font-medium font-sans'>Login</a>

          <button className='bg-[#009292] hover:bg-[#1b5f5f] transition-all text-white px-10 py-3 rounded-full font-sans hover:'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Header
