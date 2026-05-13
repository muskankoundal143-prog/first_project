import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-white shadow-sm">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
   
        <h1 className="text-2xl font-bold text-gray-800">
          Mindful Adroit
        </h1>


        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-gray-700 font-medium">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/corporatetraining">Corporate Training</Link></li>
            <li><Link to="/technicaltraining">Technical Training</Link></li>
            <li><Link to="/travelservices">Travel Services</Link></li>
            <li><Link to="/ourservices">Our Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

   
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

    
      {open && (
        <div className="md:hidden bg-white px-6 pb-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li><Link onClick={() => setOpen(false)} to="/">Home</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/corporatetraining">Corporate Training</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/technicaltraining">Technical Training</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/travelservices">Travel Services</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/ourservices">Our Services</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/about">About</Link></li>
            <li><Link onClick={() => setOpen(false)} to="/contact">Contact</Link></li>
          </ul>
        </div>
      )}

    </header>
  )
}