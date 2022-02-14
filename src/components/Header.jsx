import React from 'react'

function Header({ text, bgColor, color}) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: color
    }
    return (
        <header style = {headerStyles}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'Feedback Application',
    bgColor: 'rgba(0,0,0,0.4)',
    color: '#ff6a95'
}

export default Header
