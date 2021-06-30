import React from 'react'
import './Header.css'
import blueStacksLogo from '../images/bluestackslogo.png';


const Header = () => {
    return (
        <div className = "header">
            <img className = "logo" alt = "bluestackslogo" src = {blueStacksLogo}/>
        </div>
    )
}

export default Header
