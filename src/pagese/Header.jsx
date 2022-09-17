import React from 'react'
import { NavLink } from 'react-router-dom'
import "./page.css"
function Header() {
  return (
    <div>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li><br />
                
            </ul>
        </nav>
    </div>
  )
}

export default Header
