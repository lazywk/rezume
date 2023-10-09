import Logo from 'components/elements/logo'
import Navbar from 'components/templates/navbar'
import React from 'react'

export default function Header() {
  return (
    <div className='default-header'>
      <Logo />
      <Navbar />
    </div>
  )
}
