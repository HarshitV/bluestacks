import React from 'react'
import './Header.css'
import blueStacksLogo from '../images/bluestackslogo.png';


const Header = props => {
    return (
        <div className = "header">
            <img className = "logo" alt = "bluestackslogo" src = {blueStacksLogo}/>
            <div className = "radio-button" onChange = {props.handleLanguage}>
                <input name = "language" value = "EN" type = "radio" defaultChecked/> EN
                <input name = "language" value = "DE" type = "radio"/> DE
            </div>
        </div>
    )
}

export default Header
