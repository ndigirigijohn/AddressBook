import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="Header">
        <div className="Add">
            <p>+</p>

        </div>
        <div className="heading">
            <h1>My Contacts</h1>
            <p>Friends(200)</p>
        </div>
        <div className="header_Nav">
            <div><Link to='/'>All Contacts</Link></div>
            <div><Link to='/'>Office</Link></div>
            <div><Link to='/'>Family</Link></div>
            <div><Link to='/'>+ New Group</Link></div>
        </div>
    </div>
  )
}

export default Header