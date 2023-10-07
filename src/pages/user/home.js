import UserAction from 'components/templates/user/action'
import UserCareer from 'components/templates/user/career'
import UserHero from 'components/templates/user/user-hero'
import React from 'react'

export default function UserHomePage() {
  return (
    <div className='user-home'>
      <UserHero />
      <UserCareer />
      <UserAction />
    </div>
  )
}
