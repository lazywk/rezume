import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group';



export default function BlogPage() {
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
      <div className='blog'>
        <p className='about-content'>
          Blog page
        </p>
      </div>
    </CSSTransition>
  )
}