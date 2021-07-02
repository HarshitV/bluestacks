import React, {useState, useEffect} from 'react'
import server from "./server";
import './App.css'
import CampaignList from './Components/CampaignList'
import Header from './Components/Header'
import NavigationBar from './Components/NavigationBar'
import { getDayDifference, getDayDifferenceForOne } from './utils/handleDates';
import Popup from './Components/Popup';
import languages from './utils/languages';

let json = [];

const App = () => {

  const [popup, setPopup] = useState(null);
  const [activeTab, setActiveTab] = useState(1);
  const [campaignList, setCampaignList] = useState([])
  const [fullList, setFullList] = useState([])
  const [language, setLanguage] = useState(languages("EN"))

  const showHidePopup = (campaign) => {
    setPopup(campaign);
  }

  const handleLanguage = (e) => {
    setLanguage(languages(e.target.value))
  }

  const handleActiveTab = (id) => {
    let filteredList = getDayDifference(fullList,id);
    setCampaignList(filteredList)
    setActiveTab(id);
  }

  const reschedule = (id, campaign, date) => {
    const rescheduleList = fullList.map(el => {
      if(el.name === campaign.name)
        el.createdOn = date;
      return el;
    })
    setFullList(rescheduleList)
    let filteredList = getDayDifferenceForOne(campaign,id);
    let tempList = campaignList;
    var index = tempList.indexOf(campaign);
    if(filteredList === null)
      tempList.splice(index, 1);
    setCampaignList(tempList)
  }

  const fetchApiData = async () => {
    const res = await fetch("/api/campaigns");
    json = await res.json();
    setFullList(json.data);
    let filteredList = getDayDifference(json.data,1)
    setCampaignList(filteredList);
  };

  useEffect(() => {
    server();
    fetchApiData();
  }, []);

  return (
    <div>
      <Header handleLanguage = {handleLanguage}/>
      <div className = "body-container">
        {popup? <Popup showHidePopup = {showHidePopup} popup = {popup} language = {language}/>: null}
        <h1 style = {{color: "#1F2740"}}>{language.heading}</h1>
        <NavigationBar activeTab = {activeTab} handleActiveTab = {handleActiveTab} language = {language}/>
        <CampaignList id = {activeTab} campaignList = {campaignList} showHidePopup = {showHidePopup} reschedule = {reschedule} language = {language}/>
      </div>
    </div>
  )
}

export default App
