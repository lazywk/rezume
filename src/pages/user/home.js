import UserAction from 'components/templates/user/action'
import UserCareer from 'components/templates/user/career'
import UserHero from 'components/templates/user/user-hero'
import React, { useEffect, useState } from 'react'
import UserAbout from './about'
import { CSSTransition } from 'react-transition-group'

export default function UserHomePage() {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setShowPage(true)
  }, [])

  return (
    <CSSTransition
      in={showPage}
      timeout={300}
      classNames="page"
      unmountOnExit
    >
      <div className='user-home'>
        <UserHero />
        <UserCareer />
        <UserAction />
        <UserAbout />
      </div>
    </CSSTransition>
  )
}
