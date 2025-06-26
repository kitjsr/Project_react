
import { Col, Container, Row } from 'react-bootstrap'
import React, { useState } from 'react'

import { FaBars, FaHeart, FaPlus } from "react-icons/fa";
import './App.css';
import { SidebarData } from './SidebarData'
import { NavLink } from 'react-router';

const Dashboard=({children})=>{
        const[isOpen,setIsOpen]=useState(false);
        const toggle=()=>setIsOpen(!isOpen);
  return (
    <Container fluid className='dash'>
        <Row>
            <Col md={2}>
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
            </Col>
            <Col md={10}></Col>
        </Row>
    </Container>
  )
}
export default Dashboard


// import React, { useState } from 'react'
// import { FaBars, FaHeart, FaPlus } from "react-icons/fa";
// import {BsFillPersonFill} from "react-icons/bs";
// import './Dashboard.css';
// import { NavLink } from 'react-router';
//     const Dashboard=({children})=>{
//         const[isOpen,setIsOpen]=useState(false);
//         const toggle=()=>setIsOpen(!isOpen);
//     const menuItem=[
//         {
//         title:"Home",
//         icon:<FaPlus /> ,
//         link:"/home",
//     },
//     {
//         title:"Item",
//         icon:<BsFillPersonFill/>,
//         link:"/additem",
//     },
//     {
//         title:"Invoice",
//         icon:<BsFillPersonFill/>,
//         link:"/invoice",
//     },
//     {
//         title:"Register",
//         icon:<BsFillPersonFill/>,
//         link:"/register",
//     },
//     {
//         title:"Home",
//         icon:<BsFillPersonFill/>,
//         link:"/home",
//     },
//     ];
//   return (
//     <div className="container">
//       <div style={{width:isOpen ? "300px":"50px"}} className="sidebar">
//         <div className='top-section'>
//             <h1 style={{display:isOpen ? "block":"none"}} className='logo'>LOGO</h1>
//             <div style={{marginLeft:isOpen ? "50px":"0px"}} className='bars'>
//                 <FaBars onClick={toggle}/>
//             </div>
//         </div>
//         {
//             menuItem.map((item,index)=> (
//                 <NavLink to={item.path} key={index} className="link" activeclassname="active">
//                     <div className='icon'>{item.icon}</div>
//                     <div style={{display:isOpen ? "block":"none"}} className='"link-text'>{item.name}</div>
//                 </NavLink>
//             )
//         )
//         }
//       </div>
//       <main>{children}</main>
//     </div>
//   )
// }

// export default Dashboard
