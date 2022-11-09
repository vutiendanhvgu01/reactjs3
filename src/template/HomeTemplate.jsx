import React, { Component } from 'react'
import { NavLink, Outlet } from "react-router-dom";
import '../index.css'
export default class HomeTemplate extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-3'>
        <header className="bg-white p-5 nav align-center h-100 headerCol">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          isActive ? "nav-link bg-dark text-white" : "nav-link"
        }
        
      >
        Home
      </NavLink>
      <NavLink
        to="/shop"
        className={({ isActive }) =>
          isActive ? "nav-link bg-dark text-white" : "nav-link"
        }
      >
        Shop
      </NavLink>
      
    </header>
    </div>
    <div className="content col-9" style={{ minHeight: "75vh" }}>
      <Outlet />
    </div></div>
    )
  }
}


