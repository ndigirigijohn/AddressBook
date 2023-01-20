import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import {AiOutlinePlus} from 'react-icons/ai'

function Header() {
  return (
    <div className="Header">
        <div className="Add">
            <p>
                <AiOutlinePlus/>
            </p>

        </div>
        <div className="heading">
            <div>My Contacts</div>
            <p>Friends(200)</p>
        </div>
        <div className="header_Nav">
            <div className='all'><Link to='/'>All Contacts</Link></div>
            <div><Link to='/'>Office</Link></div>
            <div><Link to='/'>Family</Link></div>
            <div className='new'><Link to='/'>+ New Group</Link></div>
        </div>
    </div>
  )
}

export default Header