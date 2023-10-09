import React from 'react'

export default function Footer() {

    const date = new Date().getFullYear()

    return (
        <div className='footer'>
            <p>
                © doniyorveb.uz | {date} All rigths reserved
            </p>
        </div>
    )
}
