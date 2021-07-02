import React, { useState, useEffect } from "react";
import server from "./server";
import "./App.css";
import CampaignList from "./Components/CampaignList";
import Header from "./Components/Header";
import NavigationBar from "./Components/NavigationBar";
import { filterCampaigns } from "./utils/handleDates";
import Popup from "./Components/Popup";
import languages from "./utils/languages";
import { handleReschedule } from "./helpers";

const App = () => {
  const [popup, setPopup] = useState(null);
  const [activeTab, setActiveTab] = useState(1);
  const [campaigns, setCampaigns] = useState([[], [], []]);
  const [language, setLanguage] = useState(languages("EN"));

  const showHidePopup = (campaign) => {
    setPopup(campaign);
  };

  // e.target.value -> EN: ENGLISH | DE: GERMAN
  const handleLanguage = (e) => {
    setLanguage(languages(e.target.value));
  };

  // 1 - UPCOMING | 2 - LIVE | 3 - PAST
  const handleActiveTab = (id) => {
    setActiveTab(id);
  };

  // Update "campaigns" on reschedule
  const reschedule = (id, campaign, date) => {
    setCampaigns(handleReschedule(campaigns, date, campaign, id));
  };

  // Fetch campaign data, filter and store in "campaigns"
  // campaigns[0] - UPCOMING | campaigns[1] - LIVE | campaigns[2] - PAST
  const fetchApiData = async () => {
    const res = await fetch("/api/campaigns").then((res) => res.json());
    setCampaigns(filterCampaigns(res.data, 1));
  };

  // Create server and fetch data on app load
  useEffect(() => {
    server();
    fetchApiData();
  }, []);

  return (
    <div>
      {/* Display bluestacks logo and language dropdown */}
      <Header handleLanguage={handleLanguage} />
      <div className="body-container">
        {/* Display popup if not null */}
        {popup ? (
          <Popup
            showHidePopup={showHidePopup}
            popup={popup}
            language={language}
          />
        ) : null}

        {/* App Header */}
        <h1 style={{ color: "#1F2740" }}>{language.heading}</h1>

        {/* Display Navigation Tabs */}
        <NavigationBar
          activeTab={activeTab}
          handleActiveTab={handleActiveTab}
          language={language}
        />

        {/* Campaign details | Active tab's campaigns passed as props */}
        <CampaignList
          id={activeTab}
          campaignList={campaigns[activeTab - 1]}
          showHidePopup={showHidePopup}
          reschedule={reschedule}
          language={language}
        />
      </div>
    </div>
  );
};

export default App;
