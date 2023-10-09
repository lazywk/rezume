import { UserNavigationConfig } from 'configs/navigation'
import React from 'react'
import NavItem from './nav-item'
import { AdminNavigationConfig } from '../../../configs/navigation'

export default function DefaultNavList() {


    return (
        <div className='default-nav-list'>
            {
                AdminNavigationConfig.map(nav => <NavItem key={nav.key} nav={nav}/>)
            }
        </div>
    )
}
