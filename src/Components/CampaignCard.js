import React from "react";
import "./CampaignCard.css";
import { getDayMessage } from "../utils/handleDates";
import fileLogo from "../images/file.png";
import priceLogo from "../images/Price.png";
import calendarLogo from "../images/calendar.png";
import statsLogo from "../images/statistics-report.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CampaignCard = ({
  showHidePopup,
  reschedule,
  campaignList,
  language,
  id,
}) => {
  const renderCampaginCard = () => {
    let myList = [];
    // Iterate for each campaign for current tab
    campaignList.forEach((campaign) => {
      const campaignDate = new Date(campaign.createdOn);
      // Convert date to Mon YYYY, DD format
      const date =
        campaignDate.toLocaleString("default", { month: "short" }) +
        " " +
        campaignDate.getFullYear() +
        ", " +
        campaignDate.getDate();
      const today = new Date();
      const diff = parseInt((today - campaignDate) / (1000 * 60 * 60 * 24), 10);
      // Get the x days ago, y months ahead etc. message
      let numberMessage = getDayMessage(id, diff, language);

      myList.push(
        <div key={campaign.id} className="card-content card-body">
          <div>
            <div style={{ color: "#2C406C" }}>{date}</div>{" "}
            <div className="italic-subtext">{numberMessage}</div>
          </div>
          <div className="campaign">
            {/* Lazy load game logos for faster initial render */}
            <img
              loading="lazy"
              src={campaign.image_url}
              alt="icon"
              className="game-icon"
            />
            <div>
              <div style={{ color: "#2C406C" }}>{campaign.name}</div>
              <div className="italic-subtext">{campaign.region}</div>
            </div>
          </div>
          <div className="action" onClick={() => showHidePopup(campaign)}>
            <img src={priceLogo} alt="price-icon" className="action-icon" />
            {language.pricing}
          </div>
          <div className="actions">
            <div className="action">
              <img src={fileLogo} alt="file-icon" className="action-icon" />
              <div>CSV</div>
            </div>
            <div className="action">
              <img
                src={statsLogo}
                alt="calendar-icon"
                className="action-icon"
              />
              <div>{language.report}</div>
            </div>
            <div className="action">
              {/* Open date picker on clicking schedule again icon/text */}
              <DatePicker
                customInput={
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      style={{ height: "1.6rem" }}
                      src={calendarLogo}
                      alt="calendar-icon"
                      className="action-icon"
                    />
                    <div>{language.schedule}</div>
                  </div>
                }
                selected={new Date(campaign.createdOn)}
                onChange={(date) => reschedule(id, campaign, date)}
              />
            </div>
          </div>
        </div>
      );
    });
    return myList;
  };

  return <div>{renderCampaginCard()}</div>;
};

export default CampaignCard;
