import { AdminNavigationConfig, UserNavigationConfig } from 'configs/navigation'
import React from 'react'
import NavItem from './nav-item'

export default function DefaultNavList() {

    const isAdmin = true

    return (
        <div className='default-nav-list'>
            {
                isAdmin ? AdminNavigationConfig.map(nav => <NavItem key={nav.key} nav={nav} />) :
                    UserNavigationConfig.map(nav => <NavItem key={nav.key} nav={nav} />)
            }
        </div>
    )
}
