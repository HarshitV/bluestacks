import React from "react";
import "./Popup.css";

const Popup = ({ showHidePopup, popup: campaign, language }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <div className="popup-head">
          <img
            src={campaign.image_url}
            alt="icon"
            className="popup-game-icon"
          />
          <div>
            <div style={{ fontWeight: "bolder", color: "#2C406C" }}>
              {campaign.name}
            </div>
            <div style={{ marginTop: "1rem", fontSize: "13px" }}>
              {campaign.region}
            </div>
          </div>
        </div>
        <h2 style={{ color: "#2C406C" }}>{language.popup[0]}</h2>
        <div className="popup-pricing">
          <div>
            1 {language.popup[1]} - 1 {language.period[1]}
          </div>
          <div style={{ fontWeight: "bolder" }}>{campaign.price[0]}$</div>
        </div>
        <div className="popup-pricing">
          <div>6 {language.period[1] + language.period[3]}</div>
          <div style={{ fontWeight: "bolder" }}>{campaign.price[1]}$</div>
        </div>
        <div className="popup-pricing">
          <div>1 {language.period[2]}</div>
          <div style={{ fontWeight: "bolder" }}>{campaign.price[2]}$</div>
        </div>
        <div className="close-button-container">
          <button className="close-button" onClick={() => showHidePopup(null)}>
            {language.popup[2]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
