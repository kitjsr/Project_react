import React, { useState } from 'react'

import { FaBars, FaHeart, FaPlus } from "react-icons/fa";
import './App.css';
import { SidebarData } from './SidebarData'
import { NavLink } from 'react-router';

const Sidebar=({children})=>{
        const[isOpen,setIsOpen]=useState(false);
        const toggle=()=>setIsOpen(!isOpen);
  return (
    <div>
      <div style={{width:isOpen ? "250px":"50px"}} className="sidebar">
              <div className='top-section'>
                  <h1 style={{display:isOpen ? "block":"none"}} className='logo'>Vyapar</h1>
                  <div style={{marginLeft:isOpen ? "50px":"0px"}} className='bars'>
                      <FaBars onClick={toggle}/>
                  </div>
              </div>
      <ul className='SidebarList'>
        {SidebarData.map((val,key) => {
        return(
            <li key={key}
            className='row'
             onClick={()=>{window.location.pathname=val.link}}>
                <div id='icon'>{val.icon}</div>
                <div id='title'>{val.title}</div>
            </li>
        )
      }
      )
    }
    
      </ul>
    </div>
    </div>
  )
}

export default Sidebar
