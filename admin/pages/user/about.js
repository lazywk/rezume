import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group';

export default function UserAbout() {
    const date = new Date().getFullYear() - 2004
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
            <div className='about'>
                <h2 className='about-title'>About me</h2>
                <p className='about-content'>
                    Hello, my name is Daniyor, I'm {date} years old, I live in Tashkent, my main job is coding, in my free time and on weekends I spend time with my friends and family, sometimes I play sports, I try to work more on myself and I have many goals, I write my blogs in Uzbek
                </p>
            </div>
        </CSSTransition>
    )
}
