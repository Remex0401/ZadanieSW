import React from 'react';
import './globals.css';

export default function Page() {
  return (
//Navbar 
  <header className="fixed top-0 left-0 w-full bg-white">
    <div className="items-center justify-between p-8 flex mx-auto max-w-9/10">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src="/logo.png" 
        alt="Logo" 
        className=" h-20 w-auto" />
      </div>
      {/* Filter buttons */}
      <div className="flex items-center space-x-6">
        <label className="inline-flex items-center cursor-pointer space-x-2">
          <input type="checkbox" className="sr-only peer" />
          <span className="
            block h-8 w-8 border-2 rounded border-gray-300
            peer-checked:before:content-['✔']
            peer-checked:before:flex peer-checked:before:items-center peer-checked:before:justify-center
            peer-checked:before:text-black
            peer-checked:border-black
          "/>
          <span className="text-gray-700 text-2xl">Active</span>
        </label>

        <label className="inline-flex items-center cursor-pointer space-x-2">
          <input type="checkbox" className="sr-only peer" />
          <span className="
            block h-8 w-8 border-2 rounded border-gray-300
            peer-checked:before:content-['✔']
            peer-checked:before:flex peer-checked:before:items-center peer-checked:before:justify-center
            peer-checked:before:text-black
            peer-checked:border-black
          "/>
          <span className="text-gray-700 text-2xl">Promo</span>
        </label>

        {/* Search bar*/}
         <div className="relative flex-shrink-0">        
          <input type="text" 
            placeholder="Search" 
            className="border-2 border-gray-300 rounded-[8] px-3 py-4 focus:outline-none focus:border-gray-950  focus:placeholder:text-gray-300 w-150 placeholder:text-gray-950" />
          <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            className="   absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-950 pointer-events-none">
          <path stroke-linecap="round" 
            stroke-linejoin="round" 
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>

      </div>

      {/* Login button*/}
      <div className="flex items-center space-x-8">
        <button className="bg-white border-blue-500 border-2 text-blue-500 px-6 py-3 rounded-[8] hover:bg-blue-100 hover:text-blue-400 hover:border-blue-400">
          Log in
        </button>
      </div>
    </div>
  </header>

  )
}
