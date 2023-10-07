import Button from 'components/elements/button'
import React from 'react'

export default function UserAction() {
    return (
        <div className='user-action'>
            <Button text="Download CV"/>
            <a target='blank' href='https://t.me/lazywk' className='button def-button'>Contact me</a>
        </div>
    )
}
