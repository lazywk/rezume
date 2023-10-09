import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavItem({ nav }) {
    return (
        <div className='nav-item'>
            <NavLink className="nav-item-link" to={nav.path}>{nav.name}</NavLink>
        </div>
    )
}
