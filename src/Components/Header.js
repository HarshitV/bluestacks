import React from 'react'
import './Header.css'
import blueStacksLogo from '../images/bluestackslogo.png';


const Header = props => {
    return (
        <div className = "header">
            <img className = "logo" alt = "bluestackslogo" src = {blueStacksLogo}/>
            <select className = "dropdown" onChange = {props.handleLanguage}>
                <option name = "language" value = "EN">English</option>
                <option name = "language" value = "DE">German</option>
                {/* <input name = "language" value = "EN" type = "radio" defaultChecked/> EN
                <input name = "language" value = "DE" type = "radio"/> DE */}
            </select>
        </div>
    )
}

export default Header
