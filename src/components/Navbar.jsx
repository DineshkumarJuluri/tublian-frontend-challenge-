import React from 'react'
import './Navbar.css'
import { CiSearch } from "react-icons/ci";
import profile from '../assets/profile.png'

const Navbar = () => {
  return (
    <div className="Navbar">
      <p className="title">Metrics looking good, Snow!</p>
      <div className="search">
        <CiSearch fontSize={20} />
        <input type="text" placeholder="Search" />
      </div>
      <div className="profile">
        <img src={profile} alt="" />
        <div className="details">
          <p className='name'>Snow Olohijere</p>
          <p className='email'>uch231@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar