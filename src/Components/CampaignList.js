import React from "react";
import CampaignCard from "./CampaignCard";
import "./CampaignList.css";

const CampaignList = ({
  reschedule,
  showHidePopup,
  id,
  campaignList,
  language,
}) => {
  return (
    <div className="campaign-card">
      <div className="card-content card-header">
        <div>{language.date}</div>
        <div>{language.campaign}</div>
        <div>{language.view}</div>
        <div>{language.actions}</div>
      </div>
      <div className="card-data">
        <CampaignCard
          reschedule={reschedule}
          showHidePopup={showHidePopup}
          campaignList={campaignList}
          language={language}
          id={id}
        />
      </div>
    </div>
  );
};

export default CampaignList;
