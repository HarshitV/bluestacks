import React from 'react'
import './CampaignCard.css'
import { getDayMessage } from '../utils/handleDates';
import fileLogo from '../images/file.png'
import priceLogo from '../images/Price.png'
import calendarLogo from '../images/calendar.png'
import statsLogo from '../images/statistics-report.png'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const CampaignCard = props => {

    const renderCampaginCard = () => {
        const {showHidePopup, reschedule, campaignList, id} = props;
        let myList = []
        campaignList.forEach(campaign => {
            const campaignDate = new Date(campaign.createdOn);
            const date = campaignDate.toLocaleString('default', { month: 'short' }) + " " + campaignDate.getFullYear() + ", " + campaignDate.getDate();
            const today = new Date();
            const diff = parseInt((today - campaignDate) / (1000 * 60 * 60 * 24), 10); 
            let numberMessage = getDayMessage(id, diff);
            
            myList.push(
            <div key = {campaign.id} className="card-content card-body">
                <div>
                <div style={{ color: "#2C406C" }}>{date}</div>{" "}
                <div style={{ fontStyle: "italic", fontSize: "13px" }}>
                    {numberMessage}
                </div>
                </div>
                <div className = "campaign"><img loading = "lazy" src = {campaign.image_url} alt = "icon" className = "game-icon"/><div><div style={{ color: "#2C406C" }}>{campaign.name}</div><div style={{ fontStyle: "italic", fontSize: "13px" }}>{campaign.region}</div></div></div>
                <div className = "action" onClick = {() => showHidePopup(campaign)}><img src = {priceLogo} alt = "price-icon" className = "action-icon"/>View Pricing</div>
                <div className = "actions">
                    <div className = "action">
                        <img src = {fileLogo} alt = "file-icon" className = "action-icon"/>
                        <div>CSV</div>
                    </div>
                    <div className = "action">
                        <img src = {statsLogo} alt = "calendar-icon" className = "action-icon"/>
                        <div >Report</div>
                    </div>
                    <div className = "action">
                        <DatePicker customInput={<div style = {{display: "flex", alignItems: "center"}}><img style = {{height: "1.6rem"}} src = {calendarLogo} alt = "calendar-icon" className = "action-icon"/><div>Schedule Again</div></div>} selected={new Date(campaign.createdOn)} onChange={(date) => reschedule(id,campaign,date)} />
                    </div>
                </div>
            </div>
            );
        });
        return myList;
    }

    return (
        <div>
            {renderCampaginCard()}
        </div>
    )
}

export default CampaignCard
