import { UserNavigationConfig } from 'configs/navigation'
import React from 'react'
import NavItem from './nav-item'

export default function DefaultNavList() {

    

    return (
        <div className='default-nav-list'>
            {
                UserNavigationConfig.map(nav => <NavItem key={nav.key} nav={nav}/>)
            }
        </div>
    )
}
