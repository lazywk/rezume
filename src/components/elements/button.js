import React from 'react'

export default function Button({ text, className = '' }) {
    return (
        <button className={`button ${className}`}>
            {text}
        </button>
    )
}
