import React, { useState, useEffect } from 'react'
import server from "./server";
import './App.css'
import CampaignList from './Components/CampaignList'
import Header from './Components/Header'
import NavigationBar from './Components/NavigationBar'
import { getDayDifference } from './utils/handleDates';
import Popup from './Components/Popup';
import languages from './utils/languages';
import { handleReschedule } from './helpers';

const App = () => {

  const [popup, setPopup] = useState(null);
  const [activeTab, setActiveTab] = useState(1);
  const [campaigns, setCampaigns] = useState([[], [], []]);
  const [language, setLanguage] = useState(languages("EN"))

  const showHidePopup = (campaign) => {
    setPopup(campaign);
  }

  const handleLanguage = (e) => {
    setLanguage(languages(e.target.value))
  }

  const handleActiveTab = (id) => {
    setActiveTab(id);
  }

  const reschedule = (id, campaign, date) => {
    setCampaigns(handleReschedule(campaigns, date, campaign, id));
  }

  const fetchApiData = async () => {
    const res = await fetch("/api/campaigns").then(res => res.json());
    setCampaigns(getDayDifference(res.data, 1));
  };

  useEffect(() => {
    server();
    fetchApiData();
  }, []);

  return (
    <div>
      <Header handleLanguage={handleLanguage} />
      <div className="body-container">
        {popup ? <Popup showHidePopup={showHidePopup} popup={popup} language={language} /> : null}
        <h1 style={{ color: "#1F2740" }}>{language.heading}</h1>
        <NavigationBar activeTab={activeTab} handleActiveTab={handleActiveTab} language={language} />
        <CampaignList id={activeTab} campaignList={campaigns[activeTab - 1]} showHidePopup={showHidePopup} reschedule={reschedule} language={language} />
      </div>
    </div>
  )
}

export default App
