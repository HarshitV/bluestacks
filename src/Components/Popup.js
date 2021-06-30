import React from 'react'
import './Popup.css'

const Popup = props => {
    const {showHidePopup, popup: campaign} = props;
    return (
        <div className = "popup">
        <div className = "popup-content">
            <div className = "popup-head">
                <img src = {campaign.image_url} alt = "icon" className = "popup-game-icon"/><div><div style={{ fontWeight: "bolder", color: "#2C406C" }}>{campaign.name}</div><div style={{ marginTop: "1rem", fontSize: "13px" }}>{campaign.region}</div></div>
            </div>      
            <h2 style = {{color: "#2C406C"}}>Pricing</h2>
            <div className = "popup-pricing"><div>1 Week - 1 Month</div><div style = {{fontWeight: "bolder"}}>{campaign.price[0]}$</div></div>
            <div className = "popup-pricing"><div>6 Months</div><div style = {{fontWeight: "bolder"}}>{campaign.price[1]}$</div></div>
            <div className = "popup-pricing"><div>1 Year</div><div style = {{fontWeight: "bolder"}}>{campaign.price[2]}$</div></div>
            <div className = "close-button"><button onClick = {() => showHidePopup(null)}>close</button></div>
        </div>
        </div>
    )
}

export default Popup
