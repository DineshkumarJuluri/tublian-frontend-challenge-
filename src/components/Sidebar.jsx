import React from 'react'
import './Sidebar.css'
import logo from "../assets/logo.png"
import { MdDashboard } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { MdPeople } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import { MdOutlinePermMedia } from "react-icons/md";
import { MdContactSupport } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { MdOutlineLogout } from "react-icons/md";




const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={logo} alt="" />
      <ul >
        <li className='active'><MdDashboard fontSize={20} />&nbsp; Dashboard</li>
        <li> <SiSimpleanalytics fontSize={20} />&nbsp; Analytics</li>
        <li><MdPeople fontSize={20} />&nbsp; Communities</li>
        <li><CiBellOn fontSize={20} />&nbsp; Notifications</li>
        <li><MdOutlinePermMedia fontSize={20} />&nbsp; Media</li>
        <li><MdContactSupport fontSize={20} />&nbsp; Support</li>
        <li><CiSettings fontSize={20} />&nbsp; Settings</li>
      </ul>
      <h4 className='logout'><MdOutlineLogout fontSize={20} /> Logout</h4>
    </div>
  )
}

export default Sidebar